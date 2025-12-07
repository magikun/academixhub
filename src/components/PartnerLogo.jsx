export default function PartnerLogo({ src, alt, className = '', eager = false }) {
  return (
    <img
      src={src}
      alt={alt}
      loading={eager ? "eager" : "lazy"}
      fetchPriority={eager ? "high" : "auto"}
      className={`${className} transition-transform duration-200 ease-out transform hover:-translate-y-1 mix-blend-multiply`}
    />
  )
}


