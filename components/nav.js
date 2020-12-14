import { useState, useEffect } from "react";
import Link from "next/link";
import { Transition } from "@headlessui/react";
import SvgLogo from "../assets/speaker.svg";
import Profile from "../assets/profile.jpg";

const links = [
  { href: "/top-headlines", label: "Top Headlines" },
  { href: "/custom-news-feed", label: "Custom News Feed" },
];

export default function Nav({ activeLink = "Top Headlines" }) {
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // dismiss profile modal by clicking anywhere on the DOM
  useEffect(() => {
    const handleClick = (e) => {
      if (e.target) {
        return setShowProfileModal(false);
      }
    };
    // add event listener when profile modal is open
    if (showProfileModal) {
      window.addEventListener("click", handleClick);
    }
    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, [showProfileModal]);

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/top-headlines">
              <a>
                <div className="flex-shrink-0">
                  <img
                    className="w-16 h-16 transform hover:scale-125"
                    src={SvgLogo}
                    alt="megaphone speaker logo"
                  />
                </div>
              </a>
            </Link>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {/*  Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white"  */}
                {links.map(({ href, label }) => (
                  <Link key={`${href}${label}`} href={href}>
                    <a
                      className={`${
                        activeLink === label
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white"
                      } px-3 py-2 rounded-md text-sm font-medium`}
                    >
                      {label}
                    </a>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              {/*  Profile dropdown  */}
              <div className="ml-3 relative">
                <div>
                  <button
                    className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                    id="user-menu"
                    aria-haspopup="true"
                    onClick={() => setShowProfileModal((current) => !current)}
                  >
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="h-8 w-8 rounded-full"
                      src={Profile}
                      alt="Profile image"
                    />
                  </button>
                </div>
                {/*  Profile dropdown panel, show/hide based on dropdown state.  */}
                <Transition
                  show={showProfileModal}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <div
                    className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="user-menu"
                  >
                    <Link href="/profile">
                      <a
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                      >
                        Your Profile
                      </a>
                    </Link>
                  </div>
                </Transition>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            {/*  Mobile menu button  */}
            <button
              className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              onClick={() => setMobileMenuOpen((currentState) => !currentState)}
            >
              <span className="sr-only">Open main menu</span>
              {/* 
               Heroicon name: menu
              Menu open: "hidden", Menu closed: "block"  
              */}
              <svg
                className={`h-6 w-6 ${mobileMenuOpen ? "hidden" : "block"}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* 
               Heroicon name: x
               Menu open: "block", Menu closed: "hidden"
               */}
              <svg
                className={`h-6 w-6 ${mobileMenuOpen ? "block" : "hidden"}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* 
      Mobile menu, toggle classes based on menu state.
      Open: "block", closed: "hidden"
       */}
      <div className={`md:hidden ${mobileMenuOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {/*  Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white"  */}
          {links.map(({ href, label }) => (
            <Link key={`${href}${label}`} href={href}>
              <a
                className={`${
                  activeLink === label
                    ? "bg-gray-900 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white"
                } px-3 py-2 rounded-md text-sm font-medium`}
              >
                {label}
              </a>
            </Link>
          ))}
        </div>
        <div className="pt-4 pb-3 border-t border-gray-700">
          <div className="flex items-center px-5">
            <div className="flex-shrink-0">
              <img
                className="h-10 w-10 rounded-full"
                src={Profile}
                alt="Profile image"
              />
            </div>
            <div className="ml-3">
              <div className="text-base font-medium leading-none text-white">
                UserName
              </div>
            </div>
          </div>
          <div className="mt-3 px-2 space-y-1">
            <Link href="/profile">
              <a className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700">
                Your Profile
              </a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
