
import FinancialHero from '@/components/home/Hero'
import HeroSection from '@/components/home/HeroSection'
import TrustedBrands from '@/components/home/InputCTA'
import WealthManagementSection from '@/components/home/LineCard'
import TeamServicesSection from '@/components/home/TeamServicesSection'
import TestimonialsSection from '@/components/home/Testimonials'
import ServicesSection from '@/components/SectionSection'
import React from 'react'

const Home = () => {
  return (
    <div>
    
    <FinancialHero/>
    <TrustedBrands/>
    <WealthManagementSection/>
    <ServicesSection/>
    <TestimonialsSection/>
    <TeamServicesSection/>
    <HeroSection/>
    </div>
  )
}

export default Home