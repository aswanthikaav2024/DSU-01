import React from 'react'
import NotificationsList from '../components/NotificationsList'
import { useScholarData } from '../hooks/useFetchMock'

export default function Notifications(){
  const { notifications, loading } = useScholarData()
  if(loading) return <div className="p-4">Loading...</div>
  return (
    <div>
      <NotificationsList items={notifications} />
    </div>
  )
}
