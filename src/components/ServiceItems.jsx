import CancelIcon from "../../public/Icons/CancelIcon/CancelIcon.svg"
import SearchIcon from "../../public/Icons/SearchIcon/SearchIcon.svg"
import DeleteIcon from "../../public/Icons/DeleteIcon/DeleteIcon.svg"
import {useState} from "react"

const Services = () => {
    const [searchQuery, setSearchQuery] = useState('');
  
    const handleCancelClick = () => {
      setSearchQuery('');
    };
  
    return (
      <div className="bg-white w-[1200px] pl-12">
  
        <div className="relative pb-5 pt-4">
          <div className="flex items-center">
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
                className="cursor-pointer"
                onClick={handleCancelClick}
              />
            )}
            <div className="bg-white rounded-full border-y-stone-900 justify-center items-center">
              <img
                src={SearchIcon}
                alt="Search Icon"
                className="cursor-pointer"
              />
            </div>
               <img
                src={DeleteIcon}
                alt="Delete Icon"
                className="cursor-pointer"
                onClick={handleCancelClick}

              />
          </div>
       
        </div>

    <ul className="flex flex-col gap-4 rounded-2xl">    
    <h1 className="text-gray-400">პიროვნება</h1>
    <hr className="border-gray-300 w-full "/>
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
  );
};

export default Services;
