import Link from 'next/link'

export default function OffCanvas({ isOffCanvas, handleOffCanvas }: any) {
	return (
    <>
      {/* offCanvas-menu */}
      <div className={`offCanvas__info ${isOffCanvas ? "active" : ""}`}>
        <div
          className="offCanvas__close-icon menu-close"
          onClick={handleOffCanvas}
        >
          <button>
            <i className="ri-close-line" />
          </button>
        </div>
        <div className="offCanvas__logo mb-5">
          <h3 className="mb-0">Get in touch</h3>
        </div>
        <div className="offCanvas__side-info mb-30">
          <div className="contact-list mb-30">
            <p className="fs-6 fw-medium text-light mb-5">
              I'm always excited to take on new projects and collaborate with
              innovative minds.
            </p>
            <div className="mb-3">
              <span className="text-light fs-5">Phone Number</span>
              <p className="mb-0">+92 318 4228836</p>
            </div>
            <div className="mb-3">
              <span className="text-light fs-5">Email</span>
              <p className="mb-0">muneebsyed607@gmail.com</p>
            </div>
            <div className="mb-3">
              <span className="text-light fs-5">Slack</span>
              <Link href="https://zolaratech.slack.com/team/U081PKZRB1T">
                <p className="mb-0">Syed Muneeb</p>
              </Link>
            </div>
            <div className="mb-3">
              <span className="text-light fs-5">Address</span>
              <p className="mb-0">lalazar phase 2 house number 194B1</p>
            </div>
          </div>
          <div className="contact-list">
            <p className="text-light fs-5 mb-2">Social</p>
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
                    stroke-linecap="round"
                    stroke-linejoin="round"
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
          </div>
        </div>
      </div>
      <div
        className={`offCanvas__overly ${isOffCanvas ? "active" : ""}`}
        onClick={handleOffCanvas}
      />
    </>
  );
}
