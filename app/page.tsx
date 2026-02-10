import Contact from '@/sections/Contact'
import Download from '@/sections/Download'
import Experience from '@/sections/Experience'
import Features from '@/sections/Features'
import Hero from '@/sections/Hero'
import Language from '@/sections/Language'
import React from 'react'

const page = () => {
  return (
    <div className='font-sans'>
      <Hero />
      <Language />
      <Features />
      <Experience />
      <Contact />
      <Download />
    </div>
  )
}

export default page
