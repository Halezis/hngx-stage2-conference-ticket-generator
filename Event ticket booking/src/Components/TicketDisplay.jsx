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

      {/* pipe */}
      <div className="bg-[#0E464F] flex h-[0.25rem]   items-center self-stretch rounded-[0.3125] mt-[1rem]">
        <div className="bg-[#24A0B5] rounded-[0.3125] self-stretch w-[100%]"></div>
      </div>

      <div className="mx-auto mt-[1rem] text-center mb-[2rem]">
        <h1 className="text-[2rem] mb-4">Your Ticket is Booked!</h1>
        <p className="text-[1rem]">
          You can download or check your email for a copy
        </p>
      </div>

      {/* style={{ backgroundImage: `url(${backgroundImage})` }} */}
      {/* h-screen  bg-contain bg-center bg-no-repeat */}
      <div
        className="relative flex justify-center w-full"

      >
        <div className="flex flex-col mt-[1.25rem] w-[20rem] h-[30rem] p-[0.875rem] items-center flex-shrink-0 rounded-xl border border-[#24A0B5] bg-[rgba(3,30,33,0.10)] backdrop-blur-[2px] text-[#FAFAFA] text-center">
          <h1 className="font-roadrage text-[2.125rem]  leading-[2.125rem] px-0">
            Techember Fest ”25
          </h1>
          <div className="flex flex-col text-[#FAFAFA] font-roboto text-[0.625rem]  leading-[0.9375rem] ">
            <p className="mt-[0.5rem]">📍 04 Rumens road, Ikoyi, Lagos</p>
            <p className="mt-[0.5rem]">📅 March 15, 2025 | 7:00 PM</p>
          </div>
          <div
            className="mt-[1.25rem] w-[11rem] h-[11rem] rounded-lg border-4 border-[rgba(36,160,181,0.50)] bg-lightgray bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${ticket.avatar})` }}
          ></div>

          {/* from ticket details */}
          <div className="flex flex-col w-full p-3 rounded-md border border-[#133D44] bg-[#08343C] mt-[1.25rem] h-[9.5rem]">

            <div className="w-full flex items-start">
              <div className="w-[50%] flex flex-col justify-start items-start">
                <label className="text-white font-roboto text-[0.625rem] font-normal leading-[150%] opacity-[0.33]">
                  Your name
                </label>
                <p className="text-white font-roboto text-[0.75rem] font-bold leading-[150%]">
                  {ticket.fullName}
                </p>
              </div>

              <div className="flex flex-col justify-start items-start">
                <label className="text-white font-roboto text-[0.625rem] font-normal leading-[150%] opacity-[0.33]">
                  Your email
                </label>
                <p className="text-white font-roboto text-[0.75rem] font-bold leading-[150%]">
                  {ticket.email}
                </p>
              </div>
            </div>

            {/* <div className="w-full flex items-start">
              <div className="w-[50%] flex flex-col justify-start items-start">
                <label className="text-white font-roboto text-[0.625rem] font-normal leading-[150%] opacity-[0.33]">
                  Ticket Type
                </label>
                <p className="text-white font-roboto text-[0.75rem] font-bold leading-[150%]">
                  VIP
                </p>
              </div>

              <div className="flex flex-col justify-start items-start">
                <label className="text-white font-roboto text-[0.625rem] font-normal leading-[150%] opacity-[0.33]">
                  Ticket For
                </label>
                <p className="text-white font-roboto text-[0.75rem] font-bold leading-[150%]">
                  1
                </p>
              </div>
            </div> */}

            <div className="flex flex-col justify-start items-start">
              <label className="text-white font-roboto text-[0.625rem] font-normal leading-[150%] opacity-[0.33]">Special request</label>
              <p className="text-white font-roboto text-[0.75rem] font-bold leading-[150%]">
                  {ticket.specialRequests}
                </p>
            </div>
          </div>
        </div>
      </div>

      {/* buttons */}
      <div className="mx-auto w-full flex flex-col-reverse md:flex-row justify-center items-center md:items-start gap-[0.5rem] md:gap-[2rem] mt-[1.25rem]">
        <button
          onClick={onBookAnother}
          className="w-full px-[1.5rem] py-[0.75rem] bg-[#08252B] border border-[#24A0B5] rounded-[0.5rem] md:rounded-[0.75rem] text-[#0E464F] hover:bg-[#0E464F] hover:text-[#FFFFFF] hover:border-[#08252B] transition-all duration-200"
        >
          Book Another Ticket
        </button>
        <button
          onClick={onDownload}
          className="w-full px-[1.5rem] py-[0.75rem] bg-[#24A0B5] border-0 rounded-[0.5rem] md:rounded-[0.75rem] text-[#FFFFFF] hover:bg-[#1C7F8F] hover:shadow-lg transition-all duration-200"
        >
          Download Ticket
        </button>
      </div>
    </section>
  )
}
