export const Footer = () => {
  return (
    <footer className="bg-zinc-200/50">
      <div className="mx-auto max-w-7xl px-6 py-12">
        {/* Section 1: Lists */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 text-sm">
          <div>
            <h3 className="text-slate-900 font-semibold text-2xl mb-3">Shop</h3>
            <ul className="space-x-10 space-y-5 flex flex-row flex-wrap text-slate-600">
              <li>
                <a href="#" className="hover:text-blue-600">
                  New Arrivals
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Kits
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Boots
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Balls
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Accessories
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Sale
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Gift Cards
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-slate-900 font-semibold mb-3 text-2xl">Quick Links</h3>
            <ul className="space-x-10 space-y-5 flex flex-row flex-wrap text-slate-600">
              <li>
                <a href="#" className="hover:text-blue-600">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Search
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Online Return Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Separator */}
        <div className="my-8 border-t border-slate-200" />

        {/* Section 2: Currency + Social */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <label htmlFor="currency" className="text-sm text-slate-700">
              Currency
            </label>
            <select
              id="currency"
              className="text-sm rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-700 hover:border-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              defaultValue="USD"
            >
              <option value="CAD">CAD $</option>
              <option value="USD">USD $</option>
              <option value="EUR">EUR €</option>
              <option value="GBP">GBP £</option>
              <option value="VND">VND ₫</option>
            </select>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#"
              aria-label="Instagram"
              className="p-2 rounded-md border border-slate-200 text-slate-600 hover:text-blue-600 hover:border-blue-300"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2.2a2.8 2.8 0 1 0 0 5.6 2.8 2.8 0 0 0 0-5.6zM18 6.8a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Football Store. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
