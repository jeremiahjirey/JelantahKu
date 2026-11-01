// src/components/CaraKerja.tsx
import { Package, CalendarCheck, Scale, Coins } from "lucide-react";

const langkah = [
  {
    nomor: "01",
    icon: Package,
    judul: "Kumpulkan",
    deskripsi:
      "Simpan minyak jelantah bekas pakai dalam botol atau wadah tertutup di rumah. Tidak perlu disaring terlebih dahulu.",
  },
  {
    nomor: "02",
    icon: CalendarCheck,
    judul: "Jadwalkan Jemput",
    deskripsi:
      "Isi form pendaftaran atau hubungi kami via WhatsApp. Tim JelantahKu akan menjemput ke lokasi kamu di Semarang.",
  },
  {
    nomor: "03",
    icon: Scale,
    judul: "Ditimbang",
    deskripsi:
      "Minyakmu ditimbang langsung di depan kamu. Kami menerima minyak yang memenuhi kriteria kualitas minimal.",
  },
  {
    nomor: "04",
    icon: Coins,
    judul: "Poin Masuk",
    deskripsi:
      "Poin langsung masuk ke saldo digitalmu setelah penimbangan selesai. Kumpulkan dan tukarkan kapan pun kamu mau.",
  },
];

export function CaraKerja() {
  return (
    <section
      id="cara-kerja"
      className="section-spacing bg-[var(--seafoam-20)]"
      aria-labelledby="cara-kerja-heading"
    >
      <div className="container-site">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <span className="badge mb-4 inline-flex">Cara Kerja</span>
          <h2
            id="cara-kerja-heading"
            className="font-heading font-bold text-[var(--deep-green)] text-[28px] lg:text-[40px] mb-4"
          >
            Empat langkah, semudah itu
          </h2>
          <p className="text-[var(--deep-green)] opacity-75 text-[16px] lg:text-[18px] max-w-lg mx-auto">
            Dari kumpulkan sampai dapat poin — prosesnya sederhana dan kami
            yang sebagian besar mengerjakannya.
          </p>
        </div>

        {/* Langkah-langkah */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {langkah.map((l, i) => {
            const Icon = l.icon;
            return (
              <div key={l.nomor} className="card relative">
                {/* Konektor panah (hanya desktop) */}
                {i < langkah.length - 1 && (
                  <div
                    aria-hidden="true"
                    className="hidden lg:block absolute top-10 -right-3 z-10 text-[var(--deep-green-10)]"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 18l6-6-6-6"
                        stroke="#E9EEE6"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                )}

                {/* Nomor */}
                <span className="text-[var(--deep-green-10)] font-heading font-bold text-4xl leading-none mb-4 block">
                  {l.nomor}
                </span>

                {/* Ikon */}
                <div className="icon-circle icon-circle-seafoam mb-4">
                  <Icon size={22} aria-hidden="true" />
                </div>

                <h3 className="font-heading font-semibold text-[var(--deep-green)] text-[20px] mb-3">
                  {l.judul}
                </h3>
                <p className="text-[var(--deep-green)] opacity-75 text-[15px] leading-relaxed">
                  {l.deskripsi}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA bawah */}
        <div className="text-center mt-12">
          <a href="#daftar" className="btn-primary">
            Mulai Sekarang
          </a>
        </div>
      </div>
    </section>
  );
}

