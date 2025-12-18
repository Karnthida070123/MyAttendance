import React, { useState } from 'react'
import Home from './pages/Home'
import Attendance from './pages/Attendance'
import Tasks from './pages/Tasks'
import Reports from './pages/Reports'

export default function App() {
  const [route, setRoute] = useState<'home' | 'attendance' | 'tasks' | 'reports'>('home')

  return (
    <div className="app-root">
      <header className="app-header">
        <div style={{display:'flex',alignItems:'center',gap:10}}>
          <div className="brand" role="button" onClick={() => setRoute('home')}>MyAttendance</div>
        </div>

        <nav className="top-nav">
          <button className={`nav-btn ${route === 'home' ? 'active' : ''}`} onClick={() => setRoute('home')}>หน้าแรก</button>
          <button className={`nav-btn ${route === 'attendance' ? 'active' : ''}`} onClick={() => setRoute('attendance')}>เข้า‑ออกงาน</button>
          <button className={`nav-btn ${route === 'tasks' ? 'active' : ''}`} onClick={() => setRoute('tasks')}>งาน</button>
          <button className={`nav-btn ${route === 'reports' ? 'active' : ''}`} onClick={() => setRoute('reports')}>รายงาน</button>
        </nav>
      </header>

      <main className="app-main">
        {route === 'home' && <Home />}
        {route === 'attendance' && <Attendance />}
        {route === 'tasks' && <Tasks />}
        {route === 'reports' && <Reports />}
      </main>
      <footer className="app-footer">© {new Date().getFullYear()} MyAttendance</footer>

      <StartupPopup visible={showStartup} onClose={() => setShowStartup(false)} onStart={() => { setShowStartup(false); setRoute('attendance') }} />
    </div>
  )
}
