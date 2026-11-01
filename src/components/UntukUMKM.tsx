// src/components/UntukUMKM.tsx
import { Building2, CalendarCheck, FileText, TrendingUp } from "lucide-react";

const manfaat = [
  {
    icon: CalendarCheck,
    judul: "Jadwal Jemput Rutin",
    deskripsi:
      "Kami menyesuaikan jadwal jemput dengan jam operasional usaha Anda — tanpa mengganggu aktivitas dapur.",
  },
  {
    icon: FileText,
    judul: "Bukti Setoran Digital",
    deskripsi:
      "Setiap setoran tercatat rapi. Anda mendapat bukti yang bisa digunakan untuk pencatatan usaha.",
  },
  {
    icon: TrendingUp,
    judul: "Pencatatan Volume",
    deskripsi:
      "Pantau total volume setoran dan akumulasi poin usaha Anda secara berkala.",
  },
  {
    icon: Building2,
    judul: "Kemungkinan Harga Khusus",
    deskripsi:
      "UMKM dengan volume besar berpotensi mendapat skema harga yang lebih menguntungkan. [ISI: detail segera dikonfirmasi]",
  },
];

export function UntukUMKM() {
  return (
    <section
      id="umkm"
      className="section-spacing bg-[var(--deep-green)]"
      aria-labelledby="umkm-heading"
    >
      <div className="container-site">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <span
            className="badge mb-4 inline-flex"
            style={{
              backgroundColor: "rgba(104,237,204,0.15)",
              color: "#68EDCC",
            }}
          >
            Untuk UMKM
          </span>
          <h2
            id="umkm-heading"
            className="font-heading font-bold text-[var(--white)] text-[28px] lg:text-[40px] mb-4"
          >
            Warung &amp; Restoran juga{" "}
            <span className="text-[var(--sunflower)]">dapat manfaatnya</span>
          </h2>
          <p className="text-[var(--white)] opacity-75 text-[16px] lg:text-[18px] max-w-lg mx-auto">
            JelantahKu melayani warung, katering, dan restoran kecil di
            Semarang. Volume lebih besar, manfaat lebih besar.
          </p>
        </div>

        {/* Manfaat grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
          {manfaat.map((m) => {
            const Icon = m.icon;
            return (
              <div key={m.judul} className="card-dark">
                <div className="icon-circle mb-4" style={{ background: "rgba(104,237,204,0.15)" }}>
                  <Icon size={22} color="#68EDCC" aria-hidden="true" />
                </div>
                <h3 className="font-heading font-semibold text-[var(--white)] text-[18px] mb-3">
                  {m.judul}
                </h3>
                <p className="text-[var(--white)] opacity-70 text-[15px] leading-relaxed">
                  {m.deskripsi}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a href="#daftar" className="btn-primary">
            Daftarkan Usaha Anda
          </a>
        </div>
      </div>
    </section>
  );
}

