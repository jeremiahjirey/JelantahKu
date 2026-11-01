// src/components/Hero.tsx
import { siteConfig } from "@/config/site";

export function Hero() {
  return (
    <section
      id="beranda"
      className="section-spacing bg-[var(--cream)] relative overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Blob dekoratif latar */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-24 w-[480px] h-[480px] rounded-full bg-[var(--seafoam-20)] opacity-50 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 -left-20 w-[320px] h-[320px] rounded-full bg-[var(--sunflower-15)] opacity-40 blur-3xl"
      />

      <div className="container-site relative">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Teks */}
          <div className="flex-1 text-center lg:text-left max-w-xl mx-auto lg:mx-0">
            {/* Badge */}
            <span className="badge mb-6 inline-flex">
              <span aria-hidden="true">📍</span> Melayani Semarang
            </span>

            <h1
              id="hero-heading"
              className="font-heading font-bold text-[var(--deep-green)] leading-[1.1] mb-6"
              style={{ fontSize: "clamp(2rem, 5vw, 3.75rem)" }}
            >
              Setorkan{" "}
              <span className="underline-wave">Minyak Jelantah</span>
              <br />
              kamu, Dapat Saldo
            </h1>

            <p
              className="text-[var(--deep-green)] text-[17px] lg:text-[18px] leading-[1.65] mb-8 opacity-80 max-w-[540px] mx-auto lg:mx-0"
            >
              JelantahKu menjemput minyak jelantah dari rumah tangga dan warung
              di Semarang. Minyakmu ditimbang, kamu dapat poin yang bisa
              ditukar — sambil ikut menjaga lingkungan.
            </p>

            {/* Masalah singkat */}
            <p
              className="text-[14px] text-[var(--deep-green)] opacity-70 mb-8 max-w-[480px] mx-auto lg:mx-0 leading-relaxed"
            >
              Jelantah dibuang ke saluran air merusak lingkungan. Dipakai
              berulang-ulang membahayakan kesehatan. Ada pilihan yang lebih
              baik — setor ke JelantahKu.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <a href="#daftar" className="btn-primary">
                Jadwalkan Jemput
              </a>
              <a href="#cara-kerja" className="btn-secondary">
                Lihat Cara Kerja
              </a>
            </div>
          </div>

          {/* Ilustrasi visual */}
          {/* TODO: ganti dengan foto asli tim / botol jelantah / ibu penyetor */}
          <div className="flex-1 flex justify-center lg:justify-end w-full max-w-sm lg:max-w-none">
            <div
              aria-hidden="true"
              className="relative w-[280px] h-[280px] md:w-[360px] md:h-[360px] lg:w-[420px] lg:h-[420px]"
            >
              {/* Lingkaran latar */}
              <div className="absolute inset-0 rounded-full bg-[var(--seafoam-20)]" />

              {/* Ilustrasi tetes besar */}
              <div
                className="animate-float absolute inset-0 flex items-center justify-center"
              >
                <svg
                  viewBox="0 0 200 220"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-48 h-56 md:w-56 md:h-64"
                  aria-label="Ilustrasi tetes minyak jelantah"
                >
                  {/* Botol */}
                  <rect
                    x="72"
                    y="60"
                    width="56"
                    height="130"
                    rx="16"
                    fill="#FAA61A"
                    opacity="0.9"
                  />
                  <rect
                    x="84"
                    y="44"
                    width="32"
                    height="22"
                    rx="8"
                    fill="#283F1C"
                    opacity="0.8"
                  />
                  {/* Label */}
                  <rect
                    x="80"
                    y="100"
                    width="40"
                    height="52"
                    rx="8"
                    fill="#FFFCF5"
                    opacity="0.85"
                  />
                  <text
                    x="100"
                    y="122"
                    textAnchor="middle"
                    fill="#283F1C"
                    fontSize="8"
                    fontWeight="700"
                    fontFamily="system-ui"
                  >
                    JelantahKu
                  </text>
                  <text
                    x="100"
                    y="136"
                    textAnchor="middle"
                    fill="#283F1C"
                    fontSize="7"
                    fontFamily="system-ui"
                  >
                    minyak jelantah
                  </text>

                  {/* Tetes jatuh */}
                  <path
                    d="M100 160 C96 170 90 178 90 185 C90 194 94 200 100 200 C106 200 110 194 110 185 C110 178 104 170 100 160Z"
                    fill="#68EDCC"
                    opacity="0.85"
                  />
                </svg>
              </div>

              {/* Poin kecil mengambang */}
              <div
                className="absolute top-8 right-4 bg-[var(--sunflower)] rounded-2xl px-3 py-2 shadow-md animate-fade-up"
                style={{ animationDelay: "200ms" }}
              >
                <p className="text-[var(--deep-green)] text-xs font-bold leading-tight">
                  +Poin
                </p>
                <p className="text-[var(--deep-green)] text-[10px]">
                  per liter
                </p>
              </div>

              {/* Badge "Dijemput" */}
              <div
                className="absolute bottom-10 left-0 bg-white rounded-2xl px-3 py-2 shadow-md animate-fade-up border border-[var(--deep-green-10)]"
                style={{ animationDelay: "400ms" }}
              >
                <p className="text-[var(--deep-green)] text-xs font-bold">
                  ✅ Dijemput gratis
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave bawah */}
      <div className="wave-divider mt-16 -mb-1">
        <svg
          viewBox="0 0 1440 60"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z"
            fill="#DCFAF2"
          />
        </svg>
      </div>
    </section>
  );
}

