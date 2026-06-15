import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import routes from './routes'

export default function App(){
  return (
    <Routes>
      <Route path="/" element={<MainLayout/>}>
        {routes.map(r => {
          const C = r.element
          return <Route key={r.path} path={r.path} element={<C/>} />
        })}
        <Route index element={<Navigate to="/dashboard" replace />} />
      </Route>
      <Route path="*" element={<div className="p-8">Page Not Found</div>} />
    </Routes>
  )
}
