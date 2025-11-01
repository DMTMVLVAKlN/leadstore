import Container from '@/components/Container'
import Card from '@/components/Card'
export const metadata = { title: 'Безопасность — Lead.Store' }
export default function SecurityPage(){
  return (
    <main className="pt-24">
      <Container>
        <h1 className="text-3xl font-extrabold">Законность и безопасность данных</h1>
        <p className="mt-3 text-muted">GDPR/152‑ФЗ compliant. Прозрачные источники и аудит по запросу.</p>
        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <Card className="p-5"><h3 className="font-semibold">GDPR/152‑ФЗ</h3><p className="mt-2 text-sm text-muted">Обрабатываем данные по законным основаниям, учитываем согласия и цели. Документы: Privacy, DPA, DPIA.</p></Card>
          <Card className="p-5"><h3 className="font-semibold">Безопасность</h3><p className="mt-2 text-sm text-muted">Шифрование в покое и при передаче, сегментация доступов, журналы действий, принцип наименьших привилегий.</p></Card>
        </div>
      </Container>
    </main>
  )
}
