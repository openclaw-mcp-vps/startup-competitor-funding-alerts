export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6 border border-[#58a6ff]/20">
          Startup Intelligence
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Get instant alerts when<br />
          <span className="text-[#58a6ff]">competitors raise funding</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          FundingAlert monitors Crunchbase, PitchBook, and top news sources. Know within hours — not weeks — when a competitor closes a round.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Monitoring — $49/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. No contracts.</p>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">⚡</div>
            <h3 className="font-semibold text-white mb-1">Hours, not weeks</h3>
            <p className="text-sm text-[#8b949e]">Alerts fire within hours of a funding announcement going public.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">🔍</div>
            <h3 className="font-semibold text-white mb-1">Multi-source coverage</h3>
            <p className="text-sm text-[#8b949e]">Crunchbase, PitchBook, TechCrunch, and 20+ news sources scanned continuously.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">📬</div>
            <h3 className="font-semibold text-white mb-1">Email & webhooks</h3>
            <p className="text-sm text-[#8b949e]">Receive alerts in your inbox or pipe them into Slack, Zapier, or your CRM.</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff]/40 rounded-2xl p-8 text-center shadow-lg shadow-[#58a6ff]/5">
          <p className="text-sm text-[#58a6ff] font-semibold uppercase tracking-widest mb-2">Pro Plan</p>
          <div className="text-5xl font-bold text-white mb-1">$49</div>
          <p className="text-[#8b949e] mb-6">per month</p>
          <ul className="text-sm text-[#c9d1d9] space-y-3 mb-8 text-left">
            {[
              'Track up to 50 competitors',
              'Alerts within 2 hours',
              'Email + webhook delivery',
              'Crunchbase & PitchBook data',
              'Funding round details & investor info',
              'Slack integration',
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff]">✓</span> {f}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
          <p className="mt-3 text-xs text-[#8b949e]">Secure checkout via Lemon Squeezy</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">How quickly will I get alerted?</h3>
            <p className="text-sm text-[#8b949e]">Our background jobs run every 30 minutes. Most funding announcements are detected and delivered within 1–2 hours of going public.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Which data sources do you monitor?</h3>
            <p className="text-sm text-[#8b949e]">We pull from Crunchbase, PitchBook, TechCrunch, VentureBeat, SEC EDGAR filings, and 20+ curated news feeds — all in one place.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Can I cancel anytime?</h3>
            <p className="text-sm text-[#8b949e]">Yes. Cancel with one click from your dashboard. No questions asked, no lock-in contracts.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-6 text-xs text-[#8b949e]">
        © {new Date().getFullYear()} FundingAlert. All rights reserved.
      </footer>
    </main>
  )
}
