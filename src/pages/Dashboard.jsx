import React from 'react'
import { useScholarData } from '../hooks/useFetchMock'
import StatCard from '../components/StatCard'
import Timeline from '../components/Timeline'
import ProgressChart from '../components/ProgressChart'
import ActivitiesWidget from '../components/ActivitiesWidget'
import NotificationsList from '../components/NotificationsList'
import PublicationsSummary from '../components/PublicationsSummary'
import LoadingSkeleton from '../components/LoadingSkeleton'

export default function Dashboard(){
  const { scholar, progress, activities, publications, notifications, loading } = useScholarData()

  const milestones = [
    { key: 'admission', title: 'Admission', status: 'done' },
    { key: 'first-dac', title: 'First DAC', status: 'done' },
    { key: 'course-work', title: 'Course Work', status: 'done' },
    { key: 'comp-viva', title: 'Comprehensive Viva', status: 'current' },
    { key: 'colloquium', title: 'Colloquium', status: 'upcoming' },
    { key: 'inch', title: 'Inch Committee', status: 'upcoming' },
    { key: 'synopsis', title: 'Synopsis', status: 'upcoming' },
    { key: 'thesis-eval', title: 'Thesis Evaluation', status: 'upcoming' },
    { key: 'defense', title: 'Thesis Defense', status: 'upcoming' },
    { key: 'degree', title: 'Degree Award', status: 'upcoming' },
  ]

  return (
    <div className="space-y-6">
      <section>
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <LoadingSkeleton className="h-20" />
            <LoadingSkeleton className="h-20" />
            <LoadingSkeleton className="h-20" />
          </div>
        ) : (
          <div className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-between">
            <div>
              <div className="text-xl font-semibold">Welcome, {scholar.name}</div>
              <div className="text-sm text-slate-500">{scholar.department} • Guide: {scholar.guide}</div>
            </div>
            <div className="text-right">
              <div className="text-sm text-slate-500">Reg No</div>
              <div className="font-medium">{scholar.regNo}</div>
            </div>
          </div>
        )}
      </section>

      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard title="Coursework Completion" value={"100%"} />
          <StatCard title="Publications" value={(publications && publications.journal) || 0} />
          <StatCard title="Research Progress" value={progress.length ? `${progress[progress.length-1].progress}%` : '0%'} />
          <StatCard title="Thesis Status" value={"Draft"} />
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 space-y-4">
          <ProgressChart data={progress} />
          <Timeline milestones={milestones} />
        </div>
        <div className="space-y-4">
          <ActivitiesWidget items={activities} />
          <NotificationsList items={notifications} />
          <PublicationsSummary data={publications} />
        </div>
      </section>
    </div>
  )
}
