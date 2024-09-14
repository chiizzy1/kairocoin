import React from 'react'
import { RoadmapPhase } from '@/constants'
const RoadMap: React.FC = () => {
  return (
    <section className='pt-[40px] pb-[114px] m-[18px] w-[1500px] -ml-2 z-[1] bg-RoadBg rounded-[6rem]'>
      <div className="container mx-auto w-full relative">
        <div className="text-center">
            <span className="font-bold text-[40px] text-black">ROAD MAP</span>
        </div>

        <div className="grid grid-cols-3 gap-10 text-center w-[790px] h-[328px] ml-[13rem] mt-20">
          {RoadmapPhase.map(({id, header, span, span2}) => (
            <div key={id} className="">
                 <div className="w-[240px] h-[260px] mt-20 bg-black rounded-xl">
                   <div className=''>

                      <div className='bg-white w-[136.9px] h-[50px] ml-14 absolute z-10 -mt-6'>
                        <h3 className='text-black p-3 font-semibold text-[]'>{header}</h3>
                      </div>
                     
                      <div className="flex justify-between ml-4">
                        <div className='-mt-10'>
                          <span className='text-white text-6xl'>.</span>
                        </div>
                        <div className='-mt-10 mr-4'>
                          <span className='text-white text-6xl'>.</span>
                        </div>
                      </div>


                      <div className='border-dashed border-white border-b-2 border-r-2 border-l-2 w-[200px] h-[220px] ml-5'>
                        <ul className='p-[10px] grid grid-cols-1 gap-[16px] w-[188px] h-[60px] text-left list-disc ml-4'>
                          <li className="text-white text-[12.5px] mt-3">  {span} </li>
                          <li className="text-white text-[12.5px]">  {span2} </li>
                        </ul>
                      </div>
                   </div>
                 </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default RoadMap
