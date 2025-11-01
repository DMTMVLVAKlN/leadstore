import './globals.css'
import '../styles/theme.css'
import { ReactNode } from 'react'
export const metadata = { title: 'Lead.Store — Идентификация «тёплого» спроса', description: 'Платите только за результат' }
export default function RootLayout({ children }: { children: ReactNode }){
  return (
    <html lang="ru">
      <head>
        {/* GA4 — замените G-XXXXXXX на свой */}
        <script dangerouslySetInnerHTML={{__html:`
          window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-XXXXXXX');
        `}} />
      </head>
      <body className="selection:bg-brand/20">{children}</body>
    </html>
  )
}
