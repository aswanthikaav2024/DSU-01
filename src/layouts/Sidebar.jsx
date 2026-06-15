import React from 'react'
import { NavLink } from 'react-router-dom'
import { Archive, Home, User, FileText, Calendar, Bell, Settings as Cog } from 'lucide-react'
import logo from '../assets/dsu-logo.png'
const items = [
  { to: '/dashboard', label: 'Dashboard', icon: Home },
  { to: '/profile', label: 'My Profile', icon: User },
  { to: '/coursework', label: 'Course Work', icon: FileText },
  { to: '/dac', label: 'DAC Meetings', icon: Calendar },
  { to: '/progress-reports', label: 'Progress Reports', icon: Archive },
  { to: '/publications', label: 'Publications', icon: FileText },
  { to: '/colloquium', label: 'Colloquium', icon: Calendar },
  { to: '/thesis-status', label: 'Thesis Status', icon: Archive },
  { to: '/documents', label: 'Documents Repository', icon: Archive },
  { to: '/notifications', label: 'Notifications', icon: Bell },
  { to: '/settings', label: 'Settings', icon: Cog },
]

export default function Sidebar() {
  return (
    <aside className="w-72 bg-white border-r min-h-screen hidden md:block">

      <div className="px-6 py-1 border-b bg-gradient-to-r from-dsu-maroon to-red-900">
        <div className="flex flex-col items-center text-center pt-0 pb-2">
  <img
    src={logo}
    alt="DSU Logo"
    className="w-30 h-30 mb-1"
  />

  <h1 className="text-white font-bold text-sm leading-tight">
    DHANALAKSHMI
    <br />
    SRINIVASAN UNIVERSITY
  </h1>

  <p className="text-white text-xs mt-2">
    PhD Research Portal
  </p>
</div>
       
      </div> {/* <-- Missing closing div */}

      <nav className="px-4">
        <ul className="space-y-1">
          {items.map((i) => {
            const Icon = i.icon;

            return (
              <li key={i.to}>
                <NavLink
                  to={i.to}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-3 py-2 rounded-md text-slate-700 hover:bg-gray-50 ${
                      isActive ? "bg-dsu-maroon/5 font-medium" : ""
                    }`
                  }
                >
                  <Icon className="w-5 h-5 text-dsu-maroon" />
                  <span className="flex-1">{i.label}</span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>

    </aside>
  );
}