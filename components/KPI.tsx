export default function KPI({ value, label }: { value: string; label: string }){
  return (
    <div className="text-center">
      <div className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-brand to-accent bg-clip-text text-transparent">{value}</div>
      <div className="text-[11px] text-muted mt-1">{label}</div>
    </div>
  )
}
