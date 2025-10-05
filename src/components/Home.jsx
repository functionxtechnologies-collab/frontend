import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <header className="relative">
      {/* Background Hero Image */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/src/assets/hero.svg"
          alt="Hero background"
          className="w-full h-[80vh] object-cover opacity-90"
        />
      </div>

      {/* Hero Section */}
      <div className="container h-[80vh] flex flex-col justify-center">
        <span className="text-sm text-fxmuted mb-2">Modern IT Solutions</span>
        <h1 className="text-5xl md:text-7xl font-extrabold mb-3 leading-tight">
          Empowering Your Digital Transformation
        </h1>
        <p className="max-w-2xl text-fxmuted mb-6 text-lg">
          We build scalable web and mobile applications with cloud-first architectures,
          modern design, and AI-driven intelligence to accelerate your business growth.
        </p>

        <div className="flex gap-3">
          <Link to="/services" className="btn">
            Explore Services
          </Link>
          <Link
            to="/contact"
            className="px-5 py-3 rounded-xl border border-white/10 hover:bg-white/5"
          >
            Get a Proposal
          </Link>
        </div>
      </div>

      {/* Services Overview */}
      <section className="section bg-black/20 backdrop-blur">
        <div className="container grid md:grid-cols-3 gap-6">
          {[
            {
              title: 'Web & Mobile Development',
              desc: 'Crafting responsive, high-performance apps with React, Node.js, and Flutter/Ionic.',
            },
            {
              title: 'Cloud & DevOps',
              desc: 'AWS, Azure, and CI/CD pipelines for secure, automated deployments.',
            },
            {
              title: 'AI & Automation',
              desc: 'Data-driven insights, chatbots, and process automation for smarter businesses.',
            },
          ].map((service, i) => (
            <div key={i} className="card hover:scale-[1.02] transition-all duration-300">
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-fxmuted text-sm">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </header>
  )
}
