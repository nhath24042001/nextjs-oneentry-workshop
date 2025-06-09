'use client'

import { useInView } from 'react-intersection-observer'
import { motion, Variants } from 'framer-motion'

interface Props {
    children: React.ReactNode
    variants?: Variants
    delay?: number
}

export default function Reveal({ children, variants, delay = 0 }: Props) {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            transition={{ duration: 0.6, delay }}
            variants={
                variants || {
                    hidden: { opacity: 0, y: 40 },
                    visible: { opacity: 1, y: 0 },
                }
            }
        >
            {children}
        </motion.div>
    )
}