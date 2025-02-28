import { Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative bg-black py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-400">Contact Us</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Let&apos;s Build Something Amazing Together
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Ready to start your next project? Get in touch with us today.
          </p>
        </div>

        <div className="mx-auto mt-10 gap-8 sm:mt-20 sm:grid-cols-3 place-items-center justify-center">
          <div className="flex flex-col items-center">
            <Mail className="h-8 w-8 text-indigo-400" />
            <h3 className="mt-4 text-base font-semibold text-white">Email</h3>
            <a 
              href="mailto:ironsolutions@gmail.com" 
              className="mt-2 text-gray-300 hover:text-indigo-400 transition-colors"
            >
              ironsolutions.dev@gmail.com
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}