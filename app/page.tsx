"use client";
import Layout from "@/components/layout/Layout";
import Contact1 from "@/components/sections/Contact1";
import Home1 from "@/components/sections/Home1";
import Projects1 from "@/components/sections/Projects1";
import Service1 from "@/components/sections/Service1";
import Skills1 from "@/components/sections/Skills1";
import Static1 from "@/components/sections/Static1";
import Resume1 from "@/components/sections/Resume1";

export default function Home() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1}>
        <video className="background-video" autoPlay loop muted playsInline>
          <source src="/assets/vedios/vedio5.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <Home1 />
        <Static1 />
        <Service1 />
        <Projects1 />
        <Resume1 />
        <Skills1 />
        <Contact1 />
      </Layout>
      <style jsx>{`
        .background-video {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          // opacity: 15%;

          z-index: -1;
        }
      `}</style>
    </>
  );
}
