import React from 'react'
import { Bell, Calendar, User } from 'lucide-react'

export default function Topbar(){
  return (
    <header className="bg-white border-b">
      <div className="container flex items-center justify-between h-16">
        <div className="text-lg font-semibold text-dsu-maroon">Dashboard</div>
        <div className="flex items-center gap-4">
          <button aria-label="events" className="p-2 rounded-md hover:bg-gray-100"><Calendar className="w-5 h-5 text-slate-600"/></button>
          <button aria-label="notifications" className="p-2 rounded-md hover:bg-gray-100 relative">
            <Bell className="w-5 h-5 text-slate-600"/>
            <span className="absolute -top-0 -right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white bg-dsu-gold rounded-full">3</span>
          </button>
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">S</div>
            <div className="text-sm text-slate-700">Scholar</div>
          </div>
        </div>
      </div>
    </header>
  )
}
