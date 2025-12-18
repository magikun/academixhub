import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'
import { getTranslation } from '../translations'
import { TestimonialsColumn } from './ui/testimonials-columns'

// Helper function to extract role and name from full name string
const extractRoleAndName = (fullName) => {
  // Pattern: "Role, Name" or "Role of Company, Name" or just "Role"
  const commaIndex = fullName.lastIndexOf(',')
  
  if (commaIndex > 0) {
    // Has comma - split into role and name
    const rolePart = fullName.substring(0, commaIndex).trim()
    const namePart = fullName.substring(commaIndex + 1).trim()
    
    // Special cases for roles with "of"
    if (rolePart.includes('Co-founder of')) {
      return { role: rolePart, name: namePart }
    }
    if (rolePart.includes('CEO')) {
      return { role: rolePart, name: namePart }
    }
    
    // For simple roles like "Research Lead", "Startup Founder", etc.
    return { role: rolePart, name: namePart }
  } else {
    // No comma - the whole string is likely just the role
    return { role: fullName, name: fullName }
  }
}

// Avatar images for testimonials
// You can replace these with:
// 1. URLs to your own images: 'https://example.com/avatar1.jpg'
// 2. Local images: import avatar1 from '../images/avatar1.jpg' then use avatar1
// 3. Or use a placeholder service: 'https://i.pravatar.cc/150?img=1'
const avatarImages = [
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces',
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces',
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces',
  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=faces',
  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=faces',
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces',
  'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=faces',
  'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=faces',
  'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=100&h=100&fit=crop&crop=faces',
  'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=100&h=100&fit=crop&crop=faces',
  'https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=100&h=100&fit=crop&crop=faces',
  'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=100&h=100&fit=crop&crop=faces',
  'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=faces',
  'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&h=100&fit=crop&crop=faces',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces',
]

export default function Testimonials() {
  const { language } = useLanguage()
  const t = getTranslation(language)

  // Transform testimonials data to include image, clean name, and role
  const allTestimonials = [
    { name: t.testimonials.test1Name, quote: t.testimonials.test1Quote },
    { name: t.testimonials.test2Name, quote: t.testimonials.test2Quote },
    { name: t.testimonials.test3Name, quote: t.testimonials.test3Quote },
    { name: t.testimonials.test4Name, quote: t.testimonials.test4Quote },
    { name: t.testimonials.test5Name, quote: t.testimonials.test5Quote },
    { name: t.testimonials.test6Name, quote: t.testimonials.test6Quote },
    { name: t.testimonials.test7Name, quote: t.testimonials.test7Quote },
    { name: t.testimonials.test8Name, quote: t.testimonials.test8Quote },
    { name: t.testimonials.test9Name, quote: t.testimonials.test9Quote },
    { name: t.testimonials.test10Name, quote: t.testimonials.test10Quote },
    { name: t.testimonials.test11Name, quote: t.testimonials.test11Quote },
    { name: t.testimonials.test12Name, quote: t.testimonials.test12Quote },
    { name: t.testimonials.test13Name, quote: t.testimonials.test13Quote },
    { name: t.testimonials.test14Name, quote: t.testimonials.test14Quote },
    { name: t.testimonials.test15Name, quote: t.testimonials.test15Quote },
  ].map((testimonial, index) => {
    const { role, name } = extractRoleAndName(testimonial.name)
    return {
      text: testimonial.quote,
      image: avatarImages[index % avatarImages.length],
      name: name,
      role: role,
    }
  })

  const firstColumn = allTestimonials.slice(0, 5)
  const secondColumn = allTestimonials.slice(5, 10)
  const thirdColumn = allTestimonials.slice(10, 15)

  return (
    <section className="py-12 md:py-20 relative bg-offwhite overflow-visible">
      <div className="container z-10 mx-auto px-4 overflow-visible">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto mb-12"
        >
          <div className="flex justify-center mb-5">
            <div className="border border-navy/20 py-1 px-4 rounded-lg text-navy/70 text-sm font-medium">
              {t.testimonials.title}
            </div>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-navy text-center">
            What our users say
          </h2>
          <p className="text-center mt-5 text-navy/70 text-base md:text-lg">
            See what our community members have to say about us.
          </p>
        </motion.div>

        <div className="flex justify-center gap-4 md:gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden relative z-0">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  )
}


