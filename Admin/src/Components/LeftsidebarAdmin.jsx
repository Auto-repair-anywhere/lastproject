import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

function Leftsidebar() {
  const [isManageAccountSubMenuOpen, setIsManageAccountSubMenuOpen] = useState(false);
  const [isMyOrdersSubMenuOpen, setIsMyOrdersSubMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleManageAccountSubMenu = () => {
    setIsManageAccountSubMenuOpen(!isManageAccountSubMenuOpen);
  };

  const toggleMyOrdersSubMenu = () => {
    setIsMyOrdersSubMenuOpen(!isMyOrdersSubMenuOpen);
  };

  return (
    <div className="flex w-1/3">
      <div className="bg-white text-black w-1/1 max-w-xs flex flex-col">
        <div className="flex items-center justify-center h-16 border-b border-gray-800"></div>
        <ul className="py-4 w-1/1">
          <li className="px-4 py-2 hover:bg-gray-300 cursor-pointer">
            <a href="#" className="flex items-center">
              My Account
            </a>
          </li>
          <li className="px-4 py-2 hover:bg-gray-300 cursor-pointer" onClick={toggleManageAccountSubMenu}>
            <a href="#" className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 mr-2 transform ${isManageAccountSubMenuOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
              Manage Account
            </a>
            <ul className={`pl-4 ${isManageAccountSubMenuOpen ? '' : 'hidden'}`}>
              <li className="py-2 hover:bg-gray-300 cursor-pointer">
                <a href="#" onClick={() => { navigate('/ProfileAdmin') }}>My Profile</a>
              </li>
              <li className="py-2 hover:bg-gray-300 cursor-pointer">
                <a href="#" onClick={() => { navigate('/UpdateList') }}>Add Professional</a>
              </li>
              <li className="py-2 hover:bg-gray-300 cursor-pointer">
                <a href="#" onClick={() => { navigate('/IncomeStatistics') }}>Requests List</a>
              </li>
              <li className="py-2 hover:bg-gray-300 cursor-pointer">
                <a href="#" onClick={() => { navigate('/CheckAllusers') }}>Accounts Manager</a>
              </li>
              <li className="py-2 hover:bg-gray-300 cursor-pointer">
                <a href="#" onClick={() => { navigate('/StatisticsAdmin') }}>Users Statistics</a>
              </li>
              <li className="py-2 hover:bg-gray-300 cursor-pointer">
                <a href="#" onClick={() => { navigate('/IncomeStatistics') }}>Income Statistics</a>
              </li>
            </ul>
          </li>
          <li className="px-4 py-2 hover:bg-gray-300 cursor-pointer" onClick={toggleMyOrdersSubMenu}>
            <a href="#" className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 mr-2 transform ${isMyOrdersSubMenuOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
              Messages
            </a>
            <ul className={`pl-4 ${isMyOrdersSubMenuOpen ? '' : 'hidden'}`}>
              <li className="py-2 hover:bg-gray-300 cursor-pointer">
                <a href="#">Clients Complaints</a>
              </li>
              <li className="py-2 hover:bg-gray-300 cursor-pointer">
                <a href="#">Clients Requests</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Leftsidebar;
