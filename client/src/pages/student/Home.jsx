import React from 'react'
import Hero from '../../components/student/Hero.jsx'
import Companies from '../../components/student/Companies.jsx'
import CourseSection from '../../components/student/CourseSection.jsx'
import TestimonialsSection from '../../components/student/TestimonialsSection.jsx'
import CallToAction from '../../components/student/CallToAction.jsx'
import Footer from '../../components/student/Footer.jsx'

const Home = () => {
  return (
    <div className='flex flex-col items-center space-y-7 text-center'>
      <Hero></Hero>
      <Companies></Companies>
      <CourseSection></CourseSection>
      <TestimonialsSection></TestimonialsSection>
      <CallToAction></CallToAction>
      <Footer></Footer>
    </div>
  )
}

export default Home
