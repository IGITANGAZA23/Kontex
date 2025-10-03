export default function Footer() {
  return (
    <footer className="border-t border-slate-200">
      <div className="container mx-auto px-4 py-10">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 font-bold text-xl">
              <span className="inline-block h-8 w-8 rounded bg-brand-600"></span>
              Kontex
            </div>
            <p className="text-slate-600 mt-3">Trusted builders of modern infrastructure.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Company</h4>
            <ul className="space-y-2 text-slate-600">
              <li><a href="#" className="hover:text-brand-700">About</a></li>
              <li><a href="#" className="hover:text-brand-700">Careers</a></li>
              <li><a href="#" className="hover:text-brand-700">Blog</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Contact</h4>
            <ul className="space-y-2 text-slate-600">
              <li>Email: hello@kontex.dev</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Location: San Francisco, CA</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 text-sm text-slate-500">© {new Date().getFullYear()} Kontex. All rights reserved.</div>
      </div>
    </footer>
  )
}
