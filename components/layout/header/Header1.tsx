import ThemeSwitch from '@/components/elements/ThemeSwitch'
import Link from 'next/link'
import Menu from '../Menu'
import MobileMenu from '../MobileMenu'
import OffCanvas from '../OffCanvas'
import icon from '../../../public/assets/imgs/hero/hero-1/icons8-gmail-50.png'
export default function Header1({ scroll, isMobileMenu, handleMobileMenu, isOffCanvas, handleOffCanvas }: any) {
	return (
    <>
      <header>
        <nav
          className={`navbar navbar-expand-lg navbar-light w-100 flex-nowrap z-999 p-0 ${
            scroll ? "navbar-stick" : ""
          }`}
          style={{
            position: `${scroll ? "fixed" : "relative"}`,
            top: `${scroll ? "0" : "auto"}`,
          }}
        >
          <Link
            href="/#"
            className="navbar-menu p-4 text-center square-100 menu-tigger icon_80 icon-shape d-none d-md-flex"
            data-bs-target=".offCanvas__info"
            aria-controls="offCanvas__info"
            onClick={handleOffCanvas}
          >
            <i className="ri-menu-2-line" />
          </Link>
          <div className="container py-3 px-0">
            <Link
              className="navbar-brand d-flex main-logo align-items-center ms-lg-0 ms-md-5 ms-3"
              href="/"
            >
              <img src="/assets/imgs/template/favicon.svg" alt="infinia" />
              <span className="fs-4 ms-2">Syed Muneeb</span>
            </Link>
            <div className="d-none d-lg-flex">
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <Menu />
              </div>
            </div>
            <div className="navbar-social d-flex align-items-center pe-5 pe-lg-0 me-5 me-lg-0">
              <div className="d-md-flex d-none gap-3">
                <Link href="mailto:muneebsyed607@gmail.com">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 14 14"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M1.743 12.003h2.65V3.088l-.812-.52C2.406 1.816.86 2.658.86 4.05v7.074c0 .486.396.88.884.88Z" />
                      <path d="M.86 4.05v1.176l3.533 2.263l2.65 1.698l2.65-1.698l3.534-2.263V4.049c0-1.392-1.547-2.234-2.723-1.48l-.81.52l-2.651 1.697l-2.65-1.698l-.812-.52C2.406 1.816.86 2.658.86 4.05" />
                      <path d="M9.693 12.003h2.65a.88.88 0 0 0 .883-.88V4.049c0-1.392-1.546-2.234-2.722-1.48l-.811.52z" />
                    </g>
                  </svg>
                </Link>
                {/* <Link href="/http://twitter.com">
                  <i className="ri-twitter-x-fill fs-18" />
				 
                </Link> */}
                <Link href=" https://www.linkedin.com/in/syed-muneeb-70543a229/">
                  <i className="ri-linkedin-fill fs-18" />
                </Link>
                <Link href="https://github.com/saad8212">
                  <i className="ri-github-fill fs-18" />
                </Link>
              </div>
              <div
                className="burger-icon burger-icon-white border rounded-3"
                onClick={handleMobileMenu}
              >
                <span className="burger-icon-top" />
                <span className="burger-icon-mid" />
                <span className="burger-icon-bottom" />
              </div>
            </div>
          </div>
          {/* <ThemeSwitch /> */}
        </nav>
        {/* offCanvas-menu */}
        <OffCanvas
          isOffCanvas={isOffCanvas}
          handleOffCanvas={handleOffCanvas}
        />
        <MobileMenu
          isMobileMenu={isMobileMenu}
          handleMobileMenu={handleMobileMenu}
        />
      </header>
    </>
  );
}
