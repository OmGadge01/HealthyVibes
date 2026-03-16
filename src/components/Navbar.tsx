export default function Navbar() {
  return (
    <nav className="w-full bg-green-100 backdrop-blur-xs sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-stretch px-6 relative h-[65px]">
        {/* Logo with icon */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center shadow-lg shadow-green-200">
            <svg
              className="w-5 h-5 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14h-2v-6h2v6zm4 0h-2v-6h2v6z" />
            </svg>
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">
            HealthyVibes
          </span>
        </div>

        {/* CENTER NAV WITH CURVES */}
        
        <div className="relative hidden md:flex items-center h-full">
          {/* Left curve */}
          {/* <div className="absolute -left-2 top-0 h-full w-10 bg-green-100">
            <div className="w-full h-full bg-black "></div>
          </div> */}
          <div className="absolute -left-10 top-0 h-full w-10 bg-green-100">
            <div className="w-full h-full bg-white rounded-bl-[60px]"></div>
          </div>
          

          {/* White navigation */}
          <div className="bg-white px-10 flex items-center gap-8 h-full shadow-md">
            {["Plans", "Menu", "How it Works", "Reviews", "Recipes"].map(
              (item) => (
                <a
                  key={item}
                  href="#"
                  className="relative text-gray-600 hover:text-green-600 font-medium transition-colors duration-200 group"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ),
            )}
          </div>

          {/* Right curve */}
          <div className="absolute -right-10 top-0 h-full w-10 bg-green-100">
            <div className="w-full h-full bg-white rounded-br-[60px]"></div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <button className="hidden sm:block text-gray-600 hover:text-green-600 font-medium transition-colors duration-200 px-4 py-2">
            Log in
          </button>

          <button className="relative bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-2.5 rounded-xl font-medium shadow-lg shadow-green-200 hover:shadow-xl hover:shadow-green-300 hover:scale-105 transition-all duration-300 overflow-hidden group">
            <span className="relative z-10">Get Started</span>
            <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>

          {/* Mobile menu button */}
          <button className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-green-50 transition-colors">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
