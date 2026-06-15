import React, { useState } from 'react'
import EmptyState from '../components/EmptyState'
import PublicationsSummary from '../components/PublicationsSummary'
import PublicationForm from '../components/PublicationForm'

export default function Publications(){
  const [showForm, setShowForm] = useState(false)
  const data = { journal:2, conference:3, patents:0, chapters:1 }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Publications</h2>
        <div>
          <button onClick={() => setShowForm(s => !s)} className="px-3 py-1 rounded bg-dsu-maroon text-white">Add Publication</button>
        </div>
      </div>

      {showForm && <PublicationForm onClose={() => setShowForm(false)} />}

      <PublicationsSummary data={data} />

      <div className="bg-white p-4 rounded-lg shadow-sm">
        <h3 className="font-semibold mb-3">Publication Table</h3>
        <EmptyState title="No publications" description="Add publications using the button above." />
      </div>
    </div>
  )
}
