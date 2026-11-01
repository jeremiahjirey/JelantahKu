// src/config/site.ts
// ─────────────────────────────────────────────────────────────
// Konfigurasi global JelantahKu.
// Ubah nilai di sini tanpa menyentuh komponen.
// Nilai [ISI] berarti belum dikonfirmasi tim — isi sebelum rilis.
// ─────────────────────────────────────────────────────────────

export const siteConfig = {
  // ── Identitas ──────────────────────────────────────────────
  name: "JelantahKu",
  tagline: "One Drop, One Change",
  description:
    "Jual minyak jelantah dari rumah atau usaha di Semarang. Dijemput, ditimbang, dan dapat poin yang bisa ditukar. One Drop, One Change.",
  url: "https://jelantahku.id", // [ISI] ganti dengan domain resmi

  // ── Kontak ─────────────────────────────────────────────────
  // Format: kode negara tanpa +, lanjut nomor (62812XXXXXXXX)
  whatsappNumber: "628XXXXXXXXXX", // [ISI] ganti dengan nomor WA resmi
  instagramUrl: "https://instagram.com/jelantahku", // [ISI] ganti jika berbeda
  email: "halo@jelantahku.id", // [ISI] ganti dengan email resmi

  // ── Wilayah ────────────────────────────────────────────────
  city: "Semarang",
  province: "Jawa Tengah",

  // ── Poin & Setoran ─────────────────────────────────────────
  // null = belum dikonfirmasi → UI tampilkan "Segera diumumkan"
  pointsRate: null as number | null, // [ISI] misal: 100 (poin per liter)
  minimumLiters: null as number | null, // [ISI] misal: 1 (liter minimum)
  pointsRedemption: null as string | null, // [ISI] misal: "Pulsa, e-wallet, belanja mitra"

  // ── Dampak ─────────────────────────────────────────────────
  // null = belum ada data nyata → UI tampilkan "Segera dimulai"
  impactLiters: null as number | null, // [ISI] liter terkumpul nyata

  // ── Link Aplikasi ──────────────────────────────────────────
  // Kosongkan (undefined) untuk menyembunyikan tombol unduh
  appLinks: {
    playStore: undefined as string | undefined, // [ISI] link Google Play jika sudah ada
    appStore: undefined as string | undefined,  // [ISI] link App Store jika sudah ada
  },

  // ── SEO ────────────────────────────────────────────────────
  ogImage: "/og-image.png",

  // ── Kecamatan Kota Semarang ────────────────────────────────
  kecamatan: [
    "Banyumanik",
    "Candisari",
    "Gajah Mungkur",
    "Gayamsari",
    "Genuk",
    "Gunungpati",
    "Mijen",
    "Ngaliyan",
    "Pedurungan",
    "Semarang Barat",
    "Semarang Selatan",
    "Semarang Tengah",
    "Semarang Timur",
    "Semarang Utara",
    "Tembalang",
    "Tugu",
    "Di luar Semarang",
  ],
} as const;

export type SiteConfig = typeof siteConfig;
