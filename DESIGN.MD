# DESIGN.md — JelantahKu Landing Page

Dokumen ini adalah sumber kebenaran visual dan konten untuk landing page JelantahKu. Ikuti dokumen ini sebelum membuat keputusan desain sendiri. Jika ada konflik dengan default framework, dokumen ini yang menang.

---

## 1. Brand

- **Nama**: JelantahKu (di logo ditulis "Jelantahku"; di teks web gunakan **JelantahKu**)
- **Tagline**: *One Drop, One Change*
- **Apa itu**: Layanan pengepul minyak jelantah dari rumah tangga dan UMKM di Semarang. Penyetor mendapat saldo digital berbasis poin yang bisa ditukar. Minyak yang terkumpul disalurkan ke industri yang membutuhkan (bahan baku energi terbarukan).
- **Tahap**: Pra-aplikasi. Web ini adalah pusat informasi, pintu pendaftaran/jemput, dan tempat link aplikasi mobile nanti.
- **Wilayah**: Semarang saja untuk saat ini.
- **Audiens**: (1) Ibu rumah tangga dan keluarga, (2) pemilik warung, katering, dan restoran kecil. Banyak yang membuka dari HP lewat WhatsApp atau Instagram.

### Kepribadian
Hangat, jujur, membumi, dan terpercaya. Seperti tetangga yang rapi dan bisa diandalkan, bukan korporasi dingin dan bukan startup yang hype. Optimis tentang dampak kecil yang terkumpul ("satu tetes, satu perubahan").

### Nada tulisan
- Bahasa Indonesia santai-sopan. Pakai "kamu/Anda" secara konsisten: gunakan **"kamu"** untuk rumah tangga, **"Anda"** pada halaman UMKM.
- Kalimat pendek. Hindari istilah teknis di bagian depan (tulis "energi terbarukan", bukan "biodiesel/SAF" kecuali di FAQ).
- Jangan mengklaim angka yang belum ada. Gunakan placeholder `[ISI]` untuk data yang belum dikonfirmasi tim.

---

## 2. Warna

Palet resmi dari file brand. Jangan menambah warna aksen baru.

| Token | Nama | Hex | RGB | Peran |
|---|---|---|---|---|
| `--deep-green` | Deep Green | `#283F1C` | 40, 63, 28 | Warna utama: teks, heading, footer, section gelap |
| `--sunflower` | Sunflower | `#FAA61A` | 250, 166, 26 | Aksen utama: tombol CTA, highlight, ikon penting |
| `--seafoam` | Seafoam | `#68EDCC` | 104, 237, 204 | Aksen sekunder: latar section lembut, badge, ilustrasi |
| `--white` | White | `#FFFFFF` | 255, 255, 255 | Latar utama dan teks di atas warna gelap |

> Catatan: file brand menulis Sunflower sebagai `#FAA51A`, tetapi nilai RGB-nya (250, 166, 26) setara `#FAA61A`. Pakai `#FAA61A`. Perbedaannya tidak terlihat.

### Turunan yang diperbolehkan (tint/shade dari palet di atas saja)
```css
:root {
  --deep-green: #283F1C;
  --deep-green-90: #3A5530;      /* hover/kartu di atas deep-green */
  --deep-green-10: #E9EEE6;      /* garis tipis, border */
  --sunflower: #FAA61A;
  --sunflower-hover: #E8940A;
  --sunflower-15: #FEF1D9;       /* latar lembut aksen */
  --seafoam: #68EDCC;
  --seafoam-20: #DCFAF2;         /* latar section lembut */
  --white: #FFFFFF;
  --cream: #FFFCF5;              /* latar halaman: putih hangat */
}
```

### Aturan penggunaan
- Proporsi kira-kira: putih/cream 60%, Deep Green 25%, Seafoam 10%, Sunflower 5%. Sunflower itu langka supaya CTA menonjol.
- **Satu CTA Sunflower utama per layar.**
- Latar section bergantian: cream → seafoam-20 → putih → deep-green (section gelap sekali atau dua kali saja).

### Kontras (sudah dihitung, patuhi)
| Kombinasi | Rasio | Boleh? |
|---|---|---|
| Deep Green di atas putih | 11.6:1 | ✅ semua ukuran teks |
| Deep Green di atas Seafoam | 8.0:1 | ✅ |
| Deep Green di atas Sunflower | 5.8:1 | ✅ teks tombol |
| Sunflower di atas Deep Green | 5.8:1 | ✅ heading/ikon/angka di section gelap |
| Putih di atas Sunflower | 2.0:1 | ❌ jangan |
| Sunflower di atas putih (teks) | 2.0:1 | ❌ hanya untuk dekorasi besar, bukan teks |
| Seafoam di atas putih (teks) | 1.4:1 | ❌ dekorasi/latar saja |

Aturan turunannya: **teks tombol Sunflower = Deep Green, bukan putih.** Teks di latar Seafoam atau Sunflower selalu Deep Green.

---

## 3. Logo

Aset logo disediakan tim (file di `/public/brand/`). Jangan menggambar ulang atau mengubah bentuknya.

| Latar | Versi logo |
|---|---|
| Putih / cream / Seafoam | Logo **Deep Green** (horizontal) |
| Deep Green | Logo **Sunflower** (vertikal atau horizontal) |
| Sunflower | Logo **Deep Green** |
| Hitam/gelap netral | Logo putih atau Sunflower |

- Navbar: logo horizontal, tinggi 32–40px.
- Footer: logo vertikal atau horizontal versi terang di atas Deep Green.
- Ruang bebas: minimal setara tinggi huruf "J" di sekeliling logo.
- Favicon: ikon tetes dari logo, versi Sunflower di atas Deep Green.
- Jika file logo belum ada di repo, pakai placeholder teks "JelantahKu" dan beri komentar `TODO: ganti dengan logo resmi`.

### Motif visual dari logo
Logo berbentuk **tetes minyak yang menyatu dengan sosok/daun**. Gunakan bentuk tetes dan lengkung organik sebagai motif: divider section berbentuk gelombang lembut, bentuk blob di belakang foto, ikon bergaya tetes. Hindari sudut tajam dan garis kaku.

---

## 4. Tipografi

Font dari Google Fonts, dimuat lewat `next/font` (tanpa layout shift).

- **Heading**: **Outfit** (600, 700). Geometris-bulat, selaras dengan wordmark logo.
- **Body & UI**: **Plus Jakarta Sans** (400, 500, 600, 700). Terbaca baik di layar HP dan ramah untuk teks Indonesia.

### Skala (mobile → desktop)
| Peran | Mobile | Desktop | Weight | Line-height |
|---|---|---|---|---|
| Hero H1 | 36px | 60px | 700 | 1.1 |
| H2 section | 28px | 40px | 700 | 1.2 |
| H3 | 20px | 24px | 600 | 1.3 |
| Body | 16px | 18px | 400 | 1.6 |
| Kecil/caption | 14px | 14px | 500 | 1.5 |
| Tombol | 16px | 16px | 600 | 1 |

- Teks body tidak pernah di bawah 16px di mobile.
- Panjang baris maksimum 65 karakter untuk paragraf.
- Heading boleh menyorot satu kata kunci dengan warna Sunflower **hanya di section Deep Green**; di section terang gunakan garis bawah bergelombang Seafoam.

---

## 5. Layout dan spacing

- **Mobile-first.** Desain untuk 360px dulu, lalu 768px dan 1280px.
- Container maksimum 1160px, gutter samping 20px (mobile) / 32px (desktop).
- Jarak vertikal antar section: 72px (mobile) / 120px (desktop).
- Grid 4pt: gunakan kelipatan 4/8/16/24/32/48/72/120.
- Radius: kartu 24px, tombol pill penuh (999px), input 14px, gambar 28px.
- Bayangan lembut saja: `0 8px 30px rgba(40,63,28,0.08)`. Tanpa bayangan hitam pekat.
- Navbar sticky, latar putih/cream dengan blur halus; tombol CTA kecil di kanan.
- **Tombol WhatsApp mengambang** di kanan bawah (mobile dan desktop), Deep Green dengan ikon putih, tidak menutupi form.

---

## 6. Komponen

### Tombol
- **Primer**: latar Sunflower, teks Deep Green, pill, tinggi 52px, hover `--sunflower-hover` + naik 2px.
- **Sekunder**: outline 2px Deep Green, teks Deep Green; hover isi Deep Green, teks putih.
- **Di atas section gelap**: primer tetap Sunflower; sekunder outline putih.
- Fokus keyboard: ring 3px Seafoam dengan offset 2px (di latar gelap) atau Deep Green (di latar terang).

### Kartu
Latar putih (atau Deep Green-90 di section gelap), radius 24px, padding 24–32px, border 1px `--deep-green-10`. Ikon dalam lingkaran Seafoam-20 atau Sunflower-15.

### Input form
Tinggi 52px, radius 14px, border 1.5px Deep Green-10, fokus border Deep Green + ring Seafoam. Label selalu terlihat di atas input (jangan hanya placeholder). Pesan galat berwarna merah gelap `#B3261E` dengan ikon, bukan hanya warna.

### Badge
Pill kecil, latar Seafoam-20, teks Deep Green, 14px/600. Contoh: "Wilayah Semarang".

### Ikon
Gaya outline 2px, sudut membulat (Lucide). Warna Deep Green; aksen Sunflower hanya pada satu elemen ikon.

### Ilustrasi dan foto
- Prioritaskan foto nyata (tim, botol jelantah, proses jemput, ibu-ibu penyetor, warung mitra). Jika belum ada, gunakan ilustrasi datar sederhana dengan palet brand, bukan stok foto generik.
- Tandai tempat foto asli dengan placeholder dan komentar `TODO: ganti dengan foto asli tim`.

---

## 7. Struktur halaman (satu halaman panjang + anchor)

Urutan section. ID anchor dalam kurung.

1. **Navbar** — logo, tautan: Cara Kerja · Poin · UMKM · Panduan · FAQ, tombol "Jadwalkan Jemput".
2. **Hero** (`#beranda`) — H1, subjudul, dua CTA (primer "Jadwalkan Jemput", sekunder "Lihat Cara Kerja"), badge "Melayani Semarang", visual tetes/botol.
3. **Masalah singkat** — 2–3 kalimat: jelantah dibuang ke saluran air mencemari lingkungan, atau dipakai berulang dan membahayakan kesehatan. Solusi: setorkan ke JelantahKu.
4. **Cara Kerja** (`#cara-kerja`) — 4 langkah: Kumpulkan → Jadwalkan jemput/antar → Minyak ditimbang → Poin masuk ke saldo.
5. **Poin & Saldo** (`#poin`) — penjelasan skema poin, contoh perhitungan (`[ISI: 1 liter = X poin]`), apa yang bisa ditukar (`[ISI]`). Tampilkan sebagai kartu dan tabel kecil.
6. **Untuk Rumah Tangga** — manfaat, jumlah minimal setoran `[ISI]`, cara menyiapkan.
7. **Untuk UMKM** (`#umkm`) — manfaat: jadwal jemput rutin, bukti setoran, pencatatan volume, kemungkinan harga khusus `[ISI]`. Section Deep Green. CTA "Daftarkan Usaha Anda".
8. **Panduan Kualitas** (`#panduan`) — dua kolom: ✅ Diterima / ❌ Ditolak; cara menyaring dan menyimpan.
9. **Perjalanan Minyak** — alur sederhana: rumah/UMKM → JelantahKu → mitra industri → energi terbarukan. Jangan sebut nama perusahaan sebelum ada izin.
10. **Dampak** — counter liter terkumpul. Awalnya tampilkan "Segera dimulai" atau angka nyata dari tim; jangan angka rekaan.
11. **Tentang Kami** (`#tentang`) — cerita singkat, foto tim, misi.
12. **Daftar / Jadwalkan Jemput** (`#daftar`) — form (lihat §8). Di sampingnya, kartu "Lebih suka WhatsApp?".
13. **Aplikasi Segera Hadir** — mockup HP, teks "Aplikasi JelantahKu segera hadir", form daftar tunggu (email/WhatsApp), slot tombol Google Play / App Store (disembunyikan lewat konfigurasi sampai link siap).
14. **FAQ** (`#faq`) — akordeon, 8–10 pertanyaan (§9).
15. **Footer** — logo, tagline, kontak, Instagram, link Kebijakan Privasi, © tahun berjalan.

---

## 8. Form pendaftaran / jemput

Field:
1. Nama lengkap (wajib)
2. Nomor WhatsApp (wajib, validasi format Indonesia `08…` atau `+62…`)
3. Kecamatan di Semarang (pilihan: 16 kecamatan Kota Semarang + "Di luar Semarang")
4. Jenis penyetor: Rumah tangga / Warung-UMKM / Katering-Restoran
5. Perkiraan volume per minggu: < 2 L / 2–5 L / 5–20 L / > 20 L
6. Alamat singkat atau patokan (opsional)
7. Catatan (opsional)
8. Persetujuan: "Saya setuju data saya dipakai JelantahKu untuk menghubungi saya" (wajib)

Perilaku:
- Kirim ke endpoint `/api/daftar`, yang meneruskan ke Google Apps Script/Google Sheets lewat variabel lingkungan `GOOGLE_SCRIPT_URL`.
- Honeypot field tersembunyi dan rate limit sederhana untuk menahan spam.
- Setelah berhasil: tampilkan pesan terima kasih + tombol "Konfirmasi lewat WhatsApp" yang membuka `wa.me` dengan pesan terisi otomatis.
- Status loading, galat, dan sukses harus terlihat jelas dan dapat diakses (aria-live).
- Satu form yang sama dipakai di #daftar; form daftar tunggu aplikasi terpisah dan lebih pendek (nama + WhatsApp/email).

---

## 9. FAQ (draf, sesuaikan dengan tim)

1. Minyak seperti apa yang diterima?
2. Berapa minimal setoran?
3. Bagaimana cara menyiapkan dan menyimpan jelantah?
4. Apakah dijemput? Biayanya?
5. Bagaimana poin dihitung dan kapan masuk?
6. Poin bisa ditukar dengan apa?
7. Wilayah mana saja yang dilayani?
8. Ke mana minyak saya disalurkan?
9. Apakah data saya aman?
10. Kapan aplikasinya rilis?

Jawaban yang belum pasti ditandai `[ISI]`. Jangan mengarang kebijakan.

---

## 10. Gerak dan interaksi

- Halus dan bertujuan: fade-up 12px saat section masuk viewport (durasi 500ms, easing `cubic-bezier(.2,.7,.2,1)`), animasi tetes jatuh pelan di hero (loop pendek, bisa dimatikan).
- Hormati `prefers-reduced-motion`: matikan semua animasi non-esensial.
- Tidak ada carousel otomatis, parallax berat, atau pop-up yang menutup layar.

---

## 11. Aksesibilitas dan performa

- Target WCAG AA. Ikuti tabel kontras di §2.
- HTML semantik (`header`, `nav`, `main`, `section`, `footer`), satu `h1`, urutan heading benar.
- Semua gambar punya `alt` bermakna; ikon dekoratif `aria-hidden`.
- Area sentuh minimal 48×48px.
- Lighthouse target: Performance ≥ 90, Accessibility ≥ 95, SEO ≥ 95 di mobile.
- Gambar pakai `next/image`, format WebP/AVIF, `loading="lazy"` kecuali hero.

---

## 12. SEO dan meta

- `lang="id"`.
- Title: `JelantahKu — Setor Minyak Jelantah, Dapat Saldo | Semarang`
- Description: `Jual minyak jelantah dari rumah atau usaha di Semarang. Dijemput, ditimbang, dan dapat poin yang bisa ditukar. One Drop, One Change.`
- Open Graph + Twitter card dengan gambar 1200×630 berlatar Deep Green dan logo Sunflower.
- JSON-LD `LocalBusiness` (nama, wilayah layanan Semarang, kontak).
- Kata kunci alami di teks: "jual minyak jelantah Semarang", "setor jelantah", "pengepul minyak jelantah".
- `sitemap.xml` dan `robots.txt`.

---

## 13. Konfigurasi yang dapat diubah tanpa menyentuh kode komponen

Satu berkas `src/config/site.ts`:
- `whatsappNumber` (format internasional tanpa +, contoh `62812XXXXXXX`)
- `instagramUrl`, `email`
- `appLinks: { playStore?: string, appStore?: string }` — jika kosong, sembunyikan tombol unduh dan tampilkan daftar tunggu
- `pointsRate`, `minimumLiters` — nilai `[ISI]` sampai dikonfirmasi
- `impactLiters` — angka dampak nyata atau `null`

---

## 14. Yang harus dihindari

- Warna di luar palet; gradasi ungu/biru ala template SaaS.
- Teks putih di atas Sunflower; teks Seafoam di atas putih.
- Foto stok generik berlogo orang berjas.
- Angka, testimoni, nama mitra, atau klaim sertifikasi yang dikarang.
- Jargon teknis di bagian atas halaman.
- Pop-up, auto-play suara, atau carousel otomatis.
- Menulis nama brand sebagai "Jelantahku" atau "JELANTAHKU" di teks isi (gunakan **JelantahKu**).
