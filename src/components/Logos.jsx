const logos = [
  'https://upload.wikimedia.org/wikipedia/commons/4/44/Google-flutter-logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/a/a9/Node.js_logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/4/4e/Dell_Logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg',
  'https://upload.wikimedia.org/wikipedia/commons/2/25/Lenovo_logo_2015.svg',
]

export default function Logos() {
  return (
    <section className="py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-slate-400 text-sm">Trusted by teams around the world</p>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 items-center gap-6 opacity-80">
          {logos.map((src, i) => (
            <img key={i} src={src} alt="logo" className="h-8 w-auto mx-auto" />
          ))}
        </div>
      </div>
    </section>
  )
}
