// src/app/api/daftar/route.ts
// Endpoint pendaftaran / jemput JelantahKu
// Meneruskan data ke Google Apps Script via GOOGLE_SCRIPT_URL
// Rate limit sederhana: max 5 req / IP / 60 detik (in-memory, reset saat server restart)

import { NextRequest, NextResponse } from "next/server";

// ── Rate limiter sederhana (in-memory) ──────────────────────
const rateMap = new Map<string, { count: number; reset: number }>();
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 60_000;

function getClientIp(req: NextRequest): string {
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
    "unknown"
  );
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateMap.get(ip);
  if (!entry || now > entry.reset) {
    rateMap.set(ip, { count: 1, reset: now + RATE_WINDOW_MS });
    return false;
  }
  if (entry.count >= RATE_LIMIT) return true;
  entry.count++;
  return false;
}

// ── Validasi format WhatsApp Indonesia ───────────────────────
function isValidWa(value: string): boolean {
  return /^(\+62|62|08)\d{8,13}$/.test(value.replace(/\s/g, ""));
}

// ── POST handler ─────────────────────────────────────────────
export async function POST(req: NextRequest) {
  const ip = getClientIp(req);

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { ok: false, message: "Terlalu banyak permintaan. Coba lagi sebentar." },
      { status: 429 }
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { ok: false, message: "Format data tidak valid." },
      { status: 400 }
    );
  }

  // Honeypot: field ini harus kosong (bot biasanya mengisinya)
  if (body._hp) {
    // Pura-pura sukses supaya bot tidak tahu
    return NextResponse.json({ ok: true });
  }

  // Validasi field wajib
  const { nama, whatsapp, kecamatan, jenisPenyetor, volume, setuju } = body;

  if (!nama || typeof nama !== "string" || nama.trim().length < 2) {
    return NextResponse.json(
      { ok: false, message: "Nama lengkap harus diisi (min. 2 karakter)." },
      { status: 400 }
    );
  }
  if (!whatsapp || typeof whatsapp !== "string" || !isValidWa(whatsapp)) {
    return NextResponse.json(
      {
        ok: false,
        message:
          "Nomor WhatsApp tidak valid. Gunakan format 08... atau +62...",
      },
      { status: 400 }
    );
  }
  if (!kecamatan || typeof kecamatan !== "string") {
    return NextResponse.json(
      { ok: false, message: "Pilih kecamatan terlebih dahulu." },
      { status: 400 }
    );
  }
  if (!jenisPenyetor || typeof jenisPenyetor !== "string") {
    return NextResponse.json(
      { ok: false, message: "Pilih jenis penyetor." },
      { status: 400 }
    );
  }
  if (!volume || typeof volume !== "string") {
    return NextResponse.json(
      { ok: false, message: "Pilih perkiraan volume." },
      { status: 400 }
    );
  }
  if (!setuju) {
    return NextResponse.json(
      { ok: false, message: "Persetujuan data wajib dicentang." },
      { status: 400 }
    );
  }

  // Teruskan ke Google Apps Script jika URL tersedia
  const scriptUrl = process.env.GOOGLE_SCRIPT_URL;
  if (scriptUrl) {
    try {
      const payload = {
        nama: String(nama).trim(),
        whatsapp: String(whatsapp).trim(),
        kecamatan,
        jenisPenyetor,
        volume,
        alamat: typeof body.alamat === "string" ? body.alamat.trim() : "",
        catatan: typeof body.catatan === "string" ? body.catatan.trim() : "",
        timestamp: new Date().toISOString(),
      };
      await fetch(scriptUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    } catch (err) {
      // Log server-side, tetapi jangan blokir respons
      console.error("[daftar] Gagal mengirim ke Google Script:", err);
    }
  }

  return NextResponse.json({ ok: true });
}

