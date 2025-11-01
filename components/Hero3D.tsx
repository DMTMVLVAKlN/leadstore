'use client'
import { useEffect, useRef } from 'react'
import * as THREE from 'three'
export default function Hero3D(){
  const ref=useRef<HTMLDivElement>(null)
  useEffect(()=>{
    const el=ref.current; if(!el) return
    const scene=new THREE.Scene()
    const cam=new THREE.PerspectiveCamera(55, el.clientWidth/el.clientHeight, .1, 1000); cam.position.set(0,0,35)
    const renderer=new THREE.WebGLRenderer({alpha:true,antialias:true})
    renderer.setPixelRatio(Math.min(2, window.devicePixelRatio||1)); renderer.setSize(el.clientWidth, el.clientHeight); el.appendChild(renderer.domElement)
    const geo=new THREE.TorusGeometry(14,5,48,96)
    const wire=new THREE.WireframeGeometry(geo)
    const line=new THREE.LineSegments(wire,new THREE.LineBasicMaterial({color:0x4da3ff,transparent:true,opacity:.4})); scene.add(line)
    const l1=new THREE.PointLight(0x4da3ff,1.4,300); l1.position.set(20,15,25); scene.add(l1)
    const l2=new THREE.PointLight(0x10e7c1,1.2,300); l2.position.set(-25,-15,-10); scene.add(l2)
    const onResize=()=>{ const w=el.clientWidth,h=el.clientHeight; renderer.setSize(w,h); cam.aspect=w/h; cam.updateProjectionMatrix() }
    window.addEventListener('resize', onResize)
    let mx=0,my=0; el.addEventListener('pointermove',e=>{ const r=el.getBoundingClientRect(); mx=(e.clientX-r.left)/r.width-.5; my=(e.clientY-r.top)/r.height-.5 })
    let raf=0; const tick=()=>{ raf=requestAnimationFrame(tick); line.rotation.x+=.0015; line.rotation.y+=.002; cam.position.x+=(mx*8-cam.position.x)*.05; cam.position.y+=(-my*5-cam.position.y)*.05; cam.lookAt(0,0,0); renderer.render(scene,cam) }
    tick()
    return ()=>{ cancelAnimationFrame(raf); window.removeEventListener('resize', onResize); el.innerHTML='' }
  },[])
  return <div ref={ref} className="card h-[320px] md:h-[380px]" />
}
