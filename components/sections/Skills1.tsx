'use client'
import Link from "next/link"
import CountUp from 'react-countup'
export default function Skills1() {
	return (
    <>
      <section className="section-skills-1 position-relative section-padding">
        <div className="container">
          <div className="row">
            <div className="text-center mb-7">
              <h3 className="ds-3 mt-3 mb-3 text-primary">My Skills</h3>
              <span className="fs-5 fw-medium text-light">
                I thrive on turning complex problems into simple, beautiful
                <br className="d-md-block d-none" />
                solutions that enhance user satisfaction.
              </span>
            </div>
            <div className="d-flex flex-wrap flex-lg-nowrap justify-content-center gap-3 mb-7 px-6">
              <div className="skills">
                <div className="skills-icon mb-5">
                  <img src="/assets/imgs/skills/skills-1/icon-1.png" alt="" />
                </div>
                <div className="skills-ratio text-center">
                  <h3 className="count fw-semibold my-0">
                    <CountUp
                      className="odometer fw-semibold"
                      enableScrollSpy={true}
                      end={95}
                    />
                    %
                  </h3>
                  <p className="text-light fw-medium text-uppercase">Figma</p>
                </div>
              </div>
              <div className="skills">
                <div className="skills-icon mb-5">
                  <img src="/assets/imgs/skills/skills-1/icon-2.png" alt="" />
                </div>
                <div className="skills-ratio text-center">
                  <h3 className="count fw-semibold my-0">
                    <CountUp
                      className="odometer fw-semibold"
                      enableScrollSpy={true}
                      end={85}
                    />
                    %
                  </h3>
                  <p className="text-light fw-medium text-uppercase">
                    JavaScript
                  </p>
                </div>
              </div>
              <div className="skills">
                <div className="skills-icon mb-5">
                  <img src="/assets/imgs/skills/skills-1/icon-3.png" alt="" />
                </div>
                <div className="skills-ratio text-center">
                  <h3 className="count fw-semibold my-0">
                    <CountUp
                      className="odometer fw-semibold"
                      enableScrollSpy={true}
                      end={76}
                    />
                    %
                  </h3>
                  <p className="text-light fw-medium text-uppercase">
                    Illustrator
                  </p>
                </div>
              </div>
              <div className="skills">
                <div className="skills-icon mb-5  mt-5 ">
                  <img
                    className="img-fluid"
                    src="/assets/imgs/skills/skills-1/icon-4.jpg"
                    alt=""
                  />
                </div>
                <div className="skills-ratio text-center ">
                  <h3 className="count fw-semibold my-0">
                    <CountUp
                      className="odometer fw-semibold"
                      enableScrollSpy={true}
                      end={95}
                    />
                    %
                  </h3>
                  <p className="text-light fw-medium text-uppercase">
                    ReactJs{" "}
                  </p>
                </div>
              </div>
              <div className="skills">
                <div className="skills-icon mb-5 ">
                  <img src="/assets/imgs/skills/skills-1/icon-5.png" alt="" />
                </div>
                <div className="skills-ratio text-center">
                  <h3 className="count fw-semibold my-0">
                    <CountUp
                      className="odometer fw-semibold"
                      enableScrollSpy={true}
                      end={95}
                    />
                    %
                  </h3>
                  <p className="text-light fw-medium text-uppercase">
                    Photoshop
                  </p>
                </div>
              </div>
              <div className="skills">
                <div className="skills-icon mb-5 my-0 d-flex justify-content-center">
                  <img
                    style={{ width: "60%" }}
                    className=""
                    src="/assets/imgs/skills/skills-1/icon-6.png"
                    alt=""
                  />
                </div>
                <div className="skills-ratio text-center">
                  <h3 className="count fw-semibold my-0">
                    <CountUp
                      className="odometer fw-semibold"
                      enableScrollSpy={true}
                      end={96}
                    />
                    %
                  </h3>
                  <p className="text-light fw-medium text-uppercase">NodeJs</p>
                </div>
              </div>
              <div className="skills">
                <div className="skills-icon mb-5">
                  <img src="/assets/imgs/skills/skills-1/icon-7.png" alt="" />
                </div>
                <div className="skills-ratio text-center">
                  <h3 className="count fw-semibold my-0">
                    <CountUp
                      className="odometer fw-semibold"
                      enableScrollSpy={true}
                      end={93}
                    />
                    %
                  </h3>
                  <p className="text-light fw-medium text-uppercase">Framer</p>
                </div>
              </div>
            </div>
            <div className="text-center">
              <p className="fs-5 text-light mb-0">
                In addition, I have some programming knowledge such as:{" "}
              </p>
              <div className="d-flex justify-content-center gap-1">
                <Link href="/#" className="fs-5 fw-bold">
                  HTML,
                </Link>
                <Link href="/#" className="fs-5 fw-bold">
                  CSS,
                </Link>
                <Link href="/#" className="fs-5 fw-bold">
                  Javascript,
                </Link>
                <Link href="/#" className="fs-5 fw-bold">
                  Bootstrap,
                </Link>
                <Link href="/#" className="fs-5 fw-bold">
                  TailwindCSS
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
