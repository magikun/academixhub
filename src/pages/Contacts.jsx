import { Mail, MapPin, Send, Instagram, ArrowRight } from 'lucide-react'
import FadeInSection from '../components/FadeInSection'
import { useLanguage } from '../contexts/LanguageContext'
import { getTranslation } from '../translations'
import { HighlightGroup, HighlighterItem, Particles } from '../components/ui/highlighter'
import { LocationMap } from '../components/ui/expand-map'

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

      {/* Highlighter Section */}
      <section className="pb-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <FadeInSection>
              <HighlightGroup className="group h-full">
                <div className="group/item h-full">
                  <HighlighterItem className="rounded-3xl before:bg-white/30">
                    <div className="relative z-20 h-full overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-600 via-teal-700 to-cyan-800">
                      <Particles
                        className="absolute inset-0 -z-10 opacity-10 transition-opacity duration-1000 ease-in-out group-hover/item:opacity-100"
                        quantity={200}
                        color={"#ffffff"}
                        vy={-0.2}
                      />
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
                          <span>{t.contacts.bookBtn} a call</span>
                          <ArrowRight 
                      className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" 
                            size={20}
                          />
                        </a>
                      </div>
                    </div>
                  </HighlighterItem>
                </div>
              </HighlightGroup>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="section">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-stretch">
              <FadeInSection>
                <div className="card p-8 flex flex-col hover:scale-105 transition-transform h-full">
                  <h3 className="text-2xl font-bold text-navy mb-6">{t.contacts.emailTitle}</h3>
                  <div className="flex justify-center items-center flex-1 min-h-[140px]">
                    <div className="text-center">
                      <div className="w-16 h-16 mb-4 rounded-full bg-blue/10 flex items-center justify-center mx-auto">
                        <Mail className="text-blue" size={32} />
                      </div>
                      <a href="mailto:academixhubglobal@gmail.com" className="text-lg text-blue hover:underline">
                        academixhubglobal@gmail.com
                      </a>
                    </div>
                  </div>
                  <p className="text-navy/70 mt-6 text-center">
                    {t.contacts.emailDesc}
                  </p>
                </div>
              </FadeInSection>

              <FadeInSection>
                <div className="card p-8 flex flex-col h-full">
                  <h3 className="text-2xl font-bold text-navy mb-6">{t.contacts.locationTitle}</h3>
                  <div className="flex justify-center flex-1">
                    <LocationMap 
                      location={t.contacts.location}
                      coordinates="51.1694° N, 71.4491° E"
                    />
                  </div>
                  <p className="text-navy/70 mt-6 text-center">
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

