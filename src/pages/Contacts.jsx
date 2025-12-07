import { Mail, MapPin, Send, Instagram } from 'lucide-react'
import FadeInSection from '../components/FadeInSection'
import { useLanguage } from '../contexts/LanguageContext'
import { getTranslation } from '../translations'

export default function Contacts() {
  const { language } = useLanguage()
  const t = getTranslation(language)
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-16 pb-12 bg-gradient-to-br from-blue/5 to-green/5">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-navy mb-6">
                {t.contacts.title}
              </h1>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Beautiful Gradient Section */}
      <section className="pb-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <FadeInSection>
              <div className="relative rounded-2xl overflow-hidden">
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 via-teal-700 to-cyan-800 opacity-95" />
                
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-yellow/20 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-green/20 rounded-full blur-3xl" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue/10 rounded-full blur-3xl" />
                
                {/* Content */}
                <div className="relative z-10 px-8 py-12 md:px-12 md:py-16 text-center">
                  <p className="text-xl md:text-2xl text-white font-medium leading-relaxed mb-8">
                    {t.contacts.subtitle}
                  </p>
                  
                  {/* Book Button */}
                  <a
                    href="https://cal.com/magzhan-amanzhan-igghrm/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-navy font-bold text-base md:text-lg hover:bg-offwhite hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
                  >
                    <span>{t.contacts.bookBtn}</span>
                    <svg 
                      className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
                
                {/* Bottom shine effect */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="section">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <FadeInSection>
                <div className="card p-8 hover:scale-105 transition-transform">
                  <div className="w-16 h-16 mb-4 rounded-full bg-blue/10 flex items-center justify-center">
                    <Mail className="text-blue" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-navy mb-3">{t.contacts.emailTitle}</h3>
                  <a href="mailto:academixhubglobal@gmail.com" className="text-lg text-blue hover:underline">
                  academixhubglobal@gmail.com
                  </a>
                  <p className="text-navy/70 mt-2">
                    {t.contacts.emailDesc}
                  </p>
                </div>
              </FadeInSection>

              <FadeInSection>
                <div className="card p-8 hover:scale-105 transition-transform">
                  <div className="w-16 h-16 mb-4 rounded-full bg-green/10 flex items-center justify-center">
                    <MapPin className="text-green" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-navy mb-3">{t.contacts.locationTitle}</h3>
                  <p className="text-lg text-navy/80">
                    {t.contacts.location}
                  </p>
                  <p className="text-navy/70 mt-2">
                    {t.contacts.locationDesc}
                  </p>
                </div>
              </FadeInSection>
            </div>

            {/* Social Media */}
            <FadeInSection>
              <div className="card p-8 mt-8">
                <h3 className="text-2xl font-bold text-navy mb-6 text-center">
                  {t.contacts.connectTitle}
                </h3>
                <div className="flex justify-center items-center gap-8">
                  <a
                    href="https://t.me/+NfgWEYGdCDVhMTYy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-6 py-3 rounded-lg bg-blue/10 text-blue hover:bg-blue/20 transition-colors cursor-pointer"
                  >
                    <Send size={24} />
                    <span className="font-semibold">{t.contacts.telegram}</span>
                  </a>
                  <a
                    href="https://www.instagram.com/academixhubglobal/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-6 py-3 rounded-lg bg-green/10 text-green hover:bg-green/20 transition-colors cursor-pointer"
                  >
                    <Instagram size={24} />
                    <span className="font-semibold">{t.contacts.instagram}</span>
                  </a>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-to-br from-navy to-blue text-white">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {t.contacts.ctaTitle}
              </h2>
              <p className="text-xl mb-8 text-white/90">
                {t.contacts.ctaDesc}
              </p>
              <a
                href="/"
                className="btn bg-white text-navy hover:bg-offwhite inline-flex items-center gap-2 text-lg px-8 py-4"
              >
                {t.contacts.ctaBtn}
              </a>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  )
}

