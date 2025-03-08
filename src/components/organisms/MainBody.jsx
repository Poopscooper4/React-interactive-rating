import React from 'react'
import CardModul from '../moleculs/CardModul'

const MainBody = ({setActive, active , setCount}) => {
  return (
    <section className="w-[100%] h-[100vh] bg-[#131518] flex flex-col items-center justify-center">
        <CardModul active={active} setCount={setCount}  setActive={setActive}/>
          </section>
  )
}

export default MainBody