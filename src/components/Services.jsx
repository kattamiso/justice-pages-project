
import personIcon from "../../public/Icons/Person/PersonIcon.svg";
import businessIcon from "../../public/Icons/Business/BusinessIcon.svg";
import propertyIcon from "../../public/Icons/PropertyIcon/PropertyIcon.svg";
import enforcementIcon from "../../public/Icons/EnforcementIcon/EnforcementIcon.svg";
import archiveIcon from "../../public/Icons/ArchiveIcon/ArchiveIcon.svg";
import networkIcon from "../../public/Icons/NetworkIcon/NetworkIcon.svg";
import ArrowRightIcon from "../../public/Icons/ArrowRight/ArrowRightIcon.svg"
// import Frame from "../../public/Icons/FrameImageSvg/Frame.svg"

const Services = () => {
  return (
<div className="py-[250px] px-[200px] bg-[url('../../public/Icons/FrameImageSvg/Frame.svg')] bg-center justify-items-end bg-no-repeat max-w-[2200px]">

      <div className="w-[260px] ">
        <h1 className="text-32 uppercase tracking-wider leading-115 font-bold">იუსტიციის სახლის სერვისები</h1>
      </div>

      <div className="text-green-800 text-base font-normal w-[578px]">
        <span>იუსტიციის სახლის მიზანია მომხმარებლისათვის სახელმწიფო და კერძო სექტორის სერვისების მაღალი ხარისხით მიწოდება</span>
      </div>
     
      <div className="flex mt-14 p-[16px] h-[60px]  flex-col justify-center items-center  border-radius-24 bg-opacity-50 bg-white ">
  <div className="flex p-[4px] h-[52px] items-start self-stretch rounded-3xl bg-white ">
    
    <ul className="flex justify-between">
    <li className="flex max-w-360px p-[10px] justify-center items-center  flex-1 border-radius-22px ml-16 hover:bg-gray-300 active:bg-green-500 rounded-lg">
        <img src={personIcon} alt="Person Icon" className="h-6 w-6" />
        <a href="#" className="text-black font-normal text-16 uppercase leading-115.5 tracking-wide">
          პიროვნება
        </a>
      </li>
      <li className="flex max-w-360px p-[10px] justify-center items-center  flex-1 border-radius-22px ml-16 hover:bg-gray-300 active:bg-green-500 rounded-lg">
        <img src={businessIcon} alt="Business Icon" className="h-6 w-6" />
        <a href="#" className="text-black font-normal text-16 uppercase leading-115.5 tracking-wide">
          ბიზნესი
        </a>
      </li>
      <li className="flex max-w-360px p-[10px] justify-center items-center  flex-1 border-radius-22px ml-16 hover:bg-gray-300 active:bg-green-500 rounded-lg">
        <img src={propertyIcon} alt="Property Icon" className="h-6 w-6" />
        <a href="#" className="text-black font-normal  text-16 uppercase leading-115.5 tracking-wide">
          ქონება
        </a>
      </li>
      <li className="flex max-w-360px p-[10px] justify-center items-center  flex-1 border-radius-22px ml-16 hover:bg-gray-300 active:bg-green-500 rounded-lg">
        <img src={enforcementIcon} alt="Enforcement Icon" className="h-6 w-6" />
        <a href="#" className="text-black font-normal  text-16 uppercase leading-115.5 tracking-wide">
          აღსრულება
        </a>
      </li>
      <li className="flex max-w-360px p-[10px] justify-center items-center flex-1 border-radius-22px ml-16 hover:bg-gray-300 active:bg-green-500  rounded-lg">
        <img src={archiveIcon} alt="Archive Icon" className="h-6 w-6" />
        <a href="#" className="text-black font-normal  text-16 uppercase leading-115.5 tracking-wide">
          არქივი
        </a>
      </li>
      <li className="flex max-w-360px p-[10px] justify-center items-center  flex-1 border-radius-22px ml-16 hover:bg-gray-300  active:bg-green-500 rounded-lg">
        <img src={networkIcon} alt="Network Icon" className="h-6 w-6" />
        <a href="#" className="text-black font-normal  text-16 uppercase leading-115.5 tracking-wide">
          ონალაინ
        </a>
      </li>
      <li className="flex max-w-360px p-[10px] justify-center items-center  flex-1 border-radius-22px ml-16 hover:bg-gray-300 active:bg-green-500 rounded-lg">
      <a href="#" className="text-black font-normal  text-16 uppercase leading-115.5 tracking-wide">
    მეტი
  </a>
  <img src={ArrowRightIcon} alt="arrow right" className="h-6 w-6 "/>
</li>
    </ul>
  </div>
</div>

  </div>

  );
};

export default Services;
