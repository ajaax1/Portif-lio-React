import Image from "next/image";
import Nav from './components/nav'
import Perfil from './components/perfil'
import Projects from './components/projects'
import Experience from "./components/education";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className="bg-neutral-900 h-full grow shrink basis-0">
      <Nav />
      <main className="w-full  flex-col flex items-center bg-neutral-900 pt-32">
        <Perfil />
        <Projects />
        <Experience />
      </main>
      <Footer />
    </div>
  );
}
