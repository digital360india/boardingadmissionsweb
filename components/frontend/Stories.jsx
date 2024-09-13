"use client"

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const team = [
  {
    story: "Boarding Admissions transformed my preparation journey. The personalized courses and expert guidance were invaluable. I couldn't have achieved my results without them!",
    imageSrc: "/images/arya.jpg.svg",
    name: "Vasundhra",
    school: "Welham Girls School"
  },
  {
    story: "The mock tests and interactive classes at Boarding Admissions were game-changers. They helped me build confidence and ace my entrance exams. Highly recommend!",
    imageSrc: "/images/arya.jpg.svg",
    name: "Ishana",
    school: "Lawrence School"
  },
  {
    story: "The comprehensive learning resources and flexible scheduling at Boarding Admissions made my preparation seamless. The support and feedback from teachers were outstanding.",
    imageSrc: "/images/arya.jpg.svg",
    name: "Madhavani",
    school: "Mayo Girls' College"
  },
  {
    story: "Boarding Admissions' focus on soft skills and leadership set them apart. I feel prepared not just academically but also personally for boarding school life.",
    imageSrc: "/images/arya.jpg.svg",
    name: "Amishi",
    school: "Welham Girls' School"
  },
  {
    story: "The tailored preparation plans and expert mentorship at Boarding Admissions helped me excel. The continuous feedback and practice sessions were key to my success.",
    imageSrc: "/images/arya.jpg.svg",
    name: "Aratrika",
    school: "Scindia Kanya Vidyalaya"
  },
  {
    story: "Boarding Admissions provided the perfect balance of rigorous academics and personal growth. Their customized courses and interactive sessions made all the difference in my preparation.",
    imageSrc: "/images/arya.jpg.svg",
    name: "Nishka",
    school: "Ecole Globale"
  },
]

export default function Stories() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [cardsToShow, setCardsToShow] = useState(1)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) { // lg and above
        setCardsToShow(3)
      } else { // below lg
        setCardsToShow(1)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? team.length - cardsToShow : prevIndex - 1
    )
  }

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === team.length - cardsToShow ? 0 : prevIndex + 1
    )
  }

  return (
    <div>
  <div className=" xl:px-[100px] md::px-[40px] px-[28px] pt-[3%] bg-[#FAF9FF]">
        <p className="text-32px font-semibold">Stories that inspire</p>
      </div>
    <div className=" mx-auto px-4 sm:px-6 lg:px-[100px] py-12 relative overflow-hidden bg-[#FAF9FF]">
     
      <div className="overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)` }}
        >
          {team.map((member, index) => (
            <div 
              key={index} 
              className={`flex-shrink-0 w-full ${cardsToShow === 1 ? 'sm:w-full' : 'lg:w-1/3'} px-4`}
            >
              <div className="bg-[#FFFF] rounded-lg shadow-lg p-6 h-full flex flex-col justify-between">
                <p className="text-gray-700 my-4">{member.story}</p>
                <div className="flex items-center">
                  <img 
                    src={member.imageSrc}
                    alt={member.name} 
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <p className="font-semibold">{member.name}</p>
                    <p className="text-sm text-gray-600">{member.school}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-8">
        {[...Array(team.length - (cardsToShow - 1))].map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`mx-1 w-8 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-black w-12' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))} 
        <div className='lg:block hidden'>

{/* Buttons positioned at the sides */}
<button 
  onClick={prevSlide} 
  className="absolute top-1/2 left-16 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md "
  style={{ marginLeft: '-16px' }}  // Make sure buttons stay within the viewport
>
  <ChevronLeft className="w-6 h-6 text-gray-600" />
</button>
<button 
  onClick={nextSlide} 
  className="absolute top-1/2 right-16 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md "
  style={{ marginRight: '-16px' }}  // Make sure buttons stay within the viewport
>
  <ChevronRight className="w-6 h-6 text-gray-600" />
</button>
</div>
      </div>


    </div>
    </div>
  )
}
