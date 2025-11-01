import { ButtonHTMLAttributes, PropsWithChildren } from 'react'
export function Button({ children, className='', ...rest }: PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>){
  return (<button {...rest} className={`relative inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 font-bold border transition active:translate-y-px ${className}`} />)
}
export function PrimaryButton(props: PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>){
  return (
    <Button {...props} className={`border-brand overflow-hidden ${props.className||''}`}>
      <span className="relative z-10">{props.children}</span>
      <span aria-hidden className="absolute inset-0 bg-gradient-to-r from-brand to-accent scale-x-0 origin-right hover:origin-left hover:scale-x-100 transition-transform duration-300"/>
    </Button>
  )
}
export function GhostButton(props: PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>){
  return <Button {...props} className={`border-line hover:bg-white/5 ${props.className||''}`}>{props.children}</Button>
}
