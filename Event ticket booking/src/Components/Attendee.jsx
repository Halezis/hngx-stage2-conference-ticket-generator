import { useState } from 'react'

export default function Attendee() {
  return (
    <>
      <section className="bg-[#08252] border border-[#0E464F] rounded-[2rem] md:rounded-[2.5rem] mx-[1.25rem] mb-[1rem] p-[1.5rem] md:p-[3rem] flex flex-col justify-center items-start  md:w-[37.8rem]">
        <div className="flex flex-col md:flex-row items-start md:items-center w-full justify-between">
          <div className="font-jeju text-[1.5rem] md:text-[2rem] font-normal text-[#FFFFFF]">
            Attendee Details
          </div>
          <div className="font-roboto text-[1rem] text-[#FAFAFA] mt-2 md:mt-0">
            Step 2/3
          </div>
        </div>
        <div className="bg-[#0E464F] flex h-[0.25rem]   items-center self-stretch rounded-[0.3125] mt-[1rem]">
          <div className="bg-[#24A0B5] rounded-[0.3125] self-stretch w-[67%]"></div>
        </div>

        <div className="flex md:p-[1.5rem] flex-col justify-center items-start gap-[2rem] mt-[2rem] md:border border-[#0E464F] rounded-[2rem] md:bg-[#08252B]">
          <div
            className="flex flex-col justify-between items-center self-stretch
                h-[15.1875rem] md:px-[1.5rem] px-[1rem] py-[1rem]
                border-r-[2px] border-b-[2px] border-l-[2px] border-[#07373F]
                bg-[radial-gradient(57.42%_106.59%_at_14.02%_32.06%,rgba(36,160,181,0.20)_0%,rgba(36,160,181,0.00)_100%),rgba(10,12,17,0.10)]
                backdrop-blur-[7px] rounded-[1.5rem] text-[#FAFAFA] text-center"
          >
            {/* profile photo */}
          </div>

          <div className="bg-[#0E464F] flex h-[0.25rem] items-center self-stretch rounded-[0.3125] mt-[1rem]"></div>

          <div className="w-full flex flex-col md:flex-row-reverse justify-center items-center md:items-start gap-[0.5rem] md:gap-[2rem] ">
            <button className="w-full px-[1.5rem] py-[0.75rem] bg-[#24A0B5] border-0 rounded-[0.5rem] md:rounded-[0.75rem] text-[#FFFFFF] hover:bg-[#1C7F8F] hover:shadow-lg transition-all duration-200">
              Get My Ticket
            </button>
            <button className="w-full px-[1.5rem] py-[0.75rem] bg-[#08252B] border border-[#0E464F] rounded-[0.5rem] md:rounded-[0.75rem] text-[#0E464F] hover:bg-[#0E464F] hover:text-[#FFFFFF] hover:border-[#08252B] transition-all duration-200">
             Back
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
