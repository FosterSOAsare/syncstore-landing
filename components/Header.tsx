export default function Header() {
  return (
    <header className="w-full bg-white sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3">
          <span
            className="inline-block w-8 h-8 bg-blue-600 rounded-full"
            aria-hidden="true"
          ></span>
          <span className="font-semibold text-lg">SyncStore</span>
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
          <a href="/" className="hover:text-gray-900">
            Home
          </a>
          <a href="/blog" className="hover:text-gray-900">
            Blog
          </a>
          <a href="/pricing" className="hover:text-gray-900">
            Pricing
          </a>
          <a href="/reviews" className="hover:text-gray-900">
            Reviews
          </a>
          <a href="/faq" className="hover:text-gray-900">
            FAQ
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="/signin"
            className="text-sm px-4 py-2 rounded-md hover:bg-gray-50"
          >
            Sign in
          </a>

          <a
            href="/signin"
            className="text-sm px-4 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700"
          >
            Start for free
          </a>
        </div>
      </div>
    </header>
  );
}
