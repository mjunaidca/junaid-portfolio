import './globals.css'
import { Encode_Sans_Semi_Expanded } from "next/font/google"

const sans = Encode_Sans_Semi_Expanded({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
})

export const metadata = {
  title: 'MJS Portfolio',
  description: 'Muhammad Junaid Shaukat Creative developer portfolio',
  icon: '/icon1.png',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${sans.className}`}>
      <body>{children}</body>
    </html>
  )
}
