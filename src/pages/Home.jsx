import Hero from '../components/Hero'
import Problem from '../components/Problem'
import Features from '../components/Features'
import Stats from '../components/Stats'
import CTA from '../components/CTA'
import FadeInSection from '../components/FadeInSection'
import About from '../components/About'
import Audience from '../components/Audience'
import Community from '../components/Community'
import Testimonials from '../components/Testimonials'
import TrustedBy from '../components/TrustedBy'
import businessman from '../images/businessman.png'
import feedback from '../images/feedback.png'
import fivestarsphone from '../images/fivestarsphone.png'

export default function Home() {
  return (
    <>
      <section className="pt-4">
        <Hero />
      </section>

      <section className="section">
        <TrustedBy />
      </section>

      <section className="section">
        <div className="container mx-auto">
          <About />
        </div>
      </section>

      <section className="section">
        <div className="container mx-auto">
          <Audience />
        </div>
      </section>

      <section className="section">
        <FadeInSection>
          <div className="container mx-auto">
            <Problem />
          </div>
        </FadeInSection>
      </section>

      <section className="section">
        <FadeInSection>
          <div className="container mx-auto">
            <Features />
          </div>
        </FadeInSection>
      </section>

      <section className="section">
        <FadeInSection>
          <div className="container mx-auto">
            <Stats />
          </div>
        </FadeInSection>
      </section>

      <section className="section">
        <div className="container mx-auto">
          <Community />
        </div>
      </section>

      <section className="section relative overflow-visible">
        {/* Decorative Images - Outside testimonials content */}
        <div className="absolute top-20 left-2 md:left-8 lg:left-16 w-20 h-20 md:w-28 md:h-28 lg:w-40 lg:h-40 float-slow pointer-events-none">
          <img src={businessman} alt="" className="w-full h-full object-contain" />
        </div>
        <div className="absolute top-20 right-4 md:right-8 lg:right-16 w-14 h-14 md:w-24 md:h-24 lg:w-36 lg:h-36 float-slow pointer-events-none" style={{ animationDelay: '1s' }}>
          <img src={feedback} alt="" className="w-full h-full object-contain" />
        </div>
       
        
        <div className="container mx-auto relative z-10">
          <Testimonials />
        </div>
      </section>

      <section className="section">
        <FadeInSection>
          <div className="container mx-auto">
            {/* Invisible anchor point above CTA */}
            <div id="apply" className="absolute -mt-32" />
            <CTA />
          </div>
        </FadeInSection>
      </section>
    </>
  )
}

