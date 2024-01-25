import  { useState } from 'react';
import personIcon from '../../public/Icons/Person/PersonIcon.svg';
import businessIcon from '../../public/Icons/Business/BusinessIcon.svg';
import propertyIcon from '../../public/Icons/PropertyIcon/PropertyIcon.svg';
import enforcementIcon from '../../public/Icons/EnforcementIcon/EnforcementIcon.svg';
import archiveIcon from '../../public/Icons/ArchiveIcon/ArchiveIcon.svg';
import networkIcon from '../../public/Icons/NetworkIcon/NetworkIcon.svg';
import ArrowRightIcon from '../../public/Icons/ArrowRight/ArrowRightIcon.svg';
import '../../src/index.css';

const SideMenu = () => {
  const [isSideMenuClose, setIsSideMenuClose] = useState(false);


  const openServices = () => {
    setIsSideMenuClose(true);
  }

  return (
    <div className="menu-container">
     
     {/* {isSideMenuClose && <Services onClick={closeSideMenu} />} */}
     <div className={`menu-container ${isSideMenuClose ? 'slide-in-right' : ''}`}>
      <ul
        className="menu-list slide-in-left flex mt-14 shadow-md h-[60px] w-[1194px]  absolute justify-center items-center border-radius-24  bg-white"
      >
        <li className="flex p-[10px] justify-center items-center w-[180px] rounded-3xl hover:bg-gray-300 active:bg-lime-300 " onClick={openServices}>
          <img src={personIcon} alt="Person Icon" className="h-6 w-6" />
          <a href="#" className="text-black font-normal text-16 ml-[8px]  ">
            უკან
          </a>
        </li>
        <li className="flex p-[10px] justify-center items-center rounded-3xl w-[180px] hover:bg-gray-300 active:bg-lime-300">
          <img src={businessIcon} alt="Business Icon" className="h-6 w-6" />
          <a href="#" className="text-black font-normal text-16 ml-[8px]  ">
            პრობაცია
          </a>
        </li>
        <li className="flex p-[10px] justify-center items-center rounded-3xl w-[180px] hover:bg-gray-300 active:bg-lime-300 ">
          <img src={propertyIcon} alt="Property Icon" className="h-6 w-6" />
          <a href="#" className="text-black font-normal  text-16  ml-[8px]  ">
            დევნილთა შესახებ
          </a>
        </li>
        <li className="flex p-[10px] w-[180px] justify-center rounded-3xl items-center hover:bg-gray-300 active:bg-lime-300  ">
          <img src={enforcementIcon} alt="Enforcement Icon" className="h-6 w-6" />
          <a href="#" className="text-black font-normal  text-16 ml-[8px] ">
            ქორწინების სახელები 
          </a>
        </li>
        <li className="flex p-[10px] w-[180px] justify-center rounded-3xl items-center  hover:bg-gray-300 active:bg-lime-300">
          <img src={archiveIcon} alt="Archive Icon" className="h-6 w-6" />
          <a href="#" className="text-black font-normal  text-16 ml-[8px]  ">
            კომუნალური
          </a>
        </li>
        <li className="flex w-[180px] p-[10px] items-center rounded-3xl justify-center hover:bg-gray-300 active:bg-lime-300 ">
          <img src={networkIcon} alt="Network Icon" className="h-6 w-6" />
          <a href="#" className="text-black font-normal ml-[8px] text-16  ">
            კერძო სექტორი
          </a>
        </li>
        <li className="flex p-[10px] w-[100px] justify-center rounded-3xl items-center hover:bg-gray-300 active:bg-lime-300">
          <a href="#" className="text-black font-normal ml-[8px] text-16  ">
            სხვა
          </a>
          <img src={ArrowRightIcon} alt="arrow right" className="h-6 w-6 " />
        </li>

      </ul>
</div>
    </div>
  );
};

export default SideMenu;
