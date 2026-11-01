// src/components/Panduan.tsx
import { CheckCircle2, XCircle } from "lucide-react";

const diterima = [
  "Minyak goreng bekas pakai (nabati)",
  "Minyak sawit, minyak jagung, minyak kedelai bekas",
  "Disimpan dalam wadah tertutup",
  "Warna kecokelatan sampai kehitaman wajar",
];

const ditolak = [
  "Minyak yang bercampur air dalam jumlah banyak",
  "Minyak yang sudah basi dan berbau sangat menyengat",
  "Minyak mineral / oli mesin",
  "Minyak hewani murni (lemak babi, tallow)",
];

const caraMenyiapkan = [
  {
    langkah: "1",
    teks: "Biarkan minyak dingin sempurna setelah memasak sebelum disimpan.",
  },
  {
    langkah: "2",
    teks: "Saring partikel besar (remah gorengan) jika memungkinkan — tidak wajib.",
  },
  {
    langkah: "3",
    teks: "Simpan dalam botol atau jeriken plastik atau kaca bertutup rapat.",
  },
  {
    langkah: "4",
    teks: "Simpan di tempat teduh, jauh dari panas langsung.",
  },
];

export function Panduan() {
  return (
    <section
      id="panduan"
      className="section-spacing bg-[var(--cream)]"
      aria-labelledby="panduan-heading"
    >
      <div className="container-site">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <span className="badge mb-4 inline-flex">Panduan Kualitas</span>
          <h2
            id="panduan-heading"
            className="font-heading font-bold text-[var(--deep-green)] text-[28px] lg:text-[40px] mb-4"
          >
            Minyak apa yang kami terima?
          </h2>
          <p className="text-[var(--deep-green)] opacity-75 text-[16px] lg:text-[18px] max-w-lg mx-auto">
            Tidak rumit — minyak goreng bekas pakai biasa dari dapur kamu
            hampir pasti masuk kriteria.
          </p>
        </div>

        {/* Dua kolom: diterima / ditolak */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {/* Diterima */}
          <div className="card border-[var(--seafoam)] border-2">
            <h3 className="font-heading font-semibold text-[var(--deep-green)] text-[18px] mb-5 flex items-center gap-2">
              <CheckCircle2
                size={20}
                color="#283F1C"
                aria-hidden="true"
              />
              ✅ Diterima
            </h3>
            <ul className="flex flex-col gap-3" role="list">
              {diterima.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    size={18}
                    className="text-[var(--deep-green)] opacity-50 mt-0.5 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span className="text-[var(--deep-green)] text-[15px] leading-relaxed opacity-85">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Ditolak */}
          <div className="card border-[#B3261E] border-2" style={{ borderColor: "#F5C6C4" }}>
            <h3 className="font-heading font-semibold text-[var(--deep-green)] text-[18px] mb-5 flex items-center gap-2">
              <XCircle size={20} color="#B3261E" aria-hidden="true" />
              ❌ Tidak Diterima
            </h3>
            <ul className="flex flex-col gap-3" role="list">
              {ditolak.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <XCircle
                    size={18}
                    color="#B3261E"
                    className="opacity-60 mt-0.5 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span className="text-[var(--deep-green)] text-[15px] leading-relaxed opacity-85">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Cara menyiapkan */}
        <div className="card max-w-2xl mx-auto">
          <h3 className="font-heading font-semibold text-[var(--deep-green)] text-[18px] mb-5">
            Cara Menyimpan Jelantah
          </h3>
          <ol className="flex flex-col gap-4">
            {caraMenyiapkan.map((item) => (
              <li key={item.langkah} className="flex items-start gap-4">
                <span
                  className="flex h-7 w-7 items-center justify-center rounded-full bg-[var(--seafoam-20)] text-[var(--deep-green)] text-[13px] font-bold flex-shrink-0 mt-0.5"
                  aria-hidden="true"
                >
                  {item.langkah}
                </span>
                <p className="text-[var(--deep-green)] text-[15px] leading-relaxed opacity-85">
                  {item.teks}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

