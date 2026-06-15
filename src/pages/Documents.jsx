import React from 'react'
import { useScholarData } from '../hooks/useFetchMock'
import EmptyState from '../components/EmptyState'

export default function Documents(){
  const { documents, loading } = useScholarData()
  if(loading) return <div className="p-4">Loading...</div>
  return (
    <div>
      <h2 className="text-lg font-semibold mb-3">Documents Repository</h2>
      <div className="bg-white p-4 rounded-lg shadow-sm">
        {documents.length === 0 ? <EmptyState title="No documents" /> : (
          <ul className="space-y-2">
            {documents.map(d => (
              <li key={d.id} className="flex items-center justify-between">
                <div>
                  <div className="font-medium">{d.title}</div>
                  <div className="text-sm text-slate-500">Module: {d.module}</div>
                </div>
                <div><a href={d.url} className="text-dsu-maroon">Download</a></div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
