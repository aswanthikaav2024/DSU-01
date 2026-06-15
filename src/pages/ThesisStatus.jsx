import React from 'react'
import Stepper from '../components/Stepper'

export default function ThesisStatus(){
  const steps = [
    {key:'s1', title:'Draft Submitted', status:'done'},
    {key:'s2', title:'Format Verification', status:'done'},
    {key:'s3', title:'Plagiarism Check', status:'done'},
    {key:'s4', title:'Synopsis', status:'current'},
    {key:'s5', title:'Examiner Review', status:'upcoming'},
    {key:'s6', title:'Defense', status:'upcoming'},
    {key:'s7', title:'Final Approval', status:'upcoming'},
  ]
  return (
    <div>
      <Stepper steps={steps} />
    </div>
  )
}
