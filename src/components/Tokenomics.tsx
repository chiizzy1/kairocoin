import React from 'react'
import { Token } from '@/constants'

const Tokenomics: React.FC = () => {
  return (
    <section className='pt-[40px] pb-[114px] z-[1]'>
      <div className="container mx-auto w-full relative">
         <div className="text-center">
            <h3 className="font-bold text-[40px] text-black">
               TOKENOMICS
            </h3>
         </div>
         

         <main className="w-[760px] h-[424px] ml-[20rem] text-center p-[5rem] space-y-5 ">
            {Token.map(({ id, span, percent}) => (
                <div key={id} className="">
                  <div className="flex space-x-[25rem]">
                    <div className="">
                      <div className="">
                        <span className="">{percent}</span>
                      </div>
                    </div>

                      <div>
                          <div className='text-left'>
                            <span className="font-medium text-sm">{span}</span>
                          </div>
                          <div className='text-left ml-24 -mt-6'>
                            <span className="font-bold text-lg">{percent}</span>
                          </div>
                      </div>
                  </div>
     
                </div>
            ))}
        </main>


         <div className="grid grid-cols-3 gap-[20rem] text-center w-[500px]  ml-52 -mt-20">
           <div className="w-[200px]  h-[110px] bg-BlueBg p-8 text-left">
              <h5 className="text-[14px] font-bold">TOKEN SUPPLY</h5>
              <span className="text-[15px]">1,000,000,000</span>
           </div>
           <div className="w-[200px]  h-[110px] bg-RoadBg p-8 text-left">
              <h5 className="text-[14px] font-bold">TOKEN SYMBOL</h5>
              <span className="text-[15px]">$KAIRO</span>
           </div>
           <div className="w-[200px]  h-[110px] bg-BuyBg p-5 text-left">
              <h5 className="text-[14px] font-bold">TOKEN ADDRESS</h5>
              <span className="text-[11px]">0x7B8C1d3FCA7Ff19F841 D3C1D12B2ABAB1E4aF7B2</span>
           </div>
         </div>

      </div>
    </section>
  )
}

export default Tokenomics


{/* <main className="w-[760px] h-[424px] ml-[20rem] text-center p-[5rem] space-y-5 ">
{Token.map(({ id, span, span2}) => (
   <div key={id} className="">
     <div className="flex space-x-[25rem]">
       <div className="">
         <div className="">
           <span className="">{span2}</span>
         </div>
       </div>

          <p className="">
             <div className='text-left'>
               <span className="font-medium text-sm">{span}</span>
             </div>
             <div className='text-left ml-24 -mt-6'>
               <span className="font-bold text-lg">{span2}</span>
             </div>
          </p>
     </div>
     
   </div>
))}
</main>  */}