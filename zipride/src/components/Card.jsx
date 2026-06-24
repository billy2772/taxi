import { motion } from 'framer-motion'

export default function Card({ 
  children, 
  className = '', 
  hover = false,
  glass = false,
  onClick
}) {
  const baseStyles = 'rounded-2xl p-6 transition-all-smooth'
  const glassStyles = glass 
    ? 'glass dark:glass-dark' 
    : 'bg-white dark:bg-gray-800 shadow-premium'
  const hoverStyles = hover 
    ? 'hover:shadow-premium-lg hover:-translate-y-1 cursor-pointer' 
    : ''
  
  if (onClick) {
    return (
      <motion.div
        whileHover={hover ? { scale: 1.02 } : {}}
        whileTap={onClick ? { scale: 0.98 } : {}}
        className={`${baseStyles} ${glassStyles} ${hoverStyles} ${className}`}
        onClick={onClick}
      >
        {children}
      </motion.div>
    )
  }
  
  return (
    <div className={`${baseStyles} ${glassStyles} ${hoverStyles} ${className}`}>
      {children}
    </div>
  )
}
