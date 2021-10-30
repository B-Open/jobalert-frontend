import { useRef, useState } from "react";
import { useClickAway } from "react-use";
import { Transition } from "@headlessui/react";
import Link from "next/link";

import { SmallLogo } from "./Logo";
import Button from "./Button";

const sampleSubMenu = [
  {
    title: "Help Center",
    href: "/help",
    description:
      "Get all of your questions answered in our forums or contact support.",
  },
  {
    title: "Guides",
    href: "/guide",
    description:
      "Learn how to maximize our platform to get the most out of it.",
  },
];

const SubMenu = ({ title = "Support", subMenu = [] }) => {
  const [show, setShow] = useState(false);
  const menuRef = useRef(null);

  useClickAway(menuRef, () => {
    if (show) {
      setShow(false);
    }
  });

  return (
    <div className="relative" ref={menuRef}>
      <button
        type="button"
        className="text-gray-500 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        aria-expanded={show ? "true" : "false"}
        onClick={() => setShow((e) => !e)}
      >
        <span>{title} </span>
        <svg
          className="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <Transition
        className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-xs sm:px-0"
        enter="duration-200 ease-out"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
        show={show}
      >
        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
          <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
            {subMenu.map((eachMenu) => (
              <Link href={eachMenu.href} key={eachMenu.href}>
                <div className="cursor-pointer">
                  <p className="text-base font-medium text-gray-900">
                    {eachMenu.title}
                  </p>
                  <p className="mt-1 text-sm text-gray-500">
                    {eachMenu.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Transition>
    </div>
  );
};

const links = [
  { title: "About Us", href: "/about" },
  { title: "More", sub: sampleSubMenu },
];

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const menuLinks = links.reduce((a, b) => {
    if (b.sub) {
      b.sub.forEach((eachSub) => {
        a.push({ title: eachSub.title, href: eachSub.href });
      });
    } else {
      a.push({ title: b.title, href: b.href });
    }
    return a;
  }, []);

  return (
    <div className="relative bg-white">
      <div className="flex justify-between items-center px-4 py-6 sm:px-6 md:justify-start md:space-x-10">
        <div>
          <a href="#" className="flex">
            <span className="sr-only">B-Open</span>
            <SmallLogo />
          </a>
        </div>
        <div className="-mr-2 -my-2 md:hidden">
          <button
            type="button"
            className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            aria-expanded="false"
            onClick={() => setShowMobileMenu((e) => !e)}
          >
            <span className="sr-only">Open menu</span>
            <svg
              className="h-6 w-6"
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
          </button>
        </div>
        <div className="hidden md:flex-1 md:flex md:items-center md:justify-between">
          <nav className="flex space-x-10">
            {links.map((eachLink) =>
              eachLink.sub ? (
                <SubMenu
                  key={eachLink.title}
                  title={eachLink.title}
                  subMenu={eachLink.sub}
                />
              ) : (
                <Link href={eachLink.href} key={eachLink.title} passHref>
                  <a className="text-gray-500 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    {eachLink.title}
                  </a>
                </Link>
              )
            )}
          </nav>
          <div className="flex items-center md:ml-12 gap-x-4">
            <Button to="/sign-in">Sign in</Button>
            <Button buttonType="primary" to="/sign-up">
              Sign up
            </Button>
          </div>
        </div>
      </div>
      <Transition
        enter="duration-200 ease-out"
        enterFrom="scale-95 opacity-0"
        enterTo="scale-100 opacity-100"
        leave="duration-100 ease-out"
        leaveFrom="scale-100 opacity-100"
        leaveTo="scale-95 opacity-0"
        show={showMobileMenu}
        className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
      >
        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
          <div className="pt-5 pb-6 px-5">
            <div className="flex items-center justify-between">
              <div>
                <SmallLogo />
              </div>
              <div className="-mr-2">
                <button
                  type="button"
                  className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                  onClick={() => setShowMobileMenu((e) => !e)}
                >
                  <span className="sr-only">Close menu</span>
                  <svg
                    className="h-6 w-6"
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
            <div className="mt-6">
              <nav className="grid gap-6">
                {menuLinks.map((eachLink) => (
                  <Link href={eachLink.href} key={eachLink.href} passHref>
                    <a className="text-base font-medium text-gray-900 hover:text-gray-700">
                      {eachLink.title}
                    </a>
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  );
};

export default Header;
