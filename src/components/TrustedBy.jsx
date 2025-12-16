import FadeInSection from './FadeInSection.jsx'
import logoFallback from './academix-logo.png'
import { useLanguage } from '../contexts/LanguageContext'
import { getTranslation } from '../translations'

// Auto-import all partner logos from components/partners (png, jpg, jpeg, svg)
// Sorted by filename to keep a stable order
const modules = import.meta.glob('./partners/*.{png,PNG,jpg,JPG,jpeg,JPEG,svg,SVG}', { eager: true, query: '?url', import: 'default' })
const discovered = Object.entries(modules)
  .sort((a, b) => a[0].localeCompare(b[0]))
  .map(([path, url], idx) => ({
    id: idx,
    src: url,
    alt: path.split('/').pop().split('.')[0].replace(/[-_]/g, ' ')
  }))

// Fallback if no files yet
const logos = discovered.length
  ? discovered
  : Array.from({ length: 8 }, (_, i) => ({ id: i, src: logoFallback, alt: `Partner ${i + 1}` }))

export default function TrustedBy() {
  const { language } = useLanguage()
  const t = getTranslation(language)
  
  return (
    <FadeInSection>
      <div className="mt-6">
        <h2 className="text-2xl md:text-3xl font-bold text-navy text-center mb-8">{t.trustedBy.title}</h2>

        <div className="relative overflow-hidden rounded-lg w-full py-8 md:py-10">
          {/* Static grid layout */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8 px-4">
            {logos.map((l) => {
              const isInvestly = l.src.includes('investly')
              const heightClass = isInvestly ? 'h-16 md:h-20' : 'h-24 md:h-32'
              return (
                <div key={`logo-${l.id}`} className="flex items-center justify-center">
                  <img
                    src={l.src}
                    alt={l.alt}
                    className={`${heightClass} w-auto object-contain md:grayscale md:opacity-30 md:hover:grayscale-0 md:hover:opacity-100 transition-all duration-300 ease-out`}
                  />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </FadeInSection>
  )
}


