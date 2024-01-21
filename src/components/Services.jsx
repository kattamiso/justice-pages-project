
import personIcon from "../../public/Icons/Person/PersonIcon.svg";
import businessIcon from "../../public/Icons/Business/BusinessIcon.svg";
import propertyIcon from "../../public/Icons/PropertyIcon/PropertyIcon.svg";
import enforcementIcon from "../../public/Icons/EnforcementIcon/EnforcementIcon.svg";
import archiveIcon from "../../public/Icons/ArchiveIcon/ArchiveIcon.svg";
import networkIcon from "../../public/Icons/NetworkIcon/NetworkIcon.svg";
import ArrowRightIcon from "../../public/Icons/ArrowRight/ArrowRightIcon.svg"
import ServiceItems from "./ServiceItems"
import {useState} from "react"

const Services = () => {
   const [isOpen, setIsOpen] = useState(false)

  return (  
<div className="py-[250px] px-[200px] justify-items-end bg-[url('../../public/Icons/FrameImageSvg/Frame.svg')] bg-right-bottom min-h-screen bg-no-repeat max-w-[2200px]">  
  <div className="">

      <div className="w-[260px] ">
        <h1 className="text-32 text-green-800 uppercase tracking-wider leading-115 font-bold">იუსტიციის სახლის სერვისები</h1>
      </div>

      <div className="text-green-700 text-base font-normal w-[578px]">
        <span>იუსტიციის სახლის მიზანია მომხმარებლისათვის სახელმწიფო და კერძო სექტორის სერვისების მაღალი ხარისხით მიწოდება</span>
      </div>
     
      <div className="flex mt-14 shadow-md h-[60px] w-[1194px]  flex-col justify-center items-center  border-radius-24 bg-opacity-50 bg-white ">
  <div className="flex  p-[4px] h-[52px] items-start self-stretch rounded-3xl bg-white ">
    
    <ul className="flex justify-between">
 <li className="flex justify-center items-center w-[180px] rounded-3xl hover:bg-gray-300 active:bg-lime-300 " onClick={()=> setIsOpen ((prev) => !prev)}>
        <img src={personIcon} alt="Person Icon" className="h-6 w-6" />
        <a href="#" className="text-black font-normal text-16 ml-[8px]  ">
          პიროვნება
        </a>
      </li> 
      <li className="flex p-[10px] justify-center items-center rounded-3xl w-[180px] hover:bg-gray-300 active:bg-lime-300">
        <img src={businessIcon} alt="Business Icon" className="h-6 w-6" />
        <a href="#" className="text-black font-normal text-16 ml-[8px]  ">
          ბიზნესი
        </a>
      </li>
      <li className="flex p-[10px] justify-center items-center rounded-3xl w-[180px] hover:bg-gray-300 active:bg-lime-300 ">
        <img src={propertyIcon} alt="Property Icon" className="h-6 w-6" />
        <a href="#" className="text-black font-normal  text-16  ml-[8px]  ">
          ქონება
        </a>
      </li>
      <li className="flex p-[10px] w-[180px] justify-center rounded-3xl items-center hover:bg-gray-300 active:bg-lime-300  ">
        <img src={enforcementIcon} alt="Enforcement Icon" className="h-6 w-6" />
        <a href="#" className="text-black font-normal  text-16 ml-[8px] ">
          აღსრულება
        </a>
      </li>
      <li className="flex p-[10px] w-[180px] justify-center rounded-3xl items-center  hover:bg-gray-300 active:bg-lime-300">
        <img src={archiveIcon} alt="Archive Icon" className="h-6 w-6" />
        <a href="#" className="text-black font-normal  text-16 ml-[8px]  ">
          არქივი
        </a>
      </li>
      <li className="flex w-[180px] p-[10px] items-center rounded-3xl justify-center hover:bg-gray-300 active:bg-lime-300 ">
        <img src={networkIcon} alt="Network Icon" className="h-6 w-6" />
        <a href="#" className="text-black font-normal ml-[8px] text-16  ">
          ონალაინ
        </a>
      </li>
      <li className="flex p-[10px] w-[100px] justify-center rounded-3xl items-center hover:bg-gray-300 active:bg-lime-300">
      <a href="#" className="text-black font-normal ml-[8px] text-16  ">
    მეტი
  </a>
  <img src={ArrowRightIcon} alt="arrow right" className="h-6 w-6 "/>
</li>
    </ul>      

  </div>
</div>
</div>{isOpen && <ServiceItems />}


  </div>

  );
};

export default Services;
