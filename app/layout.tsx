import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import FaviconSwitcher from '@/components/favicon-switcher'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
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
        className={`${inter.className} antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider>
          {/* ✅ Handles favicon based on DEVICE theme */}
          <FaviconSwitcher />

          {children}
        </ThemeProvider>

        <Analytics />
      </body>
    </html>
  )
}