import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { ArrowRight, Sparkles, CheckCircle, AlertCircle } from 'lucide-react'
import confetti from 'canvas-confetti'
import emailjs from '@emailjs/browser'
import { EMAIL_CONFIG, isEmailConfigured } from '../utils/emailConfig'
import { getWelcomeEmailHTML, getWelcomeEmailText } from '../utils/emailTemplates'
import { saveEmailToDatabase, isDatabaseConfigured } from '../utils/supabaseClient'
import { useLanguage } from '../contexts/LanguageContext'
import { getTranslation } from '../translations'

export default function CTA() {
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(null)
  const { language } = useLanguage()
  const t = getTranslation(language)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm()

  const onSubmit = async (data) => {
    try {
      setError(null)

      // Save to PostgreSQL Database (runs in parallel with email)
      saveEmailToDatabase(data.email).catch(err => {
        console.warn('⚠️ Failed to save to database, but continuing:', err)
      })

      // Check if EmailJS is configured
      if (!isEmailConfigured()) {
        console.warn('EmailJS not configured. Using demo mode.')
        // Demo mode - simulate success
        await new Promise((r) => setTimeout(r, 800))
      } else {
        // Send email using EmailJS
        const templateParams = {
          to_email: data.email,
          to_name: data.email.split('@')[0], // Use email username as name
          user_email: data.email,
          reply_to: 'academixhubglobal@gmail.com'
        }

        await emailjs.send(
          EMAIL_CONFIG.SERVICE_ID,
          EMAIL_CONFIG.TEMPLATE_ID,
          templateParams,
          EMAIL_CONFIG.PUBLIC_KEY
        )

        console.log('✅ Email sent successfully to:', data.email)
        
        // Log Database status
        if (isDatabaseConfigured()) {
          console.log('📊 Email also saved to PostgreSQL database')
        } else {
          console.log('⚠️ Database not configured - email not saved')
        }
      }

      // Show success message
      setSubmitted(true)
      reset()
      
      // Trigger confetti! 🎉
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#3E8E3A', '#F4C542', '#2F6FBF', '#0D2B4E']
      })
      
      // Auto-hide success message after 10 seconds
      setTimeout(() => setSubmitted(false), 10000)

    } catch (err) {
      console.error('Error sending email:', err)
      setError(t.cta.errorFailed)
    }
  }

  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy via-navy to-blue p-8 md:p-12 lg:p-16">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-yellow/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-green/10 rounded-full blur-3xl" />
      
      <div className="relative max-w-4xl mx-auto">
        {/* Benefit badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green border border-green text-white mb-6">
          <Sparkles size={16} className="text-white" />
          <span className="text-sm font-semibold">{t.cta.badge}</span>
        </div>

        <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 text-white leading-tight">
          {t.cta.title}
        </h3>
        
        <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl">
          {t.cta.subtitle}
        </p>

        {error && (
          <div className="rounded-2xl bg-red/20 border-2 border-red/40 p-4 text-white max-w-2xl mb-6 backdrop-blur">
            <p className="font-semibold flex items-center gap-2">
              <AlertCircle className="text-red" size={20} />
              {error}
            </p>
          </div>
        )}

        {!submitted ? (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col sm:flex-row items-stretch gap-4 max-w-2xl"
          >
            <div className="flex-1 relative">
              <input
                type="email"
                placeholder={t.cta.placeholder}
                className={`w-full rounded-xl px-6 py-4 text-navy placeholder:text-navy/60 outline-none bg-white text-lg font-medium shadow-lg transition-all duration-200 ${
                  errors.email 
                    ? 'ring-2 ring-red border-2 border-red' 
                    : 'focus:ring-2 focus:ring-green'
                }`}
                {...register('email', {
                  required: t.cta.errorRequired,
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: t.cta.errorInvalid
                  }
                })}
                aria-invalid={errors.email ? 'true' : 'false'}
                aria-describedby={errors.email ? 'email-error' : undefined}
              />
              {errors.email && (
                <div 
                  id="email-error"
                  className="absolute -bottom-8 left-0 flex items-center gap-2 text-yellow text-sm font-semibold animate-pulse"
                  role="alert"
                >
                  <AlertCircle size={16} />
                  <span>{errors.email.message}</span>
                </div>
              )}
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn bg-green text-white hover:bg-green/90 border-0 hover:scale-105 active:scale-95 hover-shine shadow-lg text-lg px-8 py-4 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Submit waitlist form"
            >
              {isSubmitting ? t.cta.submitting : t.cta.submitBtn}
              {!isSubmitting && <ArrowRight size={20} />}
            </button>
          </form>
        ) : (
          <div className="rounded-2xl bg-green/20 border-2 border-green/40 p-6 text-white max-w-2xl backdrop-blur animate-fade-in">
            <p className="font-bold text-xl mb-2 flex items-center gap-2">
              <CheckCircle className="text-green animate-bounce" size={24} />
              {t.cta.successTitle}
            </p>
            <p className="text-white/90">
              {t.cta.successMsg}
            </p>
          </div>
        )}

        <p className="text-white/60 text-sm mt-6">
          {t.cta.disclaimer}
        </p>
      </div>
    </div>
  )
}


