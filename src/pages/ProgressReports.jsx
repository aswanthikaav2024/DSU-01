import React from 'react'
import ProgressChart from '../components/ProgressChart'

export default function ProgressReports(){
  const monthly = []
  return (
    <div className="space-y-4">
      <div className="bg-white p-4 rounded-lg shadow-sm">
        <h3 className="font-semibold mb-3">Reports</h3>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div>Monthly Reports</div>
            <div><button className="text-sm text-dsu-maroon">Upload Report</button></div>
          </div>
          <div className="text-sm text-slate-500">No recent monthly reports</div>
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-sm">
        <h3 className="font-semibold mb-3">Progress Graph</h3>
        <ProgressChart data={[]} />
      </div>
    </div>
  )
}
