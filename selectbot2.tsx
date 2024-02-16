"use client";
import { useState } from 'react';

type RadioSelect = {
    statusbot: boolean;
};

//usa ele assim <SelectBot statusbot={false} ou true/>

const SelectBot = ({ statusbot }: RadioSelect) => {

  const [botStatus, setBotStatus] = useState(statusbot);

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBotStatus(event.target.value === 'on');
  };

  return (
    <>
     <span className="ml-8 h-fit -rotate-90 translate-y-9 text-xs font-bold tracking-widest border-b border-indigo-300 text-white">
              BOT
    </span>
    <div className="w-full md:w-fit ml-1">
      <label
        className="block uppercase tracking-wide dark:text-gray-500 text-gray-700 text-xs font-medium mb-2"
      >
        Status
      </label>

      <div className="flex items-center mb-4">
        <input 
          id="default-radio-1" 
          type="radio" 
          value="on" 
          name="default-radio" 
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          onChange={handleRadioChange}
        />
        <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">ON</label>
      </div>
      <div className="flex items-center">
        <input 
          id="default-radio-2" 
          type="radio" 
          value="off" 
          name="default-radio" 
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          onChange={handleRadioChange}
        />
        <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">OFF</label>
      </div>
      </div>
    </>
  );
};

export default SelectBot;