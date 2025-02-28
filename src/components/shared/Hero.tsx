import { Code2, ArrowRight, Smartphone, Globe2 } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-black text-white">
      {/* Gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 via-purple-900/20 to-black"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(79,70,229,0.15),transparent_25%)]"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8">
          <div className="flex flex-col justify-center">
            <div className="flex items-center space-x-2 text-indigo-400">
              <Code2 className="h-6 w-6" />
              <span className="text-sm font-semibold tracking-wider uppercase">Ironsolutions</span>
            </div>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Forging Digital
              <span className="relative">
                <span className="relative inline-block px-2 text-indigo-400">Excellence
                  <div className="absolute inset-x-0 -bottom-2 h-3 w-full skew-x-[-20deg] bg-indigo-500/20"></div>
                </span>
              </span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-gray-300">
              We transform complex challenges into elegant digital solutions. Our expert team crafts cutting-edge software that drives innovation and accelerates business growth.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button className="group relative overflow-hidden rounded-full bg-indigo-600 px-8 py-3 transition">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-[500px] w-20 translate-x-[-1000px] rotate-45 bg-white opacity-20 transition-transform duration-1000 group-hover:translate-x-[1000px]"></div>
                </div>
                <span className="relative flex items-center justify-center gap-2">
                  Start Your Project
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </span>
              </button>
              <button className="flex items-center justify-center gap-2 rounded-full border border-gray-700 px-8 py-3 transition hover:bg-white/5 hover:border-gray-600">
                Explore Our Work
              </button>
            </div>
          </div>

          {/* Services Grid */}
          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-[500px] w-[500px] animate-pulse rounded-full bg-indigo-500/10 blur-3xl"></div>
            </div>
            <div className="relative grid grid-cols-2 gap-4 sm:gap-6">
              {[
                {
                  icon: Globe2,
                  label: 'Web Apps',
                  desc: 'Modern & Scalable',
                  color: 'bg-indigo-500/10',
                  textColor: 'text-indigo-400'
                },
                {
                  icon: Smartphone,
                  label: 'Mobile Apps',
                  desc: 'iOS & Android',
                  color: 'bg-purple-500/10',
                  textColor: 'text-purple-400'
                },
                {
                  icon: Code2,
                  label: 'Custom Software',
                  desc: 'Tailored Solutions',
                  color: 'bg-blue-500/10',
                  textColor: 'text-blue-400',
                  span: true
                }
              ].map((item, index) => (
                <div
                  key={index}
                  className={`${
                    item.span ? 'col-span-2' : ''
                  } group relative overflow-hidden rounded-2xl bg-gray-900/50 p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:bg-gray-900/60`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 to-transparent"></div>
                  <div className="relative">
                    <div className={`${item.color} rounded-xl p-2 w-12 h-12 flex items-center justify-center`}>
                      <item.icon className={`h-6 w-6 ${item.textColor}`} />
                    </div>
                    <h3 className="mt-4 font-semibold text-white">{item.label}</h3>
                    <p className="mt-1 text-sm text-gray-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}