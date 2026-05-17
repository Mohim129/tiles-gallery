import { SocialIcon } from "react-social-icons";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#6d4fc9] text-white">
      <div className="container mx-auto px-4 py-10">
        <div className="grid text-center grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="text-xl font-bold ">
              Tiles Gallery
            </Link>
            <p className="mt-2 text-sm text-white/70 max-w-xs">
              Discover your perfect aesthetic with our curated collection of
              premium tiles.
            </p>
          </div>

          <div className="flex flex-col justify-center items-center">
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm ">
              <li>
                <Link href="/" className="link link-hover text-white/70">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/all-tiles"
                  className="link link-hover text-white/70"
                >
                  All Tiles
                </Link>
              </li>
              <li>
                <Link
                  href="/my-profile"
                  className="link link-hover text-white/70"
                >
                  My Profile
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col justify-center items-center">
            <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <a
                  href="mailto:info@tilesgallery.com"
                  className="link link-hover text-white/70"
                >
                  info@tilesgallery.com
                </a>
              </li>
              <li>+1 (555) 123-4567</li>
              <li>123 Tile Street, Design City</li>
            </ul>
            <div className="flex gap-3 mt-4">
              <SocialIcon
                network="facebook"
                style={{ height: 36, width: 36 }}
              />
              <SocialIcon network="x" style={{ height: 36, width: 36 }} />
              <SocialIcon
                network="instagram"
                style={{ height: 36, width: 36 }}
              />
              <SocialIcon
                network="pinterest"
                style={{ height: 36, width: 36 }}
              />
            </div>
          </div>
        </div>

        <div className="divider my-6"></div>

        <div className="text-center text-sm text-base-content/50">
          &copy; {new Date().getFullYear()} Tiles Gallery. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
