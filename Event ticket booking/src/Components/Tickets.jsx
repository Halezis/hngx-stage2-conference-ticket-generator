import { useState } from 'react'

export default function Tickets({ onNext }) {
  const [selectedOption, setSelectedOption] = useState('free')
  const [numberOfTickets, setNumberOfTickets] = useState(1)

  const handleNext = () => {
    onNext({ selectedOption, numberOfTickets })
  }

  const handleCancel = () => {
    setSelectedOption('free')
    setNumberOfTickets(1)
  }

  return (
    <>
      <section className="bg-[#08252] border border-[#0E464F] rounded-[2rem] md:rounded-[2.5rem] mx-[1.25rem] mb-[1rem] p-[1.5rem] md:p-[3rem] flex flex-col justify-center items-start  md:w-[37.8rem]">
        <div className="flex flex-col md:flex-row items-start md:items-center w-full justify-between">
          <div className="font-jeju text-[1.5rem] md:text-[2rem] font-normal text-[#FFFFFF]">
            Ticket Selection
          </div>
          <div className="font-roboto text-[1rem] text-[#FAFAFA] mt-2 md:mt-0">
            Step 1/3
          </div>
        </div>
        <div className="bg-[#0E464F] flex h-[0.25rem]   items-center self-stretch rounded-[0.3125] mt-[1rem]">
          <div className="bg-[#24A0B5] rounded-[0.3125] self-stretch w-[33.3%]"></div>
        </div>

        <div className="flex md:p-[1.5rem] flex-col justify-center items-start gap-[2rem] mt-[2rem] md:border border-[#0E464F] rounded-[2rem] md:bg-[#08252B]">
          <div
            className="flex flex-col justify-between items-center self-stretch
                h-[15.1875rem] md:px-[1.5rem] px-[1rem] py-[1rem]
                border-r-[2px] border-b-[2px] border-l-[2px] border-[#07373F]
                bg-[radial-gradient(57.42%_106.59%_at_14.02%_32.06%,rgba(36,160,181,0.20)_0%,rgba(36,160,181,0.00)_100%),rgba(10,12,17,0.10)]
                backdrop-blur-[7px] rounded-[1.5rem] text-[#FAFAFA] text-center"
          >
            <h1 className="font-roadrage text-[3rem] md:text-[3.875rem] leading-[3rem] md:leading-[3.875rem] px-0">
              Techember Fest ”25
            </h1>
            <h2 className="font-roboto text-[0.875rem] md:text-[1rem] leading-[1.3125rem] md:leading-[1.5rem] px-[1.6rem]">
              Join us for an unforgettable experience at [Event Name]! Secure
              your spot now.
            </h2>
            <div className="flex flex-col md:flex-row md:gap-[2rem] text-[#FAFAFA] font-roboto text-[0.875rem] md:text-[1rem] leading-[1.3125rem] md:leading-[1.5rem mt-[1rem]">
              <p className="">📍 [Event Location]</p>
              <p className="hidden md:flex">| |</p>
              <p className="">March 15, 2025 | 7:00 PM</p>
            </div>
          </div>

          <div className="bg-[#0E464F] flex h-[0.25rem] items-center self-stretch rounded-[0.3125] mt-[1rem]"></div>

          <div className="w-full text-[#FAFAFA] font-roboto text-[0.875rem] leading-[1.3125rem] md:leading-[1.5rem">
            <h3>Select Ticket Type</h3>
            <div className="flex flex-col md:flex-row p-[1rem] justify-center items-center gap-[1rem] self-stretch border rounded-[1.5rem] border-[#07373F] bg-[#052228] mt-[1rem]">
              {/* Option 1 */}
              <div
                className={`option flex flex-col items-start justify-center h-[6.875rem] w-full p-[0.3rem] gap-[0.75rem] border md:border-[2px] rounded-[0.75rem] border-[#197686] cursor-pointer hover:bg-[#2C545B] transition-all duration-200  ${
                  selectedOption === 'free' ? 'bg-[#12464E]' : ''
                }`}
                onClick={() => setSelectedOption('free')}
              >
                <div className="font-semibold">Free</div>
                <div className="uppercase">Regular Access</div>
                <div className="">20/52</div>
              </div>

              {/* Option 2 */}
              <div
                className={`option flex flex-col items-start justify-center h-[6.875rem] w-full p-[0.3rem] gap-[0.75rem] border md:border-[2px] rounded-[0.75rem] border-[#197686] cursor-pointer hover:bg-[#2C545B] transition-all duration-200  ${
                  selectedOption === '$150' ? 'bg-[#12464E]' : ''
                }`}
                onClick={() => setSelectedOption('$150')}
              >
                <div className="font-semibold">$150</div>
                <div className="uppercase">VIP Access</div>
                <div className="">20/52</div>
              </div>

              {/* Option 3 */}
              <div
                className={`option flex flex-col items-start justify-center h-[6.875rem] w-full p-[0.3rem] gap-[0.75rem] border md:border-[2px] rounded-[0.75rem] border-[#197686] cursor-pointer hover:bg-[#2C545B] transition-all duration-200  ${
                  selectedOption === '$300' ? 'bg-[#12464E]' : ''
                }`}
                onClick={() => setSelectedOption('$300')}
              >
                <div className="font-semibold">$300</div>
                <div className="uppercase">VVIP Access</div>
                <div className="">20/52</div>
              </div>
            </div>
          </div>

          <div className="w-full text-[#FAFAFA] font-roboto text-[0.875rem] leading-[1.3125rem] md:leading-[1.5rem">
            <label htmlFor="dropdown" className="">
              Number of Tickets
            </label>
            <select
              id="dropdown"
              className="mt-1 block w-full bg-[#08252B] p-[0.75rem] border border-[#07373F] rounded-[0.75rem]"
              value={numberOfTickets}
              onChange={(e) => setNumberOfTickets(Number(e.target.value))}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>

          <div className="w-full flex flex-col md:flex-row-reverse justify-center items-center md:items-start gap-[0.5rem] md:gap-[2rem] ">
            <button
              className="w-full px-[1.5rem] py-[0.75rem] bg-[#24A0B5] border-0 rounded-[0.5rem] md:rounded-[0.75rem] text-[#FFFFFF] hover:bg-[#1C7F8F] hover:shadow-lg transition-all duration-200"
              onClick={handleNext}
            >
              Next
            </button>
            <button
              className="w-full px-[1.5rem] py-[0.75rem] bg-[#08252B] border border-[#24A0B5] rounded-[0.5rem] md:rounded-[0.75rem] text-[#0E464F] hover:bg-[#0E464F] hover:text-[#FFFFFF] hover:border-[#08252B] transition-all duration-200"
              onClick={handleCancel}
            >
              Cancel
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
