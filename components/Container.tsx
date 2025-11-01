import { ReactNode } from 'react'
export default function Container({ children, className='' }: { children: ReactNode, className?: string }){ return <div className={`w-full max-w-[1200px] mx-auto px-[clamp(1rem,4vw,2rem)] ${className}`}>{children}</div> }
