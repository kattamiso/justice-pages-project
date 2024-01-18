import React, { useState } from "react";

const LanguageSelector = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("ქა"); // Default language

  const languages = [
    { code: "ქა", name: "ქა" },
    { code: "En", name: "En" },
  ];

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const selectLanguage = (language: any) => {
    setSelectedLanguage(language.code);
    setShowDropdown(false);
    // showDropdown.style.backgroundColor = "#048D59";
  };

  return (
    <div className="md:flex hidden cursor-pointer" onClick={toggleDropdown}>
      <div className="border rounded-[80px] bg-[#F2F2F2] md:w-[44px] md:h-[44px] flex md:items-center md:pb-2 justify-center">
        <div className="relative w-[20px] h-[20px]">{selectedLanguage}</div>
      </div>
      {showDropdown && (
        <div className="z-50 absolute mt-[3rem] md:w-[48px] h-[98px] rounded-[24px] shadow-lg bg-[#F2F2F2] ring-1 ring-black ring-opacity-5">
          <div
            className="md:flex md:flex-col md:gap-[2px] md:py-[5px] md:px-[1px]"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu">
            {languages.map((lang) => (
              <a
                key={lang.code}
                className=" md:px-4 md:py-2 md:flex md:items-center md:justify-center md:rounded-[50%] 
                md:w-[44px] md:h-[44px] md:hover:bg-gray-400 md:hover:text-black cursor-pointer"
                onClick={() => selectLanguage(lang)}>
                {lang.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;