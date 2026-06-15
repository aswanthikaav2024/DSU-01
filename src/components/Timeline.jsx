import React from 'react'

export default function Timeline({milestones=[]}){
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <h3 className="font-semibold mb-3">PhD Journey</h3>
      <ol className="space-y-4">
        {milestones.map((m, idx) => (
          <li key={m.key} className="flex items-start gap-3">
            <div className={`w-3 h-3 rounded-full mt-1 ${m.status === 'done' ? 'bg-dsu-maroon' : m.status === 'current' ? 'bg-dsu-gold' : 'bg-gray-300'}`}></div>
            <div>
              <div className="font-medium">{m.title}</div>
              <div className="text-sm text-slate-500">{m.date || m.note}</div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}
