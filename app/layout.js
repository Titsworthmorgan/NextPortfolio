import Nav from '@/Components/nav/nav'
import './globals.css'
import styles from './index.module.scss'


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='bg-black text-white'>
        <Nav />
        {children}
      </body>
    </html>
  )
}
