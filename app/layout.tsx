import './globals.css'
import { Inter } from 'next/font/google'
import Header from "@/components/header"
import ActiveSectionContextProvider from '@/context/active-section-context'
import { Toaster } from 'react-hot-toast'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Sonia Jethwani Portfolio',
  description: 'Sonia Jethwani is a current UVA Computer Science student seeking a technical intership.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='!scroll-smooth'>
      <body className={`${inter.className} bg-gray-950 text-gray-50 relative pt-28 sm:pt-36`}>
        {/* <div className="bg-[#1f27ff] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
        <div className="bg-[#0bb736] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div> */}
        
        <ActiveSectionContextProvider> 
          {/* Note: client components can still have server components wrapped inside. */}
          <Header />
          {children}
          <Footer />
          <Toaster position='bottom-right'/>
        </ActiveSectionContextProvider>
      </body>
    </html>
  )
}

//blue: 1f27ff
//green: 0bb736