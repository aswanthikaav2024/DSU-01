import React from 'react'
import LoadingSkeleton from '../components/LoadingSkeleton'
import EmptyState from '../components/EmptyState'

export default function Coursework(){
  const mandatory = [
    {code:'RM101', title:'Research Methodology', status:'Completed'},
    {code:'RPE102', title:'Research & Publication Ethics', status:'Completed'}
  ]
  const selfStudy = [
    {code:'NPTEL', title:'NPTEL', status:'Certificate Uploaded'},
    {code:'SWAYAM', title:'SWAYAM', status:'Pending'}
  ]

  return (
    <div className="space-y-4">
      <div className="bg-white p-4 rounded-lg shadow-sm">
        <h3 className="font-semibold mb-3">Mandatory Courses</h3>
        <ul className="space-y-2">
          {mandatory.map(m => (
            <li key={m.code} className="flex items-center justify-between">
              <div>
                <div className="font-medium">{m.title}</div>
                <div className="text-sm text-slate-500">{m.code}</div>
              </div>
              <div className="text-sm">{m.status}</div>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-sm">
        <h3 className="font-semibold mb-3">Self Study</h3>
        {selfStudy.length === 0 ? <EmptyState title="No self study" /> : (
          <ul className="space-y-2">
            {selfStudy.map(s => (
              <li key={s.code} className="flex items-center justify-between">
                <div>
                  <div className="font-medium">{s.title}</div>
                  <div className="text-sm text-slate-500">{s.code}</div>
                </div>
                <div className="text-sm">{s.status}</div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
