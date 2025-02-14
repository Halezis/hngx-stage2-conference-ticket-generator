import thumb from '/src/assets/thumb.png'
import ticz from '/src/assets/ticz.png'
import arrow from '/src/assets/Line 5.png'

export default function Header() {
  return (
    <>
      <header className="bg-sectionsbg font-jeju flex justify-between items-center m-[1.25rem] px-[0.75rem] py-[1rem] border border-sectionsborder rounded-[1.5rem]">
        <div className="flex justify-center items-center gap-[2px]">
          <img src={thumb} alt="thumb logo" />
          <img src={ticz} alt="ticz logo" />
        </div>

        <ul className="hidden md:flex gap-[2.25rem] text-[18px] text-[#B3B3B3] transition font-normal">
          <li className="hover:text-[#FAFAFA]">
            <a href="#">Event</a>
          </li>
          <li className="hover:text-[#FAFAFA]">
            <a href="#">My Tickets</a>
          </li>
          <li className="hover:text-[#FAFAFA]">
            <a href="#">About Project</a>
          </li>
        </ul>

        <div className="group bg-[#FFF] hover:bg-[#24A0B5] flex items-center justify-center gap-[0.5rem] px-[0.75rem] py-[1rem] md:px-[1rem] md:py-[1.5rem] border border-[rgba(213, 234, 0, 0.10)] hover:border-[#D9D9D9] rounded-[0.75rem] transition">
          <div className="uppercase text-[1rem] text-[#0A0C11] group-hover:text-[#D9D9D9] leading-tight">
            My Tickets
          </div>
          <img
            className="object-contain block transform transition-transform group-hover:-rotate-45"
            src={arrow}
            alt=""
          />
        </div>
      </header>
    </>
  )
}
