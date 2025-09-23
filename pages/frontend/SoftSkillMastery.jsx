import SoftSkillMasteryHero from '@/components/frontend/SoftSkillMasteryHero'
import SoftSkillMasteryPage from '@/components/frontend/SoftSkillMasteryPage'
import React from 'react'

const SoftSkillMastery = () => {
     const packageId = "0qhKkbXUptCF6xCyBRVY"; 

  return (
    <>
        <SoftSkillMasteryHero  id={packageId} />
        <SoftSkillMasteryPage />
    </>
  )
}

export default SoftSkillMastery