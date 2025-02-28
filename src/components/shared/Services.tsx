import React from 'react';
import { Code2, Smartphone, Globe2 } from 'lucide-react';

const services = [
  {
    icon: Globe2,
    title: 'Web Applications',
    description: 'Modern, responsive web applications built with cutting-edge technologies for optimal performance and user experience.',
    features: ['Progressive Web Apps', 'Single Page Applications','Admin Dashboards', 'Web Templates']
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile applications that deliver seamless experiences across iOS and Android devices.',
    features: ['Cross-platform Apps', 'Mobile-first Design']
  },
  {
    icon: Code2,
    title: 'Custom Software',
    description: 'Tailored software solutions designed and built from the ground up to address your unique business challenges.',
    features: ['API Development','Scalable Architecture', 'Software Integrations']
  }
];

export default function Services() {
  return (
    <section className="bg-black py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className=" font-semibold leading-7 text-indigo-400">Our Services</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Everything you need to build amazing digital products
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            We offer comprehensive solutions to help you succeed in the digital world.
            </p>
          </div>
        </div>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="group rounded-2xl bg-gray-900/50 p-8 transition hover:-translate-y-1 hover:bg-gray-800/50"
            >
              <service.icon className="h-12 w-12 rounded-xl bg-indigo-500/10 p-2 text-indigo-400" />
              <h3 className="mt-4 text-xl font-semibold text-white">{service.title}</h3>
              <p className="mt-2 text-gray-400">{service.description}</p>
              <ul className="mt-4 space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-sm text-gray-500">
                    • {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
}