import Container from './Container'
export default function Footer(){
  return (
    <footer className="border-t border-line py-8 text-center text-xs text-muted">
      <Container className="flex flex-col md:flex-row items-center justify-between gap-3">
        <p>© 2025 Lead.Store — все права защищены.</p>
        <nav className="flex gap-4">
          <a href="#" className="hover:text-white">Политика</a>
          <a href="#" className="hover:text-white">Пользовательское соглашение</a>
          <a href="/security" className="hover:text-white">Безопасность</a>
        </nav>
      </Container>
    </footer>
  )
}
