import React from 'react'
import backgroundImage from '/src/assets/bg.png'

export default function TicketDisplay({ ticket, onBookAnother, onDownload }) {
  return (
    <section className="bg-[#08252] border border-[#0E464F] rounded-[2rem] md:rounded-[2.5rem] mx-[1.25rem] mb-[1rem] p-[1.5rem] md:p-[3rem] flex flex-col justify-center items-start  md:w-[37.8rem] text-[#FFF]">
      <div className="flex items-start md:items-center w-full justify-between">
        <div className="font-jeju text-[1.5rem] md:text-[2rem] font-normal text-[#FFFFFF]">
          Ready
        </div>
        <div className="font-roboto text-[1rem] text-[#FAFAFA] mt-2 md:mt-0">
          Step 3/3
        </div>
      </div>

      <div className="bg-[#0E464F] flex h-[0.25rem]   items-center self-stretch rounded-[0.3125] mt-[1rem]">
        <div className="bg-[#24A0B5] rounded-[0.3125] self-stretch w-[100%]"></div>
      </div>

      <div className="mx-auto mt-[1rem] text-center mb-[2rem]">
        <h1 className="text-[2rem] mb-4">Your Ticket is Booked!</h1>
        <p className="text-[1rem]">
          You can download or check your email for a copy
        </p>
      </div>

      <div
        className="flex justify-center w-full h-screen bg-contain bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="flex flex-col mt-[1.25rem] w-[16.25rem] h-[27.875rem] p-[0.875rem] items-center flex-shrink-0 rounded-xl border border-[#24A0B5] bg-[rgba(3,30,33,0.10)] backdrop-blur-[2px] text-[#FAFAFA] text-center">
          <h1 className="font-roadrage text-[2.125rem]  leading-[2.125rem] px-0">
            Techember Fest ”25
          </h1>
          <div className="flex flex-col text-[#FAFAFA] font-roboto text-[0.625rem]  leading-[0.9375rem] ">
            <p className="mt-[0.5rem]">📍 04 Rumens road, Ikoyi, Lagos</p>
            <p className="mt-[0.5rem]">📅 March 15, 2025 | 7:00 PM</p>
          </div>
          <div
            className="mt-[1.25rem] w-[8.75rem] h-[8.75rem] rounded-lg border-4 border-[rgba(36,160,181,0.50)] bg-lightgray bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${ticket.avatar})` }}
          ></div>

          <div className="flex flex-col justify-center items-center self-stretch p-1 rounded-md border border-[#133D44] bg-[#08343C] mt-[1.25rem] h-[9.5rem]">
            <div className="flex justify-start items-start">
              <div className="">
                <label className="text-white font-roboto text-[0.625rem] font-normal leading-[150%] opacity-[0.33]">
                  Enter your name
                </label>
                <p className="text-white font-roboto text-[0.75rem] font-bold leading-[150%]">
                  {ticket.fullName}
                </p>
              </div>

              <div className="">
                <label className="text-white font-roboto text-[0.625rem] font-normal leading-[150%] opacity-[0.33]">
                  Enter your email*
                </label>
                <p className="text-white font-roboto text-[0.75rem] font-bold leading-[150%]">
                  {ticket.email}
                </p>
              </div>
            </div>

            <div className="flex justify-start items-start">
              <div className="">
                <label className="text-white font-roboto text-[0.625rem] font-normal leading-[150%] opacity-[0.33]">
                  Ticket Type
                </label>
                <p className="text-white font-roboto text-[0.75rem] font-bold leading-[150%]">
                {ticket.selectedOption}
                </p>
              </div>

              <div className="">
                <label className="text-white font-roboto text-[0.625rem] font-normal leading-[150%] opacity-[0.33]">
                  Ticket For
                </label>
                <p className="text-white font-roboto text-[0.75rem] font-bold leading-[150%]">
                {ticket.numberOfTickets}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="">

        {/* buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button
            onClick={onBookAnother}
            className=""
          >
            Book Another Ticket
          </button>
          <button
            onClick={onDownload}
            className=""
          >
            Download Ticket
          </button>
        </div>
      </div>
    </section>
  )
}
