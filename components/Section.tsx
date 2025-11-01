import { ReactNode } from 'react'
import Container from './Container'
export default function Section({ id, title, lead, left, right }: { id?: string; title: string; lead?: string; left?: ReactNode; right?: ReactNode }){
  return (
    <section id={id} className="py-[clamp(48px,8vh,80px)]">
      <Container>
        <div className="grid md:grid-cols-2 gap-6 items-start">
          <div>
            <h2 className="text-3xl font-extrabold">{title}</h2>
            {lead && <p className="mt-3 text-muted">{lead}</p>}
            {left}
          </div>
          <div>{right}</div>
        </div>
      </Container>
    </section>
  )
}
