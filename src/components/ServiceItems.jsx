import CancelIcon from "../../public/Icons/CancelIcon/CancelIcon.svg"
import SearchIcon from "../../public/Icons/SearchIcon/SearchIcon.svg"
import DeleteIcon from "../../public/Icons/DeleteIcon/DeleteIcon.svg"
import {useState} from "react"

const ServiceItems = ({ onClose }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const CancelText = () => {
        setSearchQuery('');
  }

  const handleCancelClick = () => {
    onClose();
  };
  
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white w-[1210px] pt-6 pb-5 ml-14 rounded-2xl">
        <div className="relative">

          <div className="flex items-center ml-6">

            <input
              type="text"
              placeholder="ძებნა..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-[1080px] border-gray-300 bg-gray-200 rounded-3xl py-2 px-4 placeholder-black focus:outline-none focus:border-blue-500"
            />
            {searchQuery && (
              <img
                src={CancelIcon}
                alt="Cancel Icon"
                className="cursor-pointer absolute ml-[1030px]"
                onClick={CancelText}
              />
            )}
            <div className=" flex absolute ml-[1050px] left-0justify-center items-center">
              <div className="bg-white  rounded-full p-1 border-y-stone-900 ">
              <img
                src={SearchIcon}
                alt="Search Icon"
                className="cursor-pointer"
              />  </div>
              <div>
                <img
                src={DeleteIcon}
                alt="Delete Icon"
                className="cursor-pointer pl-5  "
                onClick={handleCancelClick}
              />
            </div>
            </div>
        
            </div>
           
        </div>

    <div className="">
    <h1 className="text-gray-400 font-normal pt-5 pl-3 pb-2 ml-5">პიროვნება</h1>
      <hr className="border-gray-300 w-full"/>

    <ul className="flex flex-col gap-4 rounded-2xl pl-12 pt-5">    
      <li>პასპორტი</li>
      <li>პირადობის დამადასტურებელი ძირითადი დოკუმენტები</li>
      <li>რეგისტრაციიდან მოხსნა</li>
      <li>საქართველოს მოქალაქეობა</li>
      <li>ბინადრობის ნებართვა</li>
      <li>ზოგადი განათლების დამადასტურებელი სახელმწიფო დოკუმენტი (ატესტატი) </li>
      <li>ქორწინების რეგისტრაცია</li>
      <li>დაბადების რეგისტრაცია</li>
    </ul>
    </div>
    </div></div>
  );
};

export default ServiceItems;
