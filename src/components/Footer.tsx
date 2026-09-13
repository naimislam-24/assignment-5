import Logo from "../assets/logo-text.png";

export default function Footer() {
  return (
    <>
      <footer className="border-t border-gray-100 mt-20">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-10">
            {/* Brand */}
            <div>
              {/* <div className="flex items-center gap-2 mb-4">
                <span className="w-7 h-7 flex items-center justify-center rounded-md bg-linear-to-br from-pink-500 to-purple-600 text-white text-xs font-bold">
                  DS
                </span>
                <span className="font-bold text-gray-900">
                  Dev <span className="text-pink-500">Stack</span>
                </span>
              </div> */}
              <img src={Logo} alt="" />
              <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
                Curated tools, technologies, and resources for developers
                building modern software.
              </p>
              <div className="flex gap-5 mt-4 text-sm font-medium text-gray-700">
                <a href="#" className="hover:text-gray-900">
                  GitHub
                </a>
                <a href="#" className="hover:text-gray-900">
                  Twitter
                </a>
                <a href="#" className="hover:text-gray-900">
                  LinkedIn
                </a>
              </div>
            </div>

            {/* Product */}
            <div>
              <h4 className="text-xs font-bold tracking-wide text-gray-900 mb-4">
                PRODUCT
              </h4>
              <ul className="flex flex-col gap-3 text-sm text-gray-500">
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Technologies
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Projects
                  </a>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-xs font-bold tracking-wide text-gray-900 mb-4">
                COMPANY
              </h4>
              <ul className="flex flex-col gap-3 text-sm text-gray-500">
                <li>
                  <a href="#" className="hover:text-gray-900">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-xs font-bold tracking-wide text-gray-900 mb-4">
                LEGAL
              </h4>
              <ul className="flex flex-col gap-3 text-sm text-gray-500">
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider + bottom row */}
          <div className="border-t border-gray-100 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-gray-400">
              © 2026 Dev Stack. All rights reserved.
            </p>
            <div className="flex gap-6 text-xs text-gray-400">
              <a href="#" className="hover:text-gray-600">
                Privacy
              </a>
              <a href="#" className="hover:text-gray-600">
                Terms
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
