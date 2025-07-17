import React from 'react'

const CardSkill = ({icon:Icon, title, tools}) => {
  return (
    <>
       {/* Card Skill */}
       <div className="rounded-xl bg-white p-3 shadow-2xl shadow-blue-300/50">
                           <Icon className="text-4xl text-blue-600"/>
                           <h6 className="font-bold text-xl my-3">{title}</h6>
                           <p>{tools}</p>
                       </div>
    </>
  )
}

export default CardSkill