"use client";

import { useState, useRef } from "react";
import { siteConfig } from "@/config/site";
import { AlertCircle, CheckCircle2, Loader2, MessageCircle } from "lucide-react";

const JENIS_PENYETOR = [
  "Rumah Tangga",
  "Warung / UMKM",
  "Katering / Restoran",
];

const VOLUME_OPTIONS = [
  "< 2 liter per minggu",
  "2–5 liter per minggu",
  "5–20 liter per minggu",
  "> 20 liter per minggu",
];

type Status = "idle" | "loading" | "success" | "error";

function buildWaMessage(data: {
  nama: string;
  kecamatan: string;
  jenisPenyetor: string;
  volume: string;
}): string {
  return encodeURIComponent(
    `Halo JelantahKu! Saya ${data.nama} dari ${data.kecamatan} sudah mendaftar sebagai ${data.jenisPenyetor} dengan perkiraan ${data.volume}. Mohon dikonfirmasi ya 🙏`
  );
}

export function FormDaftar() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [formData, setFormData] = useState({
    nama: "",
    whatsapp: "",
    kecamatan: "",
    jenisPenyetor: "",
    volume: "",
    alamat: "",
    catatan: "",
    setuju: false,
    _hp: "", // honeypot
  });
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const successRef = useRef<HTMLDivElement>(null);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) {
    const { name, value, type } = e.target;
    const checked =
      type === "checkbox" ? (e.target as HTMLInputElement).checked : undefined;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Hapus error field saat user mulai mengetik
    if (fieldErrors[name]) {
      setFieldErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  }

  function validate(): boolean {
    const errors: Record<string, string> = {};
    if (!formData.nama.trim() || formData.nama.trim().length < 2)
      errors.nama = "Nama lengkap harus diisi (min. 2 karakter).";
    if (!/^(\+62|62|08)\d{8,13}$/.test(formData.whatsapp.replace(/\s/g, "")))
      errors.whatsapp =
        "Nomor WhatsApp tidak valid. Gunakan format 08... atau +62...";
    if (!formData.kecamatan) errors.kecamatan = "Pilih kecamatan.";
    if (!formData.jenisPenyetor)
      errors.jenisPenyetor = "Pilih jenis penyetor.";
    if (!formData.volume) errors.volume = "Pilih perkiraan volume.";
    if (!formData.setuju)
      errors.setuju = "Persetujuan data wajib dicentang.";
    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/daftar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) {
        throw new Error(
          json.message ?? "Terjadi kesalahan. Coba lagi sebentar."
        );
      }
      setStatus("success");
      // Fokus ke pesan sukses untuk aksesibilitas
      setTimeout(() => successRef.current?.focus(), 100);
    } catch (err: unknown) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error
          ? err.message
          : "Terjadi kesalahan. Coba lagi sebentar."
      );
    }
  }

  if (status === "success") {
    const waMsg = buildWaMessage({
      nama: formData.nama,
      kecamatan: formData.kecamatan,
      jenisPenyetor: formData.jenisPenyetor,
      volume: formData.volume,
    });
    return (
      <div
        ref={successRef}
        tabIndex={-1}
        role="status"
        aria-live="polite"
        className="card text-center py-12"
      >
        <div className="flex justify-center mb-5">
          <div className="icon-circle icon-circle-seafoam w-16 h-16">
            <CheckCircle2 size={32} aria-hidden="true" />
          </div>
        </div>
        <h3 className="font-heading font-bold text-[var(--deep-green)] text-[22px] mb-3">
          Pendaftaran diterima!
        </h3>
        <p className="text-[var(--deep-green)] opacity-75 text-[16px] leading-relaxed mb-8 max-w-sm mx-auto">
          Terima kasih, <strong>{formData.nama}</strong>! Kami akan segera
          menghubungi kamu di nomor WhatsApp yang didaftarkan.
        </p>
        <a
          href={`https://wa.me/${siteConfig.whatsappNumber}?text=${waMsg}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary gap-2"
        >
          <MessageCircle size={18} aria-hidden="true" />
          Konfirmasi lewat WhatsApp
        </a>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      aria-label="Form pendaftaran setoran jelantah"
    >
      {/* Honeypot field tersembunyi */}
      <input
        type="text"
        name="_hp"
        value={formData._hp}
        onChange={handleChange}
        aria-hidden="true"
        tabIndex={-1}
        autoComplete="off"
        style={{ position: "absolute", left: "-9999px", opacity: 0, height: 0 }}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Nama */}
        <div className="form-group md:col-span-2">
          <label htmlFor="nama" className="form-label">
            Nama Lengkap <span className="required" aria-hidden="true">*</span>
          </label>
          <input
            id="nama"
            name="nama"
            type="text"
            className="form-input"
            placeholder="Contoh: Siti Rahayu"
            autoComplete="name"
            value={formData.nama}
            onChange={handleChange}
            aria-required="true"
            aria-describedby={fieldErrors.nama ? "nama-error" : undefined}
            aria-invalid={!!fieldErrors.nama}
          />
          {fieldErrors.nama && (
            <p id="nama-error" className="form-error" role="alert">
              <AlertCircle size={14} aria-hidden="true" />
              {fieldErrors.nama}
            </p>
          )}
        </div>

        {/* WhatsApp */}
        <div className="form-group md:col-span-2">
          <label htmlFor="whatsapp" className="form-label">
            Nomor WhatsApp <span className="required" aria-hidden="true">*</span>
          </label>
          <input
            id="whatsapp"
            name="whatsapp"
            type="tel"
            className="form-input"
            placeholder="08123456789 atau +62812..."
            autoComplete="tel"
            value={formData.whatsapp}
            onChange={handleChange}
            aria-required="true"
            aria-describedby={fieldErrors.whatsapp ? "wa-error" : undefined}
            aria-invalid={!!fieldErrors.whatsapp}
          />
          {fieldErrors.whatsapp && (
            <p id="wa-error" className="form-error" role="alert">
              <AlertCircle size={14} aria-hidden="true" />
              {fieldErrors.whatsapp}
            </p>
          )}
        </div>

        {/* Kecamatan */}
        <div className="form-group">
          <label htmlFor="kecamatan" className="form-label">
            Kecamatan di Semarang <span className="required" aria-hidden="true">*</span>
          </label>
          <div className="form-select-wrapper">
            <select
              id="kecamatan"
              name="kecamatan"
              className="form-select"
              value={formData.kecamatan}
              onChange={handleChange}
              aria-required="true"
              aria-describedby={fieldErrors.kecamatan ? "kec-error" : undefined}
              aria-invalid={!!fieldErrors.kecamatan}
            >
              <option value="">-- Pilih kecamatan --</option>
              {siteConfig.kecamatan.map((k) => (
                <option key={k} value={k}>
                  {k}
                </option>
              ))}
            </select>
          </div>
          {fieldErrors.kecamatan && (
            <p id="kec-error" className="form-error" role="alert">
              <AlertCircle size={14} aria-hidden="true" />
              {fieldErrors.kecamatan}
            </p>
          )}
        </div>

        {/* Jenis Penyetor */}
        <div className="form-group">
          <label htmlFor="jenisPenyetor" className="form-label">
            Jenis Penyetor <span className="required" aria-hidden="true">*</span>
          </label>
          <div className="form-select-wrapper">
            <select
              id="jenisPenyetor"
              name="jenisPenyetor"
              className="form-select"
              value={formData.jenisPenyetor}
              onChange={handleChange}
              aria-required="true"
              aria-describedby={
                fieldErrors.jenisPenyetor ? "jenis-error" : undefined
              }
              aria-invalid={!!fieldErrors.jenisPenyetor}
            >
              <option value="">-- Pilih jenis --</option>
              {JENIS_PENYETOR.map((j) => (
                <option key={j} value={j}>
                  {j}
                </option>
              ))}
            </select>
          </div>
          {fieldErrors.jenisPenyetor && (
            <p id="jenis-error" className="form-error" role="alert">
              <AlertCircle size={14} aria-hidden="true" />
              {fieldErrors.jenisPenyetor}
            </p>
          )}
        </div>

        {/* Volume */}
        <div className="form-group md:col-span-2">
          <label htmlFor="volume" className="form-label">
            Perkiraan Volume per Minggu <span className="required" aria-hidden="true">*</span>
          </label>
          <div className="form-select-wrapper">
            <select
              id="volume"
              name="volume"
              className="form-select"
              value={formData.volume}
              onChange={handleChange}
              aria-required="true"
              aria-describedby={fieldErrors.volume ? "vol-error" : undefined}
              aria-invalid={!!fieldErrors.volume}
            >
              <option value="">-- Pilih volume --</option>
              {VOLUME_OPTIONS.map((v) => (
                <option key={v} value={v}>
                  {v}
                </option>
              ))}
            </select>
          </div>
          {fieldErrors.volume && (
            <p id="vol-error" className="form-error" role="alert">
              <AlertCircle size={14} aria-hidden="true" />
              {fieldErrors.volume}
            </p>
          )}
        </div>

        {/* Alamat (opsional) */}
        <div className="form-group md:col-span-2">
          <label htmlFor="alamat" className="form-label">
            Alamat Singkat / Patokan{" "}
            <span className="font-normal opacity-60">(opsional)</span>
          </label>
          <input
            id="alamat"
            name="alamat"
            type="text"
            className="form-input"
            placeholder="Contoh: dekat Pasar Banyumanik, gang ke-2"
            autoComplete="street-address"
            value={formData.alamat}
            onChange={handleChange}
          />
        </div>

        {/* Catatan (opsional) */}
        <div className="form-group md:col-span-2">
          <label htmlFor="catatan" className="form-label">
            Catatan{" "}
            <span className="font-normal opacity-60">(opsional)</span>
          </label>
          <textarea
            id="catatan"
            name="catatan"
            className="form-textarea"
            placeholder="Ada yang ingin ditambahkan? Misal: waktu jemput yang cocok"
            value={formData.catatan}
            onChange={handleChange}
            rows={3}
          />
        </div>

        {/* Persetujuan */}
        <div className="md:col-span-2">
          <label className="checkbox-wrapper">
            <input
              type="checkbox"
              name="setuju"
              checked={formData.setuju}
              onChange={handleChange}
              aria-required="true"
              aria-describedby={fieldErrors.setuju ? "setuju-error" : undefined}
              aria-invalid={!!fieldErrors.setuju}
            />
            <span className="text-[var(--deep-green)] text-[14px] leading-relaxed">
              Saya setuju data saya dipakai JelantahKu untuk menghubungi saya
              terkait layanan pengepulan minyak jelantah.
            </span>
          </label>
          {fieldErrors.setuju && (
            <p id="setuju-error" className="form-error mt-2" role="alert">
              <AlertCircle size={14} aria-hidden="true" />
              {fieldErrors.setuju}
            </p>
          )}
        </div>

        {/* Error global */}
        {status === "error" && errorMsg && (
          <div
            className="md:col-span-2 flex items-center gap-3 p-4 rounded-2xl bg-[#FFF0F0] border border-[#F5C6C4]"
            role="alert"
            aria-live="assertive"
          >
            <AlertCircle size={18} color="#B3261E" aria-hidden="true" />
            <p className="text-[#B3261E] text-[14px] font-medium">{errorMsg}</p>
          </div>
        )}

        {/* Submit */}
        <div className="md:col-span-2">
          <button
            type="submit"
            className="btn-primary w-full"
            disabled={status === "loading"}
            aria-disabled={status === "loading"}
          >
            {status === "loading" ? (
              <>
                <Loader2
                  size={18}
                  className="animate-spin"
                  aria-hidden="true"
                />
                Mengirim...
              </>
            ) : (
              "Daftarkan Saya"
            )}
          </button>
        </div>
      </div>
    </form>
  );
}

