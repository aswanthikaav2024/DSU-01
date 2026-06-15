import Dashboard from '../pages/Dashboard'
import Profile from '../pages/Profile'
import Coursework from '../pages/Coursework'
import DAC from '../pages/DAC'
import ProgressReports from '../pages/ProgressReports'
import Publications from '../pages/Publications'
import ThesisStatus from '../pages/ThesisStatus'
import Notifications from '../pages/Notifications'
import Documents from '../pages/Documents'
import Settings from '../pages/Settings'

const routes = [
  { path: 'dashboard', element: Dashboard },
  { path: 'profile', element: Profile },
  { path: 'coursework', element: Coursework },
  { path: 'dac', element: DAC },
  { path: 'progress-reports', element: ProgressReports },
  { path: 'publications', element: Publications },
  { path: 'thesis-status', element: ThesisStatus },
  { path: 'notifications', element: Notifications },
  { path: 'documents', element: Documents },
  { path: 'settings', element: Settings },
]

export default routes
