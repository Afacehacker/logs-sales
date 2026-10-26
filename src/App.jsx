import { useState } from 'react'

const TELEGRAM_URL = 'https://t.me/tosshiitt'

// ── Telegram SVG icon ──────────────────────────────────────────────────────
function TelegramIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.247-2.01 9.474c-.148.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L6.9 14.42l-2.96-.924c-.643-.2-.657-.643.136-.953l11.554-4.453c.537-.194 1.006.131.932.157z" />
    </svg>
  )
}

// ── Navbar ─────────────────────────────────────────────────────────────────
function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between
        bg-[#1a0e00]/70 backdrop-blur-xl border border-[#8B5A2B]/25
        rounded-2xl px-5 py-3 shadow-xl shadow-black/30">

        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#C4885A] to-[#6B3F1F] flex items-center justify-center shadow-lg">
            <span className="text-[#F5ECD7] font-black text-xs">LC</span>
          </div>
          <span className="text-[#F5ECD7] font-bold text-lg tracking-tight">
            Logs<span className="text-[#C4885A]">Correct</span>
          </span>
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6 text-sm text-[#EDE0C4]/60">
          {['About', 'How It Works', 'FAQ'].map(label => (
            <a key={label}
              href={`#${label.toLowerCase().replace(/ /g, '-')}`}
              className="hover:text-[#C4885A] transition-colors duration-200">
              {label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer"
          className="hidden md:flex items-center gap-2 px-4 py-2 rounded-xl
            bg-gradient-to-r from-[#C4885A] to-[#8B5A2B]
            text-[#F5ECD7] text-sm font-semibold
            hover:shadow-lg hover:shadow-[#8B5A2B]/40
            active:scale-95 transition-all duration-200">
          <TelegramIcon size={15} />
          Join Channel
        </a>

        {/* Mobile hamburger */}
        <button onClick={() => setOpen(!open)}
          className="md:hidden text-[#EDE0C4]/70 hover:text-[#F5ECD7] transition-colors p-1"
          aria-label="Menu">
          <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open
              ? <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>
              : <><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>
            }
          </svg>
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden mt-2 max-w-6xl mx-auto
          bg-[#1a0e00]/95 backdrop-blur-xl border border-[#8B5A2B]/25
          rounded-2xl px-4 py-4 shadow-xl shadow-black/40 space-y-1">
          {['About', 'How It Works', 'FAQ'].map(label => (
            <a key={label}
              href={`#${label.toLowerCase().replace(/ /g, '-')}`}
              onClick={() => setOpen(false)}
              className="block px-3 py-2.5 rounded-xl text-sm text-[#EDE0C4]/70
                hover:bg-[#8B5A2B]/20 hover:text-[#F5ECD7] transition-all">
              {label}
            </a>
          ))}
          <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm font-semibold
              text-[#C4885A] hover:bg-[#C4885A]/10 transition-all">
            <TelegramIcon size={15} />
            Join Our Channel
          </a>
        </div>
      )}
    </nav>
  )
}

// ── Hero ───────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-12 px-4">
      {/* Ambient glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2
          w-[600px] h-[600px] bg-[#8B5A2B]/20 rounded-full blur-[130px]" />
        <div className="absolute top-1/3 left-1/4
          w-[350px] h-[350px] bg-[#C4885A]/12 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/5
          w-[300px] h-[300px] bg-[#6B3F1F]/15 rounded-full blur-[90px]" />
        {/* Subtle grid */}
        <div className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'linear-gradient(#C4885A 1px,transparent 1px),linear-gradient(90deg,#C4885A 1px,transparent 1px)',
            backgroundSize: '64px 64px'
          }} />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Badge */}
        <div className="animate-fadeUp inline-flex items-center gap-2 px-4 py-1.5 rounded-full
          bg-[#8B5A2B]/20 border border-[#C4885A]/30 text-[#C4885A] text-sm font-medium mb-8">
          <span className="w-2 h-2 rounded-full bg-[#C4885A] animate-pulse" />
          Premium Social Media Logs Marketplace
        </div>

        {/* Headline */}
        <h1 className="animate-fadeUp delay-100
          text-4xl sm:text-5xl lg:text-7xl font-black text-[#F5ECD7]
          leading-[1.1] tracking-tight mb-6">
          Your Trusted Destination
          <br />
          <span className="bg-gradient-to-r from-[#C4885A] via-[#E8A87C] to-[#8B5A2B] bg-clip-text text-transparent">
            for Social Media Logs
          </span>
        </h1>

        {/* Sub-text */}
        <p className="animate-fadeUp delay-200 text-[#EDE0C4]/65 text-lg sm:text-xl
          max-w-xl mx-auto leading-relaxed mb-10">
          Access verified, high-quality social media account logs through our
          secure and professional Telegram channel.
        </p>

        {/* Main CTA */}
        <div className="animate-fadeUp delay-300 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer"
            style={{ animation: 'pulse-glow 3s ease-in-out infinite' }}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl
              bg-gradient-to-r from-[#C4885A] to-[#8B5A2B]
              text-[#F5ECD7] font-bold text-lg shadow-xl shadow-[#8B5A2B]/30
              hover:scale-105 hover:shadow-2xl hover:shadow-[#C4885A]/40
              active:scale-95 transition-all duration-300">
            <TelegramIcon size={22} />
            Join Our Official Telegram Channel
          </a>
        </div>

        {/* Trust pills */}
        <div className="animate-fadeUp delay-500 mt-16
          flex flex-col sm:flex-row justify-center gap-3 flex-wrap">
          {[
            { icon: '✓', label: 'Verified Logs' },
            { icon: '🔒', label: 'Secure Transactions' },
            { icon: '⚡', label: 'Instant Access' },
            { icon: '💬', label: 'Direct Support' },
          ].map(item => (
            <div key={item.label}
              className="flex items-center gap-2 px-4 py-2 rounded-full
                bg-[#F5ECD7]/[0.05] border border-[#8B5A2B]/20 backdrop-blur-sm
                text-[#EDE0C4]/70 text-sm">
              <span>{item.icon}</span>
              {item.label}
            </div>
          ))}
        </div>
      </div>

      {/* Scroll arrow */}
      <a href="#about" className="animate-float absolute bottom-8 left-1/2 -translate-x-1/2
        text-[#EDE0C4]/30 hover:text-[#C4885A] transition-colors duration-200"
        aria-label="Scroll down">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </a>
    </section>
  )
}

// ── About ──────────────────────────────────────────────────────────────────
function About() {
  const cards = [
    { icon: '🛡️', title: 'Verified & Trustworthy', desc: 'Every log goes through a rigorous verification process. We maintain strict quality control so you only receive genuine, usable social media account data.' },
    { icon: '💬', title: 'Community-Driven', desc: 'We operate through our official Telegram channel — a transparent space where buyers can browse listings, ask questions, and get prompt support.' },
    { icon: '📦', title: 'Premium Inventory', desc: 'Our inventory spans a wide range of platforms. Whether you need aged accounts or fresh credentials, we curate to meet professional-grade standards.' },
    { icon: '⚡', title: 'Fast Delivery', desc: 'Once a purchase is confirmed, logs are delivered swiftly through our secure Telegram channel. No unnecessary delays, no complications.' },
  ]

  return (
    <section id="about" className="py-24 lg:py-32 px-4 relative">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#6B3F1F]/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[#C4885A] text-xs font-semibold uppercase tracking-[0.2em] mb-3">About Us</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#F5ECD7] mb-4">
            What is{' '}
            <span className="bg-gradient-to-r from-[#C4885A] to-[#8B5A2B] bg-clip-text text-transparent">
              Logs-Correct?
            </span>
          </h2>
          <p className="text-[#EDE0C4]/60 max-w-xl mx-auto text-lg leading-relaxed">
            A dedicated marketplace connecting verified log sellers with buyers who demand
            quality, reliability, and professionalism.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map(card => (
            <div key={card.title}
              className="group p-6 rounded-2xl
                bg-[#F5ECD7]/[0.04] border border-[#8B5A2B]/20
                hover:bg-[#F5ECD7]/[0.07] hover:border-[#C4885A]/35
                transition-all duration-300">
              <div className="text-3xl mb-4">{card.icon}</div>
              <h3 className="text-[#F5ECD7] font-bold text-sm mb-2">{card.title}</h3>
              <p className="text-[#EDE0C4]/55 text-sm leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── How It Works ───────────────────────────────────────────────────────────
function HowItWorks() {
  const steps = [
    { num: '01', icon: '📲', title: 'Join Our Telegram', desc: 'Click the Join button and become a member of our official Telegram channel — where all listings, updates, and support happen.' },
    { num: '02', icon: '🔍', title: 'Browse Listings', desc: 'Browse through our verified listings. Each post details the platform, account specifications, and pricing so you can decide confidently.' },
    { num: '03', icon: '💳', title: 'Complete Purchase', desc: 'Follow the posted purchase instructions and pay via a secure method. Our team is available to guide you through every step.' },
    { num: '04', icon: '📥', title: 'Receive Your Logs', desc: 'After payment is confirmed, your logs are delivered promptly and securely through the channel. No unnecessary waiting.' },
  ]

  return (
    <section id="how-it-works" className="py-24 lg:py-32 px-4 relative">
      <div className="absolute bottom-0 left-0 w-[400px] h-[300px] bg-[#8B5A2B]/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-[#C4885A] text-xs font-semibold uppercase tracking-[0.2em] mb-3">Process</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#F5ECD7] mb-4">
            How It{' '}
            <span className="bg-gradient-to-r from-[#C4885A] to-[#8B5A2B] bg-clip-text text-transparent">
              Works
            </span>
          </h2>
          <p className="text-[#EDE0C4]/60 max-w-lg mx-auto text-lg">
            A simple, four-step process from discovery to delivery.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step, i) => (
            <div key={step.num}
              className="relative p-6 rounded-2xl text-center
                bg-[#F5ECD7]/[0.04] border border-[#8B5A2B]/20
                hover:border-[#C4885A]/35 hover:bg-[#F5ECD7]/[0.07]
                transition-all duration-300 group">
              <span className="absolute top-3 right-4 text-xs font-black text-[#C4885A]/50">
                {step.num}
              </span>
              <div className="text-4xl mb-4">{step.icon}</div>
              <h3 className="text-[#F5ECD7] font-bold text-sm mb-2">{step.title}</h3>
              <p className="text-[#EDE0C4]/55 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA under steps */}
        <div className="mt-12 text-center">
          <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-2xl
              bg-gradient-to-r from-[#C4885A] to-[#8B5A2B]
              text-[#F5ECD7] font-semibold shadow-lg shadow-[#8B5A2B]/25
              hover:scale-105 hover:shadow-xl hover:shadow-[#C4885A]/35
              active:scale-95 transition-all duration-300">
            <TelegramIcon size={18} />
            Start Now — Join the Channel
          </a>
        </div>
      </div>
    </section>
  )
}

// ── FAQ ────────────────────────────────────────────────────────────────────
function FAQ() {
  const [openIdx, setOpenIdx] = useState(null)

  const faqs = [
    { q: 'What are social media logs?', a: 'Social media logs refer to login credentials and account data for various platforms. They are used by professionals for account management, marketing automation, and research purposes.' },
    { q: 'How do I make a purchase?', a: 'Join our official Telegram channel via the button on this page. Inside the channel, browse current listings and follow the posted purchase instructions. Our team will guide you.' },
    { q: 'Are the logs verified before sale?', a: 'Yes — all logs listed through Logs-Correct go through a verification process before being posted. We only list inventory that meets our quality standards.' },
    { q: 'What platforms are available?', a: 'We carry logs for a variety of popular social media and online platforms. Inventory changes regularly — join our Telegram channel to see the latest listings.' },
    { q: 'What payment methods do you accept?', a: 'Payment methods and instructions are provided within the Telegram channel for each specific listing. We support secure methods appropriate for this type of transaction.' },
    { q: 'What if there is an issue with my purchase?', a: 'Contact our support team directly through the Telegram channel. We take buyer concerns seriously and resolve issues on a case-by-case basis.' },
    { q: 'How long does delivery take?', a: 'Delivery is typically processed shortly after payment confirmation. We aim for a quick turnaround on all orders.' },
  ]

  return (
    <section id="faq" className="py-24 lg:py-32 px-4 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-[#8B5A2B]/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[#C4885A] text-xs font-semibold uppercase tracking-[0.2em] mb-3">FAQ</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#F5ECD7] mb-4">
            Frequently Asked{' '}
            <span className="bg-gradient-to-r from-[#C4885A] to-[#8B5A2B] bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-[#EDE0C4]/60 text-lg">
            Everything you need to know before joining.
          </p>
        </div>

        <div className="space-y-2">
          {faqs.map((item, i) => (
            <div key={i}
              className={`rounded-xl border transition-all duration-200
                ${openIdx === i
                  ? 'bg-[#F5ECD7]/[0.07] border-[#C4885A]/40'
                  : 'bg-[#F5ECD7]/[0.03] border-[#8B5A2B]/20 hover:border-[#8B5A2B]/40'}`}>
              <button
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left cursor-pointer"
                aria-expanded={openIdx === i}>
                <span className="text-[#F5ECD7] font-semibold text-sm">{item.q}</span>
                <svg
                  width="18" height="18" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                  className={`flex-shrink-0 text-[#C4885A] transition-transform duration-200
                    ${openIdx === i ? 'rotate-180' : ''}`}>
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              {openIdx === i && (
                <p className="px-5 pb-4 text-[#EDE0C4]/60 text-sm leading-relaxed">
                  {item.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Final CTA ──────────────────────────────────────────────────────────────
function FinalCTA() {
  return (
    <section className="py-24 lg:py-32 px-4 relative overflow-hidden">
      {/* Bright centered glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          w-[600px] h-[350px] bg-[#C4885A]/15 rounded-full blur-[110px]" />
        <div className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: 'radial-gradient(circle, #C4885A 1px, transparent 1px)',
            backgroundSize: '36px 36px'
          }} />
      </div>

      <div className="relative max-w-3xl mx-auto text-center">
        {/* Telegram logo */}
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl
          bg-gradient-to-br from-[#C4885A]/25 to-[#6B3F1F]/25 border border-[#C4885A]/30 mb-6">
          <TelegramIcon size={30} />
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#F5ECD7] mb-5 leading-tight">
          Ready to Get Started?
          <br />
          <span className="bg-gradient-to-r from-[#C4885A] via-[#E8A87C] to-[#8B5A2B] bg-clip-text text-transparent">
            Join Our Telegram Channel
          </span>
        </h2>

        <p className="text-[#EDE0C4]/60 text-lg max-w-lg mx-auto mb-10 leading-relaxed">
          All purchases, listings, updates, and support happen through our official Telegram channel.
          Join now to see our current inventory and connect with our team.
        </p>

        <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-10 py-4 rounded-2xl
            bg-gradient-to-r from-[#C4885A] to-[#8B5A2B]
            text-[#F5ECD7] font-bold text-lg
            shadow-2xl shadow-[#8B5A2B]/30
            hover:scale-105 hover:shadow-2xl hover:shadow-[#C4885A]/40
            active:scale-95 transition-all duration-300">
          <TelegramIcon size={22} />
          Join @tosshiitt on Telegram
        </a>

        <p className="mt-5 text-[#EDE0C4]/30 text-sm">
          Free to join. No sign-up beyond Telegram.
        </p>
      </div>
    </section>
  )
}

// ── Footer ─────────────────────────────────────────────────────────────────
function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-[#8B5A2B]/20 bg-[#0D0700]/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#C4885A] to-[#6B3F1F] flex items-center justify-center">
              <span className="text-[#F5ECD7] font-black text-xs">LC</span>
            </div>
            <span className="text-[#F5ECD7] font-bold tracking-tight">
              Logs<span className="text-[#C4885A]">Correct</span>
            </span>
          </div>

          {/* Nav */}
          <div className="flex items-center gap-6 text-sm text-[#EDE0C4]/45">
            {['#about', '#how-it-works', '#faq'].map((href, i) => (
              <a key={href} href={href}
                className="hover:text-[#C4885A] transition-colors duration-200">
                {['About', 'How It Works', 'FAQ'][i]}
              </a>
            ))}
          </div>

          {/* Telegram link */}
          <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 text-[#C4885A] hover:text-[#E8A87C] text-sm font-medium transition-colors">
            <TelegramIcon size={14} />
            @tosshiitt
          </a>
        </div>

        <div className="mt-8 pt-6 border-t border-[#8B5A2B]/15 text-center
          text-[#EDE0C4]/30 text-xs">
          © {year} Logs-Correct. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

// ── App ────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <div className="bg-[#0D0700] min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <HowItWorks />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  )
}
