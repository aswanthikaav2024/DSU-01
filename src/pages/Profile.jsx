import React from 'react'
import { useScholarData } from '../hooks/useFetchMock'
import LoadingSkeleton from '../components/LoadingSkeleton'

export default function Profile(){
  const { scholar, loading } = useScholarData()
  if(loading) return <LoadingSkeleton className="h-32" />
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="bg-white p-4 rounded-lg shadow-sm">
        <div className="text-xl font-semibold">{scholar.name}</div>
        <div className="text-sm text-slate-500">{scholar.department}</div>
        <div className="mt-3">
          <div><strong>Reg No:</strong> {scholar.regNo}</div>
          <div><strong>Guide:</strong> {scholar.guide}</div>
          <div><strong>Status:</strong> {scholar.status}</div>
        </div>
      </div>
      <div className="md:col-span-2 bg-white p-4 rounded-lg shadow-sm">
        <h3 className="font-semibold mb-3">Profile Details</h3>
        <p className="text-sm text-slate-600">Academic and contact details would appear here.</p>
      </div>
    </div>
  )
}
