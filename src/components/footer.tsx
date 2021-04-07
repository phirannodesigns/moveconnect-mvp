import { Link } from 'gatsby';
import * as React from 'react';

import config from '../../config.json';
import { FacebookIcon } from '../icons/facebook';
import { InstagramIcon } from '../icons/instagram';
import { TwitterIcon } from '../icons/twitter';

function Footer(): React.ReactElement {
  return (
    <footer className="bg-white" aria-labelledby="footerHeading">
      <h2 id="footerHeading" className="sr-only">
        Footer
      </h2>
      <div className="px-4 py-12 mx-auto max-w-screen-2xl sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <img
              className="h-10"
              src="https://tailwindui.com/img/logos/workflow-mark-gray-300.svg"
              alt="Company name"
            />
            <p className="text-base text-gray-500">
              Making the world a better place through constructing elegant
              hierarchies.
            </p>
            <div className="flex space-x-6">
              {config.socialLinks.map(({ link, socialNetwork }) => {
                const ICON_MAP = {
                  Facebook: FacebookIcon,
                  Instagram: InstagramIcon,
                  Twitter: TwitterIcon,
                };
                const Icon = ICON_MAP[socialNetwork];
                return (
                  <a
                    key={link}
                    href={link}
                    className="text-gray-400 hover:text-gray-500"
                  >
                    <span className="sr-only">{socialNetwork}</span>
                    <Icon className="w-6 h-6" aria-hidden />
                  </a>
                );
              })}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-12 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold tracking-wider text-gray-400 uppercase">
                  Solutions
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link
                      to="/"
                      className="text-base text-gray-500 hover:text-gray-900"
                    >
                      Marketing
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className="text-base text-gray-500 hover:text-gray-900"
                    >
                      Analytics
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className="text-base text-gray-500 hover:text-gray-900"
                    >
                      Commerce
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className="text-base text-gray-500 hover:text-gray-900"
                    >
                      Insights
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold tracking-wider text-gray-400 uppercase">
                  Support
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link
                      to="/"
                      className="text-base text-gray-500 hover:text-gray-900"
                    >
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className="text-base text-gray-500 hover:text-gray-900"
                    >
                      Documentation
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className="text-base text-gray-500 hover:text-gray-900"
                    >
                      Guides
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className="text-base text-gray-500 hover:text-gray-900"
                    >
                      API Status
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold tracking-wider text-gray-400 uppercase">
                  Company
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link
                      to="/"
                      className="text-base text-gray-500 hover:text-gray-900"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className="text-base text-gray-500 hover:text-gray-900"
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className="text-base text-gray-500 hover:text-gray-900"
                    >
                      Jobs
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className="text-base text-gray-500 hover:text-gray-900"
                    >
                      Press
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className="text-base text-gray-500 hover:text-gray-900"
                    >
                      Partners
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold tracking-wider text-gray-400 uppercase">
                  Legal
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link
                      to="/"
                      className="text-base text-gray-500 hover:text-gray-900"
                    >
                      Claim
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className="text-base text-gray-500 hover:text-gray-900"
                    >
                      Privacy
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className="text-base text-gray-500 hover:text-gray-900"
                    >
                      Terms
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-8 mt-12 border-t border-gray-200">
          <p className="text-base text-gray-400 xl:text-center">
            © 2020 Workflow, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
