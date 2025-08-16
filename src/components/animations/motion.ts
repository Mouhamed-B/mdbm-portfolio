import { Variants } from 'framer-motion'

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i:number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22,0.68,0,1], delay: i * 0.08 }
  })
}

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15
    }
  }
}

export const scaleOnHover: Variants = {
  rest: { scale: 1, boxShadow: '0 2px 8px rgba(0,0,0,0.06)' },
  hover: { scale: 1.03, transition: { type: 'spring', stiffness: 250, damping: 18 } }
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } }
}
