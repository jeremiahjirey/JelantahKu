// src/components/Poin.tsx
import { siteConfig } from "@/config/site";
import { Coins, Gift, Info } from "lucide-react";

// Contoh tukar poin (placeholder sampai dikonfirmasi tim)
const tabelPoin = [
  { volume: "< 2 liter", perkiraan: "[ISI] poin" },
  { volume: "2–5 liter", perkiraan: "[ISI] poin" },
  { volume: "5–20 liter", perkiraan: "[ISI] poin" },
  { volume: "> 20 liter", perkiraan: "[ISI] poin" },
];

export function Poin() {
  const rate = siteConfig.pointsRate;
  const minLiters = siteConfig.minimumLiters;
  const redemption = siteConfig.pointsRedemption;

  return (
    <section
      id="poin"
      className="section-spacing bg-[var(--white)]"
      aria-labelledby="poin-heading"
    >
      <div className="container-site">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <span className="badge mb-4 inline-flex">Poin &amp; Saldo</span>
          <h2
            id="poin-heading"
            className="font-heading font-bold text-[var(--deep-green)] text-[28px] lg:text-[40px] mb-4"
          >
            Minyakmu punya nilai
          </h2>
          <p className="text-[var(--deep-green)] opacity-75 text-[16px] lg:text-[18px] max-w-lg mx-auto">
            Setiap liter jelantah yang kamu setorkan diubah menjadi poin di
            saldo digitalmu.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Kartu info */}
          <div className="flex flex-col gap-6">
            {/* Skema poin */}
            <div className="card">
              <div className="flex items-start gap-4">
                <div className="icon-circle icon-circle-sunflower">
                  <Coins size={22} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-[var(--deep-green)] text-[18px] mb-2">
                    Cara Hitung Poin
                  </h3>
                  {rate ? (
                    <p className="text-[var(--deep-green)] opacity-80 text-[15px] leading-relaxed">
                      <strong>{rate} poin</strong> untuk setiap liter jelantah
                      yang diterima.
                    </p>
                  ) : (
                    <p className="text-[var(--deep-green)] opacity-70 text-[15px]">
                      Tarif poin segera diumumkan.{" "}
                      <span className="text-xs font-semibold">[ISI: 1 liter = X poin]</span>
                    </p>
                  )}
                  <p className="text-[var(--deep-green)] opacity-70 text-[14px] mt-2">
                    Minimal setoran:{" "}
                    {minLiters ? (
                      <strong>{minLiters} liter</strong>
                    ) : (
                      <span className="font-semibold">[ISI] liter</span>
                    )}
                  </p>
                </div>
              </div>
            </div>

            {/* Tukar dengan */}
            <div className="card">
              <div className="flex items-start gap-4">
                <div className="icon-circle icon-circle-seafoam">
                  <Gift size={22} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-[var(--deep-green)] text-[18px] mb-2">
                    Bisa Ditukar Dengan
                  </h3>
                  {redemption ? (
                    <p className="text-[var(--deep-green)] opacity-80 text-[15px]">
                      {redemption}
                    </p>
                  ) : (
                    <p className="text-[var(--deep-green)] opacity-70 text-[15px]">
                      Detail penukaran segera diumumkan.{" "}
                      <span className="text-xs font-semibold">
                        [ISI: pulsa, e-wallet, belanja mitra, dll.]
                      </span>
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Catatan transparansi */}
            <div
              className="flex gap-3 p-4 rounded-2xl bg-[var(--sunflower-15)] border border-[var(--sunflower)] border-opacity-30"
              role="note"
              aria-label="Informasi transparansi poin"
            >
              <Info size={18} className="mt-0.5 flex-shrink-0 text-[var(--deep-green)]" aria-hidden="true" />
              <p className="text-[var(--deep-green)] text-[13px] leading-relaxed opacity-80">
                Poin masuk ke saldo dalam waktu singkat setelah minyak
                ditimbang. Tidak ada potongan biaya jemput untuk wilayah
                layanan kami.
              </p>
            </div>
          </div>

          {/* Tabel perkiraan */}
          <div>
            <h3 className="font-heading font-semibold text-[var(--deep-green)] text-[18px] mb-4">
              Perkiraan Poin per Setoran
            </h3>
            <div className="overflow-hidden rounded-2xl border border-[var(--deep-green-10)] shadow-[var(--shadow-card)]">
              <table className="table-brand">
                <caption className="sr-only">
                  Tabel perkiraan poin berdasarkan volume setoran
                </caption>
                <thead>
                  <tr>
                    <th scope="col">Volume Setoran</th>
                    <th scope="col">Perkiraan Poin</th>
                  </tr>
                </thead>
                <tbody>
                  {tabelPoin.map((row) => (
                    <tr key={row.volume}>
                      <td>{row.volume}</td>
                      <td className="font-semibold">{row.perkiraan}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-[12px] text-[var(--deep-green)] opacity-60 mt-3">
              * Nilai poin masih ditetapkan tim dan akan diperbarui sebelum
              peluncuran resmi.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

