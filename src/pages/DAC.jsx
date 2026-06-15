import React from 'react'
import EmptyState from '../components/EmptyState'

export default function DAC(){
  const meetings = [
    {id:'m1', title: 'DAC Q1', date: '2026-01-15'},
    {id:'m2', title: 'DAC Q2', date: '2026-04-20'}
  ]

  return (
    <div className="space-y-4">
      <div className="bg-white p-4 rounded-lg shadow-sm">
        <h3 className="font-semibold mb-3">Meeting Schedule</h3>
        <ul className="space-y-2">
          {meetings.map(m => (
            <li key={m.id} className="flex items-center justify-between">
              <div>
                <div className="font-medium">{m.title}</div>
                <div className="text-sm text-slate-500">{m.date}</div>
              </div>
              <div>
                <button className="text-sm text-dsu-maroon">Upload Presentation</button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-sm">
        <h3 className="font-semibold mb-3">Minutes of Meeting</h3>
        <EmptyState title="No minutes uploaded" description="No MoMs available for the selected period." />
      </div>
    </div>
  )
}
