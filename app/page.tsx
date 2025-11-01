import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Container from '@/components/Container'
import Section from '@/components/Section'
import Card from '@/components/Card'
import KPI from '@/components/KPI'
import Hero3D from '@/components/Hero3D'
import { PrimaryButton, GhostButton } from '@/components/Button'

export default function Home(){
  return (
    <main id="top">
      <Navbar />
      <section aria-labelledby="hero-title" className="pt-24">
        <Container>
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h1 id="hero-title" className="text-4xl md:text-5xl font-extrabold">Превращайте посетителей в клиентов — <span className="grad">даже без заявки</span></h1>
              <p className="mt-4 text-muted max-w-xl">Lead.Store находит контакты тех, кто уже ищет ваш продукт. <b className="text-white">Платите только за результат.</b></p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#signup"><PrimaryButton>Получить 10 идентификаций</PrimaryButton></a>
                <a href="#how"><GhostButton>Как это работает</GhostButton></a>
              </div>
              <div className="grid grid-cols-3 gap-4 mt-8">
                <KPI value="1 240" label="идентификаций сегодня" />
                <KPI value="87" label="активных клиентов" />
                <KPI value="345" label="₽ средний CPL" />
              </div>
            </div>
            <Hero3D />
          </div>
        </Container>
      </section>

      <Section id="logos" title="Нам доверяют компании из 12 отраслей" right={
        <div className="grid grid-cols-3 gap-4 items-center opacity-80">
          {['bankx','insurepro','realtyhub','legalone','educloud','retailiq'].map(n=> (
            <img key={n} src={`/logos/${n}.svg`} alt={n} className="mx-auto grayscale hover:grayscale-0 transition" />
          ))}
        </div>
      } />

      <Section id="problem" title="Вы теряете до 70% потенциальных клиентов?" lead="Они смотрят ваш сайт, звонят конкурентам — но не оставляют заявку. Мы знаем, кто они, и передаём контакты в вашу CRM."
        right={
          <div className="grid grid-cols-2 gap-4">
            {[['58% ↓ CPL','за счёт идентификации посетителей ключевых страниц'], ['+27% лидов','возврат «потерянных» пользователей'], ['3–4 сделки/100','в юридических услугах'], ['ROI 3.4×','в e‑commerce через автодожим']].map(([t,s])=> (
              <Card key={t} className="p-4"><h3 className="font-semibold">{t}</h3><p className="mt-1 text-sm text-muted">{s}</p></Card>
            ))}
          </div>
        }
      />

      <Section id="how" title="Как это работает — 4 шага" lead="Запуск за 48 часов: пиксель и 1–2 источника. Полная совместимость с GDPR/152‑ФЗ."
        right={
          <div className="grid grid-cols-2 gap-4">
            {['1) Источники|Пиксель на сайт|Площадки/каталоги|Телефония','2) Идентификация|Поведение × базы|Проверка согласий|Метки канала','3) CRM|ЛК и CSV|amoCRM/Bitrix24|API','4) Автодожим|Триггеры 30–90с|Скрипты/сценарии|UTM в карточке'].map(x=>{
              const [h,...items]=x.split('|')
              return <Card key={h} className="p-4"><h3 className="font-semibold">{h}</h3><ul className="mt-2 text-sm text-muted">{items.map(i=><li key={i}>• {i}</li>)}</ul></Card>
            })}
          </div>
        }
      />

      <Section id="for" title="Для кого" lead="Маркетинг/перформанс, продажи/CRM, собственники SMB."
        right={
          <div className="grid grid-cols-2 gap-4">
            {['Финансовые сервисы|−58% CPL','Недвижимость|+27% лидов','Юр. услуги|3–4 сделки/100 лидов','E‑commerce|ROI 3.4×'].map(x=>{ const [h,s]=x.split('|'); return <Card key={h} className="p-4"><h3 className="font-semibold">{h}</h3><p className="mt-2 text-sm">{s}</p></Card> })}
          </div>
        }
      />

      <Section id="cases" title="Кейсы" lead="2–3 карточки. Скриншоты заменим позже."
        right={
          <div className="grid grid-cols-2 gap-4">
            <Card className="p-5"><h3 className="font-semibold">Банк X — кредитные карты</h3><p className="mt-2 text-sm text-muted">−58% CPL, +14% к одобрениям, 1.7× в звонок</p><img src="/logos/bankx.svg" alt="скрин" className="mt-3 h-24 opacity-50"/></Card>
            <Card className="p-5"><h3 className="font-semibold">Девелопер — новостройки</h3><p className="mt-2 text-sm text-muted">+27% лидов, 3.4× ROMI, интеграция за 2 дня</p><img src="/logos/realtyhub.svg" alt="скрин" className="mt-3 h-24 opacity-50"/></Card>
          </div>
        }
      />

      <Section id="integrations" title="Интеграции за 1 день" lead="Готовые коннекторы: amoCRM, Bitrix24, Power BI, Google Sheets. Плюс CSV и открытое API."
        right={
          <div className="grid grid-cols-2 gap-4">
            <Card className="p-5"><h3 className="font-semibold">Готовые коннекторы</h3><div className="mt-3 flex flex-wrap gap-2 text-xs"><span className="px-2 py-1 border border-line rounded">amoCRM</span><span className="px-2 py-1 border border-line rounded">Bitrix24</span><span className="px-2 py-1 border border-line rounded">Power BI</span><span className="px-2 py-1 border border-line rounded">Google Sheets</span></div></Card>
            <Card className="p-5"><h3 className="font-semibold">API для разработчиков</h3><pre className="mt-3 text-xs whitespace-pre-wrap text-muted">POST /v1/leads{"\n"}Authorization: Bearer &lt;token&gt;{"\n"}{ "{ \"email\": \"user@domain.com\", \"source\": \"site\" }" }</pre></Card>
          </div>
        }
      />

      <Section id="roi" title="ROI‑калькулятор" right={<div className="mt-2">{/* @ts-expect-error Async Server Component interop */}<div><(await import('@/components/ROIForm')).default /></div></div>} />

      <Section id="security" title="Законность и безопасность данных" lead="GDPR/152‑ФЗ compliant. Прозрачные источники и аудит по запросу."
        right={<div className="grid grid-cols-2 gap-4"><Card className="p-5"><h3 className="font-semibold">GDPR/152‑ФЗ</h3><p className="mt-2 text-sm text-muted">Документы: Privacy, DPA, DPIA.</p></Card><Card className="p-5"><h3 className="font-semibold">Безопасность</h3><p className="mt-2 text-sm text-muted">Шифрование, сегментация доступов, журналы действий.</p></Card></div>}
      />

      <Section id="cta" title="Готовы получать контакты «тёплых» клиентов?" right={<Card className="p-6 text-center"><a href="#signup"><PrimaryButton>Получить 10 идентификаций</PrimaryButton></a></Card>} />

      <Section id="signup" title="Запустим пилот за 48 часов" lead="Подключим пиксель и 1–2 источника, настроим отчёты и интеграции."
        right={<Card className="p-5"><h3 className="font-semibold">Что входит в пилот</h3><ul className="mt-3 space-y-2 text-sm text-muted"><li>• Подключение пикселя и 1–2 источников</li><li>• Базовые отчёты и воронка</li><li>• Интеграция с CRM</li><li>• 10 бесплатных идентификаций</li></ul></Card>}
      />

      <Footer />
    </main>
  )
}
