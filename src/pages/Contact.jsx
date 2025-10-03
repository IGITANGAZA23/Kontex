export default function Contact() {
  return (
    <section className="section">
      <div className="container mx-auto px-4">
        <h1 className="section-title">Contact</h1>
        <form className="grid md:grid-cols-2 gap-4 mt-6 max-w-3xl">
          <input className="border border-slate-300 rounded px-3 py-2" placeholder="Full name" />
          <input className="border border-slate-300 rounded px-3 py-2" placeholder="Email" />
          <input className="md:col-span-2 border border-slate-300 rounded px-3 py-2" placeholder="Subject" />
          <textarea rows="5" className="md:col-span-2 border border-slate-300 rounded px-3 py-2" placeholder="Message"></textarea>
          <button className="btn-primary w-fit">Send message</button>
        </form>
      </div>
    </section>
  )
}
