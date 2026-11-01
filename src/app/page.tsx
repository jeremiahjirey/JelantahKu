import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { CaraKerja } from "@/components/CaraKerja";
import { Poin } from "@/components/Poin";
import { UntukUMKM } from "@/components/UntukUMKM";
import { Panduan } from "@/components/Panduan";
import { Tentang } from "@/components/Tentang";
import { FormDaftar } from "@/components/FormDaftar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CaraKerja />
        <Poin />
        <UntukUMKM />
        <Panduan />
        <Tentang />
        <FormDaftar />
      </main>
    </>
  );
}