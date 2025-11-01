'use client'
import Container from './Container'
import { PrimaryButton } from './Button'
export default function Navbar(){
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line/80 bg-bg/85 backdrop-blur">
      <Container className="h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 font-extrabold">Lead.Store</a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-muted">
          <a href="#how" className="hover:text-brand">Как работает</a>
          <a href="#for" className="hover:text-brand">Для кого</a>
          <a href="#integrations" className="hover:text-brand">Интеграции</a>
          <a href="#cases" className="hover:text-brand">Кейсы</a>
          <a href="/api" className="hover:text-brand">API</a>
          <a href="/security" className="hover:text-brand">Безопасность</a>
          <a href="#faq" className="hover:text-brand">FAQ</a>
        </nav>
        <a href="#signup" className="hidden md:inline-block"><PrimaryButton>Начать бесплатно</PrimaryButton></a>
      </Container>
    </header>
  )
}
