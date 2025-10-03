import { NavLink, Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl">
            <span className="inline-block h-8 w-8 rounded bg-brand-600"></span>
            Kontex
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <NavLink to="/" className={({isActive})=>`hover:text-brand-700 ${isActive ? 'text-brand-700' : ''}`}>Home</NavLink>
            <NavLink to="/about" className={({isActive})=>`hover:text-brand-700 ${isActive ? 'text-brand-700' : ''}`}>About</NavLink>
            <NavLink to="/services" className={({isActive})=>`hover:text-brand-700 ${isActive ? 'text-brand-700' : ''}`}>Services</NavLink>
            <NavLink to="/contact" className={({isActive})=>`hover:text-brand-700 ${isActive ? 'text-brand-700' : ''}`}>Contact</NavLink>
          </nav>
          <div className="flex items-center gap-3">
            <Link to="/contact" className="btn-primary">Start your project</Link>
          </div>
        </div>
      </div>
    </header>
  )
}
