import React from 'react';
import { FaTwitter, FaInstagram, FaTelegram, FaWhatsapp, FaYoutube, FaLinkedin } from 'react-icons/fa'; // Import social media icons
import {Link} from 'react-router-dom'; // Import Link from Next.js

export function Footer() {
  return (
    <section className="relative overflow-hidden py-10" style={{ backgroundColor: '#FAFAFBFF' }}>
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="-m-6 flex flex-wrap justify-center text-center"> {/* Added justify-center and text-center for centering content */}
          <div className="w-full p-6 md:w-1/2 lg:w-5/12">
            <div className="flex h-full flex-col justify-between items-center"> {/* Added items-center for centering items */}
              <div className="mb-4 inline-flex items-center w-20">
                <img loading='eager' width="100" height="100" src="https://utfs.io/f/bed2cabe-162c-4c65-a77a-42c9319faf12-1peup3.png" alt="" />
                <h2 className="ml-4 text-lg font-bold">Lets Code</h2>
              </div>
              <div>
                <p className="text-sm text-gray-600">
                  &copy; Copyright 2022. All Rights Reserved by Lets Code.
                </p>
              </div>
              <div className="mt-4 flex items-center justify-center space-x-4"> {/* Added social media links */}
                <a href="https://twitter.com/Lets__Code">
                  <FaTwitter className="text-gray-900 hover:text-gray-700" size={24} />
                </a>
                <a href="https://www.instagram.com/lets__code/">
                  <FaInstagram className="text-gray-900 hover:text-gray-700" size={24} />
                </a>
                <a href="https://t.me/offcampusjobsupdatess">
                  <FaTelegram className="text-gray-900 hover:text-gray-700" size={24} />
                </a>
                <a href="https://whatsapp.com/channel/0029Va9IblC7dmecjzkkn811">
                  <FaWhatsapp className="text-gray-900 hover:text-gray-700" size={24} />
                </a>
                <a href="https://www.youtube.com/channel/UC8yrWVx-ezAW0jh8hlFUFUQ">
                  <FaYoutube className="text-gray-900 hover:text-gray-700" size={24} />
                </a>
                <a href="https://www.linkedin.com/company/lets-code-forever">
                  <FaLinkedin className="text-gray-900 hover:text-gray-700" size={24} />
                </a>
              </div>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-4 md:mb-9 text-xs font-semibold uppercase text-gray-500">
                Company
              </h3>
              <ul>
                <li className="mb-2 md:mb-4">
                  <Link to="/service">
                    <p className="text-base font-medium text-gray-900 hover:text-gray-700">
                      Services
                    </p>
                  </Link>
                </li>
                <li className="mb-2 md:mb-4">
                  <Link to="/community">
                    <p className="text-base font-medium text-gray-900 hover:text-gray-700">
                      Community
                    </p>
                  </Link>
                </li>
                <li className="mb-2 md:mb-4">
                  <Link to="/product">
                    <p className="text-base font-medium text-gray-900 hover:text-gray-700">
                      Products
                    </p>
                  </Link>
                </li>
                <li>
                  <Link to="/about">
                    <p className="text-base font-medium text-gray-900 hover:text-gray-700">
                      About
                    </p>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-4 md:mb-9 text-xs font-semibold uppercase text-gray-500">
                Support
              </h3>
              <ul>
                <li className="mb-2 md:mb-4">
                  <Link to="/contact">
                    <p className="text-base font-medium text-gray-900 hover:text-gray-700">
                      Account
                    </p>
                  </Link>
                </li>
                <li className="mb-2 md:mb-4">
                  <Link to="/contact">
                    <p className="text-base font-medium text-gray-900 hover:text-gray-700">
                      Help
                    </p>
                  </Link>
                </li>
                <li className="mb-2 md:mb-4">
                  <Link to="/contact">
                    <p className="text-base font-medium text-gray-900 hover:text-gray-700">
                      Contact Us
                    </p>
                  </Link>
                </li>
                <li>
                  <Link to="/contact">
                    <p className="text-base font-medium text-gray-900 hover:text-gray-700">
                      Customer Support
                    </p>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-3/12">
            <div className="h-full">
              <h3 className="tracking-px mb-4 md:mb-9 text-xs font-semibold uppercase text-gray-500">
                Legals
              </h3>
              <ul>
                <li className="mb-2 md:mb-4">
                  <Link to="/terms">
                    <p className="text-base font-medium text-gray-900 hover:text-gray-700">
                      Terms And Service
                    </p>
                  </Link>
                </li>
                <li className="mb-2 md:mb-4">
                  <Link to="/cancellation">
                    <p className="text-base font-medium text-gray-900 hover:text-gray-700">
                      Cancellation
                    </p>
                  </Link>
                </li>
                <li className="mb-2 md:mb-4">
                  <Link to="/privacy">
                    <p className="text-base font-medium text-gray-900 hover:text-gray-700">
                      Privacy Policy
                    </p>
                  </Link>
                </li>
                <li>
                  <Link to="/license">
                    <p className="text-base font-medium text-gray-900 hover:text-gray-700">
                      Licensing
                    </p>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="text-black py-4">
        <div className="text-center text-gray-300">
          <p>&copy; 2022 Lets Code. All Rights Reserved.</p>
        </div>
      </div>
    </section>
  );
}
