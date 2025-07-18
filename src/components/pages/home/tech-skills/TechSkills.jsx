import React from 'react'
import { BsFillHddStackFill } from 'react-icons/bs'
import { FaCode, FaPaintBrush } from 'react-icons/fa'
import CardSkill from '../../../partials/CardSkill'

const TechSkills = () => {
  return (
    <>
      {/*Skills  */}
      <section className="bg-black py-20">
        <div className="container mx-auto px-4 py-3">
            <h3 className='text-center lg:text-start text-white font-bold text-4xl mb-10'>Technical Skills</h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 px-16">
                
                <CardSkill icon={FaCode} title={"Frontend Development"} tools={"React, TailwindCss, HTML, CSS, JavaScript"}/>

                <CardSkill icon={BsFillHddStackFill} title={"Backend Development"} tools={"Php, Java, Python, C++, MySQL"}/>

                <CardSkill icon={FaPaintBrush} title={"UI/UX Design"} tools={"Figma, FlutterFlow, WordPress, Canva, Prototyping"}/>

            </div>
        </div>
      </section>
    </>
  )
}

export default TechSkills