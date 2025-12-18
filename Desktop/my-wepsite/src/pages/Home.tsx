import React from 'react'

type Props = {
  onStart?: () => void
}

export default function Home({ onStart }: Props) {
  return (
    <div className="home-page">
      <h1 className="home-title">Attendance Prototype</h1>
      <div style={{height:10}} />
      <div style={{display:'flex',justifyContent:'center'}}>
        <button className="btn primary large home-start" onClick={() => onStart?.()}>เริ่มการทำงาน</button>
      </div>
      <p className="home-sub">จัดการเข้า‑ออกงานและรายงานอย่างง่ายดาย</p>
    </div>
  )
}
