'use client'
import Card from './Card'
import { PrimaryButton, GhostButton } from './Button'
import { useEffect, useState } from 'react'
const fmt = (n:number)=>n.toLocaleString('ru-RU')
export default function ROIForm(){
  const [traffic,setTraffic]=useState(50000)
  const [cr,setCr]=useState(2.0)
  const [cpl,setCpl]=useState(2500)
  const [idr,setIdr]=useState(3.5)
  const [out,setOut]=useState({leads:'–', saved:'–', romi:'–', cost:'–'})
  function calc(){
    const leadsWarm=Math.round(traffic*(idr/100))
    const saved=leadsWarm*cpl
    const romi = saved>0 ? saved/Math.max(1,leadsWarm*50) : 0 // 50₽/идентификацию — плейсхолдер
    setOut({leads:fmt(leadsWarm), saved:fmt(saved), romi:romi.toFixed(1)+'×', cost:'≈ 50'})
    // @ts-ignore
    window.gtag && window.gtag('event','roi_calculated',{ traffic, cr, cpl, idr })
  }
  useEffect(calc,[])
  return (
    <Card className="p-5">
      <form className="grid grid-cols-2 gap-4" onSubmit={e=>e.preventDefault()}>
        <label className="col-span-2 md:col-span-1 text-sm">Ежемесячный трафик
          <input value={traffic} onChange={e=>setTraffic(+e.target.value)} type="number" min={0} className="mt-1 w-full bg-transparent border border-line rounded px-3 py-2 focus:outline-none focus:border-brand" />
        </label>
        <label className="col-span-2 md:col-span-1 text-sm">Конверсия сайта, %
          <input value={cr} onChange={e=>setCr(+e.target.value)} type="number" min={0} max={100} step={0.1} className="mt-1 w-full bg-transparent border border-line rounded px-3 py-2 focus:outline-none focus:border-brand" />
        </label>
        <label className="col-span-2 md:col-span-1 text-sm">Средний CPL, ₽
          <input value={cpl} onChange={e=>setCpl(+e.target.value)} type="number" min={0} className="mt-1 w-full bg-transparent border border-line rounded px-3 py-2 focus:outline-none focus:border-brand" />
        </label>
        <label className="col-span-2 md:col-span-1 text-sm">Идентификация тёплых, % трафика
          <input value={idr} onChange={e=>setIdr(+e.target.value)} type="number" min={0} max={100} step={0.1} className="mt-1 w-full bg-transparent border border-line rounded px-3 py-2 focus:outline-none focus:border-brand" />
        </label>
        <div className="col-span-2 flex gap-3">
          <PrimaryButton onClick={calc}>Рассчитать</PrimaryButton>
          <GhostButton onClick={()=>{ setTraffic(50000); setCr(2); setCpl(2500); setIdr(3.5); setOut({leads:'–',saved:'–',romi:'–',cost:'–'}) }}>Сбросить</GhostButton>
        </div>
        <div className="col-span-2 grid grid-cols-2 gap-4 mt-2">
          <Card className="p-4"><h4 className="text-xs text-muted">Доп. лидов/мес</h4><div className="text-2xl font-extrabold bg-gradient-to-r from-brand to-accent bg-clip-text text-transparent">{out.leads}</div></Card>
          <Card className="p-4"><h4 className="text-xs text-muted">Экономия бюджета, ₽</h4><div className="text-2xl font-extrabold bg-gradient-to-r from-brand to-accent bg-clip-text text-transparent">{out.saved}</div></Card>
          <Card className="p-4"><h4 className="text-xs text-muted">Оценка ROMI</h4><div className="text-2xl font-extrabold bg-gradient-to-r from-brand to-accent bg-clip-text text-transparent">{out.romi}</div></Card>
          <Card className="p-4"><h4 className="text-xs text-muted">Окуп. идентификации, ₽</h4><div className="text-2xl font-extrabold bg-gradient-to-r from-brand to-accent bg-clip-text text-transparent">{out.cost}</div></Card>
        </div>
      </form>
    </Card>
  )
}
