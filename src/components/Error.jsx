import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div style={{textAlign: "center"}}>
      <h1 style={{color:"yellow"}}>404 Hatası! ⚠️</h1>
      <p>Girmeye çalıştığın sayfa bulunamadı.</p>
      <Link to="/">Anasayfaya Dönmek İçin Buraya Tıkla</Link>
    </div>
  )
}

export default Error