import React from 'react'

type Props = {
  onStart?: () => void
}

export default function Home({ onStart }: Props) {
  return (
    <div className="home-page">
      <div className="home-title-row">
        <h1 className="home-title">MyAttendance</h1>
        <button className="btn primary large home-start" onClick={() => onStart?.()}>เริ่มการทำงาน</button>
      </div>
      <p className="home-sub">จัดการเข้า‑ออกงานและรายงานอย่างง่ายดาย</p>
    </div>
  )
}
