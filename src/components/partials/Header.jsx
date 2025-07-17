import React from 'react'

const Header = () => {
     const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
      {/* Header */}
      <nav className="bg-black shadow-lg shadow-slate-700/50 fixed  w-full z-10 ">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4 ">
              <a
                href="#"
                className="text-2xl font-bold text-white drop-shadow-lg"
              >
                <img src="/img/favicon.ico" alt="" />
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-6">
              <a
                href="#"
                className="text-white hover:text-blue-400 transition duration-300 font-medium"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-white hover:text-blue-400 transition duration-300 font-medium"
              >
                About
              </a>
              <a
                href="#projects"
                className="text-white hover:text-blue-400 transition duration-300 font-medium"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="text-white hover:text-blue-400 transition duration-300 font-medium"
              >
                Contact
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white focus:outline-none"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {isOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden  pb-4 space-y-3 bg-gray-900 bg-opacity-90 rounded-lg p-4">
              <a
                href="#"
                className="block text-white hover:bg-blue-400 px-3 py-2 rounded transition"
                onClick={() => setIsOpen(false)}
              >
                Home
              </a>
              <a
                href="#about"
                className="block text-white hover:bg-blue-400 px-3 py-2 rounded transition"
                onClick={() => setIsOpen(false)}
              >
                About
              </a>
              <a
                href="#projects"
                className="block text-white hover:bg-blue-400 px-3 py-2 rounded transition"
                onClick={() => setIsOpen(false)}
              >
                Projects
              </a>
              <a
                href="#contact"
                className="block text-white hover:bg-blue-400 px-3 py-2 rounded transition"
                onClick={() => setIsOpen(false)}
              >
               Contact
              </a>
            </div>
          )}
        </div>
      </nav>


    </>
  )
}

export default Header
