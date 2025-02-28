import { Code2, Users, Rocket, Shield } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Code2,
      title: 'Technical Excellence',
      description: 'We pride ourselves on writing clean, maintainable code and using cutting-edge technologies.'
    },
    {
      icon: Users,
      title: 'Client Partnership',
      description: 'We work closely with our clients to understand their needs and deliver tailored solutions.'
    },
    {
      icon: Rocket,
      title: 'Innovation First',
      description: 'We stay ahead of the curve, implementing the latest technologies and best practices.'
    },
    {
      icon: Shield,
      title: 'Quality Assured',
      description: 'Every project undergoes rigorous testing and quality assurance processes.'
    }
  ];

  return (
    <main className="bg-black min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-[500px] w-[500px] animate-pulse rounded-full bg-indigo-500/10 blur-3xl"></div>
        </div>
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-400">About Us</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Transforming Ideas into Digital Reality
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              IronSolutions is a forward-thinking software development company specializing in creating 
              innovative digital solutions. We combine technical expertise with creative problem-solving 
              to deliver exceptional results for our clients.
            </p>
          </div>

          {/* Values Grid */}
          <div className="mx-auto mt-16 max-w-7xl">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((value, index) => (
                <div 
                  key={index}
                  className="group rounded-2xl bg-gray-900/50 p-8 transition hover:-translate-y-1 hover:bg-gray-800/50"
                >
                  <value.icon className="h-8 w-8 text-indigo-400" />
                  <h3 className="mt-4 text-xl font-semibold text-white">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-gray-400">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
