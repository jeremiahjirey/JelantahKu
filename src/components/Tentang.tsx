// src/components/Tentang.tsx

export function Tentang() {
  return (
    <section
      id="tentang"
      className="section-spacing bg-[var(--seafoam-20)]"
      aria-labelledby="tentang-heading"
    >
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Foto tim */}
          {/* TODO: ganti dengan foto asli tim */}
          <div className="relative">
            <div
              className="w-full aspect-[4/3] rounded-[28px] bg-[var(--deep-green-10)] flex items-center justify-center overflow-hidden"
              aria-label="Foto tim JelantahKu — segera diperbarui"
            >
              <div className="text-center p-8">
                <div
                  aria-hidden="true"
                  className="text-6xl mb-4"
                >
                  👥
                </div>
                <p className="text-[var(--deep-green)] opacity-50 text-[14px] font-medium">
                  {/* TODO: ganti dengan foto asli tim */}
                  Foto tim segera hadir
                </p>
              </div>
            </div>

            {/* Badge floating */}
            <div
              className="absolute -bottom-4 -right-4 bg-[var(--sunflower)] rounded-2xl px-4 py-3 shadow-md"
              aria-hidden="true"
            >
              <p className="text-[var(--deep-green)] font-bold text-[13px] leading-tight">
                📍 Semarang
              </p>
              <p className="text-[var(--deep-green)] text-[11px] opacity-80">
                Jawa Tengah
              </p>
            </div>
          </div>

          {/* Teks */}
          <div>
            <span className="badge mb-6 inline-flex">Tentang Kami</span>
            <h2
              id="tentang-heading"
              className="font-heading font-bold text-[var(--deep-green)] text-[28px] lg:text-[36px] mb-6 leading-[1.2]"
            >
              Dimulai dari satu pertanyaan sederhana
            </h2>
            <p className="text-[var(--deep-green)] opacity-80 text-[16px] lg:text-[17px] leading-relaxed mb-4">
              Ke mana perginya minyak jelantah yang dibuang setiap hari? Pertanyaan
              itulah yang mengawali JelantahKu — sebuah inisiatif dari Semarang
              untuk mengelola jelantah dengan cara yang benar.
            </p>
            <p className="text-[var(--deep-green)] opacity-80 text-[16px] lg:text-[17px] leading-relaxed mb-6">
              Kami percaya bahwa perubahan besar dimulai dari langkah kecil
              yang konsisten. Satu tetes, satu perubahan — dan setiap rumah
              tangga serta warung di Semarang bisa ikut berkontribusi.
            </p>

            {/* Misi */}
            <div className="card">
              <h3 className="font-heading font-semibold text-[var(--deep-green)] text-[16px] mb-3">
                Misi Kami
              </h3>
              <p className="text-[var(--deep-green)] opacity-75 text-[15px] leading-relaxed">
                Membangun sistem pengepulan minyak jelantah yang mudah, jujur,
                dan menguntungkan bagi masyarakat Semarang — sekaligus
                menyalurkannya ke industri energi terbarukan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

