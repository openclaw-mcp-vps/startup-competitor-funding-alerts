import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'FundingAlert — Get instant alerts when competitors raise funding',
  description: 'Monitor funding databases and news sources. Get alerted within hours when competitors announce funding rounds.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="47274ec6-be1b-4c57-9e3a-0599d84cdc35"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
