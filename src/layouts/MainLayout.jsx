import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Topbar from './Topbar'

export default function MainLayout(){
  return (
    <div className="min-h-screen flex bg-pagebg">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Topbar />
        <main className="p-6">
          <div className="container">
            <div id="page-content">
              <React.Suspense fallback={<div>Loading...</div>}>
                <Outlet />
              </React.Suspense>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
