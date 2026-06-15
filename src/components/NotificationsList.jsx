import React from 'react'

export default function NotificationsList({items=[]}){
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <h3 className="font-semibold mb-3">Recent Notifications</h3>
      <ul className="space-y-2">
        {items.length === 0 && <div className="text-sm text-slate-500">No notifications</div>}
        {items.map(n => (
          <li key={n.id} className="border-l-4 border-dsu-maroon/10 pl-3">
            <div className="font-medium">{n.title}</div>
            <div className="text-sm text-slate-500">{n.body}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}
