import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="section bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Crafting landmarks that last a lifetime
            </h1>
            <p className="section-sub">
              Suspendisse imperdiet magna sagittis in tortor. Integer tellus sit mauris sit maecenas aenean eu augue in eros sed nunc venenatis senectus.
            </p>
            <div className="mt-6 flex gap-3">
              <Link to="/contact" className="btn-primary">Start your project</Link>
              <Link to="/services" className="btn-outline">Our services</Link>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-6">
              {[
                {label: 'Projects', value: '420+'},
                {label: 'Clients', value: '200+'},
                {label: 'Years', value: '15+'},
              ].map((m)=> (
                <div key={m.label} className="">
                  <div className="text-3xl font-semibold">{m.value}</div>
                  <div className="text-slate-500">{m.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-slate-200 shadow-inner" />
            <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-lg bg-brand-200" />
            <div className="absolute -top-6 -right-6 h-16 w-16 rounded-full bg-brand-500/20" />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <h2 className="section-title">Innovative solutions for modern construction needs</h2>
            <p className="section-sub">Our mission is simple: provide unparalleled expertise, guidance, and support across the entire real estate journey.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {[
              {title:'General Contracting', desc:'From blueprint to reality we make it happen.'},
              {title:'Design & Build', desc:'End-to-end design and construction services.'},
              {title:'Project Management', desc:'On-time and on-budget project delivery.'},
              {title:'Renovations', desc:'Modern upgrades with minimal disruption.'},
              {title:'Sustainability', desc:'Eco-friendly building techniques.'},
              {title:'Consulting', desc:'Trusted guidance for complex builds.'},
            ].map((s)=> (
              <div key={s.title} className="card">
                <div className="h-10 w-10 rounded bg-brand-600/10 mb-4" />
                <h3 className="font-semibold text-lg">{s.title}</h3>
                <p className="text-slate-600 mt-2">{s.desc}</p>
                <Link to="/services" className="text-brand-700 font-medium inline-block mt-4">Learn more →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="section bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="section-title">Recent projects</h2>
              <p className="section-sub">From concept to creation, we build at every scale.</p>
            </div>
            <Link to="/services" className="btn-outline">View all projects</Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {[1,2,3].map((i)=> (
              <div key={i} className="card p-0 overflow-hidden">
                <div className="aspect-video bg-slate-200" />
                <div className="p-6">
                  <div className="font-semibold">High-rise Commercial Complex</div>
                  <div className="text-slate-600 text-sm mt-1">San Francisco, CA</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <div className="container mx-auto px-4">
          <h2 className="section-title">What our clients say</h2>
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {[1,2,3].map((i)=> (
              <div key={i} className="card">
                <p className="text-slate-700">“The team delivered exceptional quality ahead of schedule. Truly the trusted builders of modern infrastructure.”</p>
                <div className="mt-4 font-medium">Alex Johnson</div>
                <div className="text-slate-500 text-sm">CEO, UrbanBuild</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-gradient-to-r from-brand-600 to-brand-700 text-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-3xl font-semibold">Start your vision today with expert construction</h2>
            <p className="mt-2 text-white/80 max-w-2xl">Speak to our team to get a tailored plan for your next project.</p>
          </div>
          <Link to="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-brand-700">Get a quote</Link>
        </div>
      </section>
    </>
  )
}
