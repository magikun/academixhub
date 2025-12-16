import { CheckCircle2, ArrowRight } from 'lucide-react'
import FadeInSection from '../components/FadeInSection'
import { useLanguage } from '../contexts/LanguageContext'
import { getTranslation } from '../translations'

export default function Path() {
  const { language } = useLanguage()
  const t = getTranslation(language)
  
  const steps = [
    {
      number: '01',
      title: t.path.step1,
      description: t.path.step1Desc,
      color: 'blue'
    },
    {
      number: '02',
      title: t.path.step2,
      description: t.path.step2Desc,
      color: 'green'
    },
    {
      number: '03',
      title: t.path.step3,
      description: t.path.step3Desc,
      color: 'yellow'
    },
    {
      number: '04',
      title: t.path.step4,
      description: t.path.step4Desc,
      color: 'navy'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-16 pb-12 bg-gradient-to-br from-green/5 to-blue/5">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-navy mb-6">
                {t.path.title}
              </h1>
              <p className="text-xl md:text-2xl text-navy/80 leading-relaxed">
                {t.path.subtitle}
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Steps Section */}
      <section className="section">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-12">
            {steps.map((step, idx) => (
              <FadeInSection key={idx}>
                <div className="flex flex-col md:flex-row items-start gap-6 p-8 card hover:scale-[1.02] transition-all">
                  <div className={`text-6xl md:text-7xl font-extrabold text-${step.color}/20 min-w-[100px]`}>
                    {step.number}
                  </div>
                  <div className="flex-1 flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-bold text-navy mb-3">
                        {step.title}
                      </h3>
                      <p className="text-lg text-navy/70 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                    <div className="flex-shrink-0 pt-1">
                      <CheckCircle2 className={`text-${step.color}`} size={28} />
                    </div>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-to-br from-navy/5 to-blue/5">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
                {t.path.ctaTitle}
              </h2>
              <p className="text-lg md:text-xl text-navy/80 mb-8">
                {t.path.ctaDesc}
              </p>
              <a
                href="/"
                className="btn bg-blue text-white hover:bg-blue/90 inline-flex items-center gap-2 text-lg px-8 py-4"
              >
                {t.path.ctaBtn}
                <ArrowRight size={20} />
              </a>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  )
}

