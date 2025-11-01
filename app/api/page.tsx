'use client';
import React from "react";
import Navbar from "@/components/Navbar";
import Container from '@/components/Container'
import Card from '@/components/Card'
export const metadata = { title: 'API — Lead.Store' }
export default function APIPage(){
  return (
    <main className="pt-24">
      <Container>
        <h1 className="text-3xl font-extrabold">API: примеры и песочница</h1>
        <p className="mt-3 text-muted">Подключение за 1 день. Ниже — код‑блоки для cURL, JS и Python.</p>
        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <Card className="p-4"><h3 className="font-semibold">cURL</h3><pre className="mt-3 text-xs whitespace-pre-wrap text-muted">curl -X POST https://api.lead.store/v1/leads \{"\n"} -H "Authorization: Bearer $TOKEN" \{"\n"} -H "Content-Type: application/json" \{"\n"} -d '{"{'}"email":"user@domain.com","source":"site"}'</pre></Card>
          <Card className="p-4"><h3 className="font-semibold">JavaScript (fetch)</h3><pre className="mt-3 text-xs whitespace-pre-wrap text-muted">await fetch('https://api.lead.store/v1/leads',{method:'POST',headers:{'Content-Type':'application/json','Authorization':`Bearer ${TOKEN}`},body:JSON.stringify({"{'"}email{'"}:'{'"}user@domain.com{'"},"{'"}source{'"}:'{'"}site{'"}'})})</pre></Card>
          <Card className="p-4 md:col-span-2"><h3 className="font-semibold">Python (requests)</h3><pre className="mt-3 text-xs whitespace-pre-wrap text-muted">import requests{"\n"}r=requests.post('https://api.lead.store/v1/leads',headers={'{'"}Authorization{'"}:f'Bearer {TOKEN}'},json={'{'"}email{'"}:'{'"}user@domain.com{'"},"{'"}source{'"}:'{'"}site{'"}'}){"\n"}print(r.status_code)</pre></Card>
        </div>
      </Container>
    </main>
  )
}
