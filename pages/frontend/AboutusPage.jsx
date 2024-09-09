import AboutForm from '@/components/frontend/AboutForm'
import AboutHero from '@/components/frontend/AboutHero'
import AboutMakeUs from '@/components/frontend/AboutMakeUs'
import AboutMission from '@/components/frontend/AboutMission'
import AboutSuccess from '@/components/frontend/AboutSuccess'
import React from 'react'

export default function AboutusPage() {
  return (
    <div>
      <AboutHero/>
      <AboutMission/>
      <AboutMakeUs/>
      <AboutSuccess/>
      <AboutForm/>
    </div>
  )
}
