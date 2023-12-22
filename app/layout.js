import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/ui/Navbar/index'
import { CartProvider } from '@/context/CartContext'
import { AuthProvider } from '@/context/AuthContext'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <CartProvider>
            <Navbar/>
            {children}
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
