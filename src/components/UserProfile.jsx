import React, { useState } from 'react';
import { MdOutlineCancel } from 'react-icons/md';

import { Button } from '.';
import { userProfileData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
import avatar from '../data/avatar.jpg';
import { removeUserSession, getUser } from "../Utils/Common";
import '../pages/loader/splashScreen.css';

const UserProfile = () => {
  const { currentColor } = useStateContext();
  const [loading, setLoading] = useState(undefined);
  
  const usersData = getUser();
  // Logout func
  const handleLogout = () => {

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      removeUserSession();
      window.location.reload(false);
      // localStorage.removeItem("user-info");
    }, 2000);
  }

  // console.log(usersData);

  return (
    <div className="nav-item absolute right-1 top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg w-96">
      <div className="flex justify-between items-center">
        <p className="font-semibold text-lg dark:text-gray-200">User Profile</p>
        <Button
          icon={<MdOutlineCancel />}
          color="rgb(153, 171, 180)"
          bgHoverColor="light-gray"
          size="2xl"
          borderRadius="50%"
        />
      </div>
      <div className="flex gap-5 items-center mt-6 border-color border-b-1 pb-6">
        <img
          className="rounded-full h-24 w-24"
          src={avatar}
          alt="user-profile"
        />
        <div>
          <p className="font-semibold text-xl dark:text-gray-200 capitalize"> {usersData.username} </p>
          <p className="text-gray-500 text-sm dark:text-gray-400">  {usersData.isAdmin ? 'Administrator' : 'User'}   </p>
          <p className="text-gray-500 text-sm font-semibold dark:text-gray-400"> {usersData.email} </p>
        </div>
      </div>
      <div>
        {userProfileData.map((item, index) => (
          <div key={index} className="flex gap-5 border-b-1 border-color p-4 hover:bg-light-gray cursor-pointer  dark:hover:bg-[#42464D]">
            <button
              type="button"
              style={{ color: item.iconColor, backgroundColor: item.iconBg }}
              className=" text-xl rounded-lg p-3 hover:bg-light-gray"
            >
              {item.icon}
            </button>

            <div>
              <p className="font-semibold dark:text-gray-200 ">{item.title}</p>
              <p className="text-gray-500 text-sm dark:text-gray-400"> {item.desc} </p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5">
        {/* <Button
          color="white"
          bgColor={currentColor}
          text="Logout"
          borderRadius="10px"
          width="full"
          type="button"
          onClick={handleLogout}
        /> */}
        <button
          type="button"
          style={{ backgroundColor: currentColor }}
          className={loading ? 
          'confirm_transfer transfer_loading text-base opacity-0.9 text-white hover:drop-shadow-xl rounded-xl p-3 w-full' 
          : 'confirm_transfer text-base opacity-0.9 text-white hover:drop-shadow-xl rounded-xl p-3 w-full'}
          onClick={handleLogout}
        >
          <span className="transfer_text text-center">Logout</span>
        </button>
      </div>
    </div>

  );
};

export default UserProfile;
