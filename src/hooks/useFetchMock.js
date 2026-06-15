import { useEffect, useState } from 'react'
import * as svc from '../services/mockService'

export function useScholarData(){
  const [scholar, setScholar] = useState(null)
  const [progress, setProgress] = useState([])
  const [activities, setActivities] = useState([])
  const [publications, setPublications] = useState({})
  const [notifications, setNotifications] = useState([])
  const [documents, setDocuments] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let mounted = true
    async function load(){
      setLoading(true)
      const [s,p,a,pu,n,d] = await Promise.all([
        svc.fetchScholar(),
        svc.fetchProgress(),
        svc.fetchActivities(),
        svc.fetchPublications(),
        svc.fetchNotifications(),
        svc.fetchDocuments(),
      ])
      if(!mounted) return
      setScholar(s)
      setProgress(p)
      setActivities(a)
      setPublications(pu)
      setNotifications(n)
      setDocuments(d)
      setLoading(false)
    }
    load()
    return () => { mounted = false }
  },[])

  return { scholar, progress, activities, publications, notifications, documents, loading }
}
