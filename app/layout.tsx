import type { Metadata } from 'next'
import { Fredoka, Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import FaviconSwitcher from '@/components/favicon-switcher'
import './globals.css'

// ✅ Fredoka for headings
const fredoka = Fredoka({
  subsets: ['latin'],
  variable: '--font-fredoka',
})

// ✅ Poppins for body text
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Furrendly - Pet Care & Adoption Platform',
  description:
    'Find, care, and adopt pets with Furrendly. Your all-in-one platform for pet health records, matching, and community.',
  icons: {
    icon: "/favicon-light.png",
    apple: "/favicon-light.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${fredoka.variable} ${poppins.variable} font-sans antialiased bg-white text-gray-900`}
        suppressHydrationWarning
      >
        <ThemeProvider>
          <FaviconSwitcher />
          {children}
        </ThemeProvider>

        <Analytics />
      </body>
    </html>
  )
}