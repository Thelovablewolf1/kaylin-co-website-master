import { Suspense } from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import DreamCanvas from '@/components/DreamCanvas'
import Services from '@/components/Services'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import LoadingScreen from '@/components/LoadingScreen'

// Loading component for DreamCanvas
function DreamCanvasFallback() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none opacity-30">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-pink-500/5 to-blue-500/5" />
    </div>
  )
}

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Loading Screen */}
      <LoadingScreen />
      
      {/* 3D Background Canvas with Suspense */}
      <Suspense fallback={<DreamCanvasFallback />}>
        <DreamCanvas />
      </Suspense>
      
      {/* Navigation */}
      <Navbar />
      
      {/* Sections */}
      <section id="home">
        <Hero />
      </section>
      
      <section id="services">
        <Services />
      </section>
      
      
      <section id="about">
        <About />
      </section>
      
      <section id="contact">
        <Contact />
      </section>
      
      {/* Footer */}
      <Footer />
      
      {/* Background Gradient Orbs */}
      <div className="fixed inset-0 -z-20 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      </div>
      
      {/* Grid Pattern */}
      <div className="fixed inset-0 -z-30 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black_30%,transparent_100%)]" />
    </main>
  )
}