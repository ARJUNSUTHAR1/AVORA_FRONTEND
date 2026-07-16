const items = [
  'Finance & Accounting',
  'GST Filing',
  'Company Registration',
  'Virtual CFO',
  'Digital Marketing',
  'ROC Compliance',
  'Business Strategy',
  'Real Estate Advisory',
  'ITR Filing',
  'SEO & Growth',
  'FSSAI Licensing',
  'Vessel Accounting',
]

export default function Marquee() {
  const doubled = [...items, ...items]

  return (
    <div className="bg-avora-navy py-5 overflow-hidden border-y border-avora-gold/10">
      <div className="relative flex">
        <div className="flex animate-marquee-left whitespace-nowrap">
          {doubled.map((item, i) => (
            <span key={i} className="flex items-center text-white/70 text-sm font-medium tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-avora-gold mx-5 shrink-0" />
              {item}
            </span>
          ))}
        </div>
        <div className="flex animate-marquee-left whitespace-nowrap absolute top-0" aria-hidden>
          {doubled.map((item, i) => (
            <span key={i} className="flex items-center text-white/70 text-sm font-medium tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-avora-gold mx-5 shrink-0" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
