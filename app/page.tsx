// "use client";

// import { navItems } from "@/data";

// import Hero from "@/components/Hero";
// import Grid from "@/components/Grid";
// import Footer from "@/components/Footer";
// import Clients from "@/components/Clients";
// import Approach from "@/components/Approach";
// import Experience from "@/components/Experience";
// import RecentProjects from "@/components/RecentProjects";
// import { FloatingNav } from "@/components/ui/FloatingNavbar";

// const Home = () => {
//   return (
//     <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
//       <div className="max-w-7xl w-full">
//         <FloatingNav navItems={navItems} />
//         <Hero />
//         <Grid />
//         <RecentProjects />
//         <Clients />
//         <Experience />
//         <Approach />
//         <Footer />
//       </div>
//     </main>
//   );
// };

// export default Home;

"use client";

import dynamic from "next/dynamic";
import { navItems } from "@/data";

// Dynamically import components that rely on browser APIs
const FloatingNav = dynamic(
  () => import("@/components/ui/FloatingNavbar").then((mod) => mod.FloatingNav),
  { ssr: false }
);
const Hero = dynamic(() => import("@/components/Hero"), { ssr: false });
const Grid = dynamic(() => import("@/components/Grid"), { ssr: false });
const RecentProjects = dynamic(
  () => import("@/components/RecentProjects"),
  { ssr: false }
);
const Clients = dynamic(() => import("@/components/Clients"), { ssr: false });
const Experience = dynamic(
  () => import("@/components/Experience"),
  { ssr: false }
);
const Approach = dynamic(() => import("@/components/Approach"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Clients />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}

