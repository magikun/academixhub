import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

// Reusable fade + slight up translate on scroll into view
export default function FadeInSection({ children, className = '', delay = 0, as = 'div', once = true }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once, margin: '0px 0px -10% 0px' })
  const Tag = motion[as] || motion.div

  return (
    <Tag
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
      transition={{ duration: 0.5, ease: 'easeOut', delay }}
      className={className}
    >
      {children}
    </Tag>
  )
}


