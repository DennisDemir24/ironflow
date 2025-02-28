import { Mail, Github, Linkedin } from 'lucide-react';
import Link from 'next/link';

const navigationLinks = [
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/#contact' },
];

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Company Info */}
          <div>
            <Link href="/" className="text-xl font-semibold text-white hover:text-indigo-400 transition">
              IronSolutions
            </Link>
            <p className="mt-4 text-gray-400">
              Building digital excellence through innovative software solutions.
            </p>
            <div className="mt-6 flex space-x-4">
              <Link href="https://github.com" className="text-gray-400 hover:text-indigo-400 transition">
                <Github className="h-6 w-6" />
              </Link>
              <Link href="https://linkedin.com" className="text-gray-400 hover:text-indigo-400 transition">
                <Linkedin className="h-6 w-6" />
              </Link>
              <Link href="mailto:contact@ironsolutions.com" className="text-gray-400 hover:text-indigo-400 transition">
                <Mail className="h-6 w-6" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-2 gap-8 lg:col-span-2">
            <div>
              <h3 className="text-sm font-semibold text-indigo-400">Services</h3>
              <ul className="mt-4 space-y-3">
                {['Web Development', 'Mobile Apps', 'Custom Software', 'API Integration'].map((item) => (
                  <li key={item}>
                    <Link href="#services" className="text-gray-400 hover:text-white transition">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-indigo-400">Company</h3>
              <ul className="mt-4 space-y-3">
                {navigationLinks.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-gray-400 hover:text-white transition">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8">
          <p className="text-center text-sm text-gray-400">
            © {new Date().getFullYear()} IronSolutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 