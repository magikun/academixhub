import { useState, useRef, useMemo } from "react"
import { ArrowRight, TrendingUp } from "lucide-react"
import { useLanguage } from "../../contexts/LanguageContext"
import { getTranslation } from "../../translations"

const monthData = [
  { month: "Jun", value: 50 },
  { month: "Jul", value: 150 },
  { month: "Aug", value: 300 },
  { month: "Sep", value: 500 },
  { month: "Oct", value: 750 },
  { month: "Nov", value: 900 },
  { month: "Dec", value: 1050 },
]

export function PeopleInCommunity() {
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const chartRef = useRef(null)
  const { language } = useLanguage()
  const t = getTranslation(language)

  const maxValue = Math.max(...monthData.map((d) => d.value))
  const minValue = Math.min(...monthData.map((d) => d.value))
  const chartHeight = 140
  const chartWidth = 320
  const padding = { top: 20, bottom: 30, left: 10, right: 10 }

  const getY = (value) => {
    const range = maxValue - minValue || 1
    const normalized = (value - minValue) / range
    return chartHeight - padding.bottom - normalized * (chartHeight - padding.top - padding.bottom)
  }

  const getX = (index) => {
    return padding.left + (index / (monthData.length - 1)) * (chartWidth - padding.left - padding.right)
  }

  const generatePath = () => {
    const points = monthData.map((d, i) => ({ x: getX(i), y: getY(d.value) }))

    let path = `M ${points[0].x} ${points[0].y}`

    for (let i = 0; i < points.length - 1; i++) {
      const p0 = points[i - 1] || points[i]
      const p1 = points[i]
      const p2 = points[i + 1]
      const p3 = points[i + 2] || p2

      const tension = 0.35
      const cp1x = p1.x + (p2.x - p0.x) * tension
      const cp1y = p1.y + (p2.y - p0.y) * tension
      const cp2x = p2.x - (p3.x - p1.x) * tension
      const cp2y = p2.y - (p3.y - p1.y) * tension

      path += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${p2.x} ${p2.y}`
    }

    return path
  }

  const generateAreaPath = () => {
    const linePath = generatePath()
    const lastPoint = monthData.length - 1
    return `${linePath} L ${getX(lastPoint)} ${chartHeight - padding.bottom} L ${getX(0)} ${chartHeight - padding.bottom} Z`
  }

  const handleMouseMove = (e) => {
    if (!chartRef.current) return
    const rect = chartRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const relativeX = (x / rect.width) * chartWidth

    let closestIndex = 0
    let closestDist = Number.POSITIVE_INFINITY
    monthData.forEach((_, i) => {
      const dist = Math.abs(getX(i) - relativeX)
      if (dist < closestDist) {
        closestDist = dist
        closestIndex = i
      }
    })
    setHoveredIndex(closestIndex)
    
    // Calculate tooltip position
    const pointX = (getX(closestIndex) / chartWidth) * rect.width
    const pointY = (getY(monthData[closestIndex].value) / chartHeight) * rect.height
    setTooltipPosition({
      x: pointX,
      y: pointY - 30 // Position above the point
    })
  }

  const handleMouseLeave = () => {
    setHoveredIndex(null)
  }

  const scatteredDots = useMemo(
    () =>
      Array.from({ length: 30 }, (_, i) => ({
        x: 30 + (i % 6) * 50 + (Math.random() - 0.5) * 35,
        y: padding.top + 10 + Math.floor(i / 6) * 18 + (Math.random() - 0.5) * 12,
        opacity: 0.3 + Math.random() * 0.4,
        size: 1.5 + Math.random() * 2,
      })),
    [],
  )

  // Illustrative cards component
  const PeopleCards = () => (
    <div className="relative h-[110px] w-[130px]">
      <div className="absolute top-0 right-0 w-16 h-20 rounded-lg bg-white/80 shadow-sm border border-navy/10 transform rotate-3">
        <div className="w-8 h-8 rounded-full bg-blue/20 m-2 flex items-center justify-center">
          <div className="w-4 h-4 rounded-full bg-blue/40"></div>
        </div>
      </div>
      <div className="absolute top-2 right-2 w-16 h-20 rounded-lg bg-white/80 shadow-sm border border-navy/10 transform -rotate-2">
        <div className="w-8 h-8 rounded-full bg-green/20 m-2 flex items-center justify-center">
          <div className="w-4 h-4 rounded-full bg-green/40"></div>
        </div>
      </div>
      <div className="absolute top-4 right-4 w-16 h-20 rounded-lg bg-white/80 shadow-sm border border-navy/10 transform rotate-1">
        <div className="w-8 h-8 rounded-full bg-yellow/20 m-2 flex items-center justify-center">
          <div className="w-4 h-4 rounded-full bg-yellow/40"></div>
        </div>
      </div>
    </div>
  )

  return (
    <div className="relative overflow-visible rounded-[28px] bg-white p-7 pb-5 shadow-[0_2px_8px_rgba(0,0,0,0.08),0_0_0_1px_rgba(0,0,0,0.04)] h-full flex flex-col">
      {/* Header Section */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <p className="text-[15px] font-medium tracking-wide text-navy/70" style={{ fontFamily: 'inherit' }}>
            {t.peopleCommunity.title}
          </p>
          <h2 className="mt-1.5 text-[46px] font-semibold leading-[1] tracking-[-0.02em] text-navy" style={{ fontFamily: 'inherit' }}>
            1050
          </h2>
          <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-navy/20 bg-offwhite/60 px-4 py-2 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
            <span className="text-[14px] font-semibold text-navy" style={{ fontFamily: 'inherit' }}>
              {t.peopleCommunity.growth}
            </span>
            <TrendingUp className="w-4 h-4 text-navy" />
          </div>
        </div>

        <div className="relative -mr-1 -mt-1">
          <PeopleCards />
        </div>
      </div>

      {/* Chart Section */}
      <div className="relative mt-2 flex-1 flex flex-col justify-end overflow-visible">
        <svg
          ref={chartRef}
          viewBox={`0 0 ${chartWidth} ${chartHeight}`}
          className="w-full"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ cursor: "default", overflow: "visible" }}
        >
          <defs>
            <linearGradient id="peopleAreaGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#5B52E5" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#5B52E5" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Scattered dots */}
          {scatteredDots.map((dot, i) => (
            <circle
              key={i}
              cx={dot.x}
              cy={dot.y}
              r={dot.size}
              fill="#0D2B4E"
              opacity={dot.opacity}
            />
          ))}

          {/* Area fill */}
          <path
            d={generateAreaPath()}
            fill="url(#peopleAreaGradient)"
          />

          {/* Line */}
          <path
            d={generatePath()}
            fill="none"
            stroke="#2F6FBF"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Data points */}
          {monthData.map((d, i) => (
            <circle
              key={i}
              cx={getX(i)}
              cy={getY(d.value)}
              r={hoveredIndex === i ? 5 : 3.5}
              fill="#2F6FBF"
              className="transition-all duration-200 cursor-pointer"
            />
          ))}

          {/* Tooltip - rendered on top */}
          {hoveredIndex !== null && (
            <g style={{ pointerEvents: 'none' }}>
              {/* Tooltip background - wider to accommodate larger numbers */}
              <rect
                x={getX(hoveredIndex) - 35}
                y={getY(monthData[hoveredIndex].value) - 50}
                width="70"
                height="28"
                rx="6"
                fill="#0D2B4E"
                opacity="0.95"
                stroke="#2F6FBF"
                strokeWidth="1"
              />
              {/* Tooltip text */}
              <text
                x={getX(hoveredIndex)}
                y={getY(monthData[hoveredIndex].value) - 32}
                textAnchor="middle"
                fill="#FFFFFF"
                fontSize="13"
                fontWeight="600"
                style={{ fontFamily: 'inherit' }}
              >
                {monthData[hoveredIndex].value.toLocaleString()}
              </text>
              {/* Tooltip arrow */}
              <polygon
                points={`${getX(hoveredIndex)},${getY(monthData[hoveredIndex].value) - 22} ${getX(hoveredIndex) - 5},${getY(monthData[hoveredIndex].value) - 15} ${getX(hoveredIndex) + 5},${getY(monthData[hoveredIndex].value) - 15}`}
                fill="#0D2B4E"
                opacity="0.95"
                stroke="#2F6FBF"
                strokeWidth="1"
              />
            </g>
          )}

          {/* X-axis labels */}
          {monthData.map((d, i) => (
            <text
              key={i}
              x={getX(i)}
              y={chartHeight - padding.bottom + 20}
              textAnchor="middle"
              className="text-[11px] fill-navy/60"
              style={{ fontFamily: 'inherit' }}
            >
              {d.month}
            </text>
          ))}
        </svg>
      </div>

      {/* CTA Button */}
      <div className="mt-6">
        <a
          href="https://t.me/+NfgWEYGdCDVhMTYy"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 w-full justify-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue to-green text-white font-semibold text-sm hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
          style={{ fontFamily: 'inherit' }}
        >
          <span>{t.peopleCommunity.joinBtn}</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>
  )
}

