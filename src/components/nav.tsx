import { Transition } from '@headlessui/react';
import { useLocation } from '@reach/router';
import { Link } from 'gatsby';
import * as React from 'react';
import { HiMenu } from 'react-icons/hi';

import config from '../../config.json';

function Nav(): React.ReactElement {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = React.useState(false);
  const toggle = () => setIsOpen((prevState) => !prevState);
  return (
    <div className="sticky inset-x-0 top-0 z-10 bg-white">
      <div className="relative z-20 shadow">
        <div className="flex items-center justify-between px-4 py-5 mx-auto max-w-screen-2xl sm:px-6 sm:py-4 lg:px-8 md:justify-start md:space-x-10">
          <div>
            <Link to="/" className="flex">
              <span className="sr-only">{config.siteTitle}</span>
              <img
                className="w-auto h-8 sm:h-10"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                alt=""
              />
            </Link>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <button
              type="button"
              onClick={toggle}
              className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span className="sr-only">Open menu</span>
              <HiMenu aria-hidden className="w-6 h-6" />
            </button>
          </div>
          <div className="hidden md:flex-1 md:flex md:items-center md:justify-between">
            <nav className="flex justify-end ml-auto space-x-10">
              {config.siteNavigation.map(({ label, slug }) => (
                <Link
                  key={label}
                  to={slug}
                  className={`text-base font-medium ${
                    pathname === slug ? 'text-gray-900' : 'text-gray-500'
                  } hover:text-gray-900`}
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
      <MobileMenu isOpen={isOpen} toggle={toggle} />
    </div>
  );
}

function MobileMenu({ isOpen, toggle }) {
  return (
    <Transition
      show={isOpen}
      enterFrom="duration-200 ease-out"
      enter="opacity-0 scale-95"
      enterTo="opacity-100 scale-100"
      leave="duration-100 ease-in"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-95"
      className="absolute inset-x-0 top-0 z-30 p-2 transition origin-top-right transform md:hidden"
    >
      <div className="bg-white divide-y-2 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 divide-gray-50">
        <div className="px-5 pt-5 pb-6 sm:pb-8">
          <div className="flex items-center justify-between">
            <div>
              <img
                className="w-auto h-8"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                alt="Workflow"
              />
            </div>
            <div className="-mr-2">
              <button
                type="button"
                onClick={toggle}
                className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              >
                <span className="sr-only">Close menu</span>
                {/* Heroicon name: outline/x */}
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="mt-6 sm:mt-8">
            <nav>
              <div className="grid gap-7 sm:grid-cols-2 sm:gap-y-8 sm:gap-x-4">
                <Link
                  to="/"
                  className="flex items-center p-3 -m-3 rounded-lg hover:bg-gray-50"
                >
                  <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white bg-indigo-500 rounded-md sm:h-12 sm:w-12">
                    {/* Heroicon name: outline/chart-bar */}
                    <svg
                      className="w-6 h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                  </div>
                  <div className="ml-4 text-base font-medium text-gray-900">
                    Analytics
                  </div>
                </Link>
                <Link
                  to="/"
                  className="flex items-center p-3 -m-3 rounded-lg hover:bg-gray-50"
                >
                  <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white bg-indigo-500 rounded-md sm:h-12 sm:w-12">
                    {/* Heroicon name: outline/cursor-click */}
                    <svg
                      className="w-6 h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                      />
                    </svg>
                  </div>
                  <div className="ml-4 text-base font-medium text-gray-900">
                    Engagement
                  </div>
                </Link>
                <Link
                  to="/"
                  className="flex items-center p-3 -m-3 rounded-lg hover:bg-gray-50"
                >
                  <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white bg-indigo-500 rounded-md sm:h-12 sm:w-12">
                    {/* Heroicon name: outline/shield-check */}
                    <svg
                      className="w-6 h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <div className="ml-4 text-base font-medium text-gray-900">
                    Security
                  </div>
                </Link>
                <Link
                  to="/"
                  className="flex items-center p-3 -m-3 rounded-lg hover:bg-gray-50"
                >
                  <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white bg-indigo-500 rounded-md sm:h-12 sm:w-12">
                    {/* Heroicon name: outline/view-grid */}
                    <svg
                      className="w-6 h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                      />
                    </svg>
                  </div>
                  <div className="ml-4 text-base font-medium text-gray-900">
                    Integrations
                  </div>
                </Link>
              </div>
              <div className="mt-8 text-base">
                <Link
                  to="/"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  {' '}
                  View all products <span aria-hidden="true">→</span>
                </Link>
              </div>
            </nav>
          </div>
        </div>
        <div className="px-5 py-6">
          <div className="grid grid-cols-2 gap-4">
            <Link
              to="/"
              className="text-base font-medium text-gray-900 rounded-md hover:text-gray-700"
            >
              Pricing
            </Link>
            <Link
              to="/"
              className="text-base font-medium text-gray-900 rounded-md hover:text-gray-700"
            >
              Docs
            </Link>
            <Link
              to="/"
              className="text-base font-medium text-gray-900 rounded-md hover:text-gray-700"
            >
              Company
            </Link>
            <Link
              to="/"
              className="text-base font-medium text-gray-900 rounded-md hover:text-gray-700"
            >
              Resources
            </Link>
            <Link
              to="/"
              className="text-base font-medium text-gray-900 rounded-md hover:text-gray-700"
            >
              Blog
            </Link>
            <Link
              to="/"
              className="text-base font-medium text-gray-900 rounded-md hover:text-gray-700"
            >
              Contact Sales
            </Link>
          </div>
          <div className="mt-6">
            <Link
              to="/"
              className="flex items-center justify-center w-full px-4 py-2 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700"
            >
              Sign up
            </Link>
            <p className="mt-6 text-base font-medium text-center text-gray-500">
              Existing customer?{' '}
              <Link to="/" className="text-indigo-600 hover:text-indigo-500">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </Transition>
  );
}

export { Nav };
