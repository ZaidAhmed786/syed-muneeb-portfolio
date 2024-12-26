"use client";

import Link from "next/link";
export default function Home1() {
  return (
    <>
      <section className="section-hero-1 position-relative pt-200 pb-120 overflow-hidden">
        {/* Background Video */}
        <video className="background-video" autoPlay loop muted playsInline>
          <source src="/assets/vedios/vedio4.webm" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Content Section */}
        <div className="container position-relative z-3">
          <div className="row">
            <div className="col-lg-6 col-md-12 mt-10">
              <span className="text-light">👋 Hello there! I'm </span>
              <h1 className="ds-2 mb-3">
                <span className="text-primary"> Muneeb</span>
              </h1>
              <p className="text-light mb-6">
                A highly skilled Full Stack Developer and UI/UX Designer with a
                strong commitment to delivering seamless and visually engaging
                digital solutions. With over 4 years of experience in web
                development and design, I excel at creating robust applications
                and user-centric interfaces that drive exceptional user
                experiences. My expertise lies in blending innovative
                technologies with modern design principles to craft solutions
                that are both functional and aesthetically pleasing.
              </p>
              <Link
                href="/#contact"
                className="btn btn-outline-secondary d-inline-flex align-items-center"
              >
                <span>Hire me</span>
                <i className="ri-arrow-right-line ms-2" />
              </Link>
              <p className="text-light mt-6 mb-3">
                +5 years with professional design software
              </p>
              <div className="d-flex gap-3">
                <div className="brand-logo p-2 icon-shape rounded-3 bg-900">
                  <span className="text-light">React js</span>
                </div>
                <div className="brand-logo p-2 icon-shape rounded-3 bg-900">
                  <span className="text-light">Next js</span>
                </div>
                <div className="brand-logo p-2 icon-shape rounded-3 bg-900">
                  <span className="text-light">Svelte js</span>
                </div>
                <div className="brand-logo p-2 icon-shape rounded-3 bg-900">
                  <span className="text-light">Redux</span>
                </div>
                <div className="brand-logo p-2 icon-shape rounded-3 bg-900">
                  <span className="text-light">HTML5</span>
                </div>
                <div className="brand-logo p-2 icon-shape rounded-3 bg-900">
                  <span className="text-light">CSS3</span>
                </div>
              </div>
              <div className="d-flex gap-3 mt-5">
                <div className="brand-logo p-2 icon-shape rounded-3 bg-900">
                  <span className="text-light">RESTful APIs</span>
                </div>
                <div className="brand-logo p-2 icon-shape rounded-3 bg-900">
                  <span className="text-light">Node.js</span>
                </div>
                <div className="brand-logo p-2 icon-shape rounded-3 bg-900">
                  <span className="text-light">Git, GitHub</span>
                </div>
                <div className="brand-logo p-2 icon-shape rounded-3 bg-900">
                  <span className="text-light">Eslint, Jenkins</span>
                </div>
                <div className="brand-logo p-2 icon-shape rounded-3 bg-900">
                  <span className="text-light">Figma</span>
                </div>
              </div>
              <div className="d-flex gap-3 mt-5">
                <div className="brand-logo p-2 icon-shape rounded-3 bg-900">
                  <span className="text-light">Sketch</span>
                </div>
                <div className="brand-logo p-2 icon-shape rounded-3 bg-900">
                  <span className="text-light">Deveincy Resolve</span>
                </div>
                <div className="brand-logo p-2 icon-shape rounded-3 bg-900">
                  <span className="text-light">Canva Advanced</span>
                </div>
                <div className="brand-logo p-2 icon-shape rounded-3 bg-900">
                  <span className="text-light">Adobe Tools</span>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="shape-1  d-none d-md-block">
                <img
                  style={{ filter: "drop-shadow(green 0px 0px 0.75rem)" }}
                  className=" filter-gray"
                  src="/assets/imgs/hero/hero-1/man.png"
                  alt="man"
                />
                {/* <div className="position-absolute top-50 start-0 translate-middle z-0 mt-8 ms-10 ps-8">
            <img
              className="ribbonRotate"
              src="/assets/imgs/hero/hero-1/decorate.png"
              alt=""
            />
          </div> */}
              </div>
            </div>
          </div>
        </div>

        {/* <div
          className="position-absolute top-0 start-0 w-100 h-100 filter-invert bg-dark"
          // data-background="assets/imgs/hero/hero-1/background.png"
        /> */}
      </section>
      <style jsx>{`
        .background-video {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 15%;

          z-index: -1;
        }
      `}</style>
    </>
  );
}
