import logo from './academix-logo.jpg'

export default function MonoLogo({ className = 'h-8 w-8', colorClass = 'bg-navy' }) {
  return (
    <span
      aria-label="Academix Hub logo"
      className={`inline-block ${className} ${colorClass}`}
      style={{
        WebkitMaskImage: `url(${logo})`,
        maskImage: `url(${logo})`,
        WebkitMaskSize: 'cover',
        maskSize: 'cover',
        WebkitMaskRepeat: 'no-repeat',
        maskRepeat: 'no-repeat',
        WebkitMaskPosition: 'center',
        maskPosition: 'center'
      }}
    />
  )
}


