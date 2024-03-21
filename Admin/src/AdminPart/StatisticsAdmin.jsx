import React from 'react';
import NavbarAdmin from '../Components/NavbarAdmin';
import LeftsidebarAdmin from '../Components/LeftsidebarAdmin.jsx'
import { TEChart } from "tw-elements-react";

function StatisticsAdmin() {
  return (
    <div>
      <NavbarAdmin />
      <div style={{ display: 'flex' }}> 
        <LeftsidebarAdmin />
        <div style={{marginTop:165,marginRight:50}}><div className="max-w-sm w-full bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6">
  <div className="flex justify-between">
    <div>
      <h5 className="leading-none text-3xl font-bold text-gray-900 dark:text-white pb-2">
        3.2k
      </h5>
      <p className="text-base font-normal text-gray-500 dark:text-gray-400">
        Users this week
      </p>
    </div>
    <div className="flex items-center px-2.5 py-0.5 text-base font-semibold text-green-500 dark:text-green-500 text-center">
      12%
      <svg
        className="w-3 h-3 ms-1"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 10 14"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 13V1m0 0L1 5m4-4 4 4"
        />
      </svg>
    </div>
  </div>
  <div id="area-chart" />
  <div className="grid grid-cols-1 items-center border-gray-200 border-t dark:border-gray-700 justify-between">
    <div className="flex justify-between items-center pt-5">
      {/* Button */}
      <button
        id="dropdownDefaultButton"
        data-dropdown-toggle="lastDaysdropdown"
        data-dropdown-placement="bottom"
        className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 text-center inline-flex items-center dark:hover:text-white"
        type="button"
      >
        Last 7 days
        <svg
          className="w-2.5 m-2.5 ms-1.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>
      {/* Dropdown menu */}
      <div
        id="lastDaysdropdown"
        className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
      >
        <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownDefaultButton"
        >
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Yesterday
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Today
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Last 7 days
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Last 30 days
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Last 90 days
            </a>
          </li>
        </ul>
      </div>
      <a
        href="#"
        className="uppercase text-sm font-semibold inline-flex items-center rounded-lg text-blue-600 hover:text-blue-700 dark:hover:text-blue-500  hover:bg-gray-100 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 px-3 py-2"
      >
        Users Report
        <svg
          className="w-2.5 h-2.5 ms-1.5 rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 6 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="m1 9 4-4-4-4"
          />
        </svg>
      </a>
    </div>
  </div>
</div>
</div>
        <div style={{ marginRight: '200px', flex: 1, marginTop:'100px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ marginBottom: '50px' }}> 
            
            <h1 style={{ fontSize: '24px', textAlign: 'center' }}>Daily Statistics</h1>

<div>
  
<div className="flex flex-col">
  
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-left text-sm font-light">
              <thead className="border-b font-medium dark:border-neutral-500">
                <tr>
                  <th scope="col" className="px-6 py-4">#</th>
                  <th scope="col" className="px-6 py-4">Daily Visits</th>
                  <th scope="col" className="px-6 py-4">Requests Send</th>
                  <th scope="col" className="px-6 py-4">New Professionals</th>
                  <th scope="col" className="px-6 py-4">New Users</th>
                  

                </tr>
              </thead>
              <tbody>
                <tr
                  className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                  <td className="whitespace-nowrap px-6 py-4 font-medium">8PM To 16PM </td>
                  <td className="whitespace-nowrap px-6 py-4">200</td>
                  <td className="whitespace-nowrap px-6 py-4">20</td>
                  <td className="whitespace-nowrap px-6 py-4">05</td>
                  <td className="whitespace-nowrap px-6 py-4">31</td>
                </tr>
                <tr
                  className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                  <td className="whitespace-nowrap px-6 py-4 font-medium">16PM To Midnight</td>
                  <td className="whitespace-nowrap px-6 py-4">411</td>
                  <td className="whitespace-nowrap px-6 py-4">9</td>
                  <td className="whitespace-nowrap px-6 py-4">04</td>
                  <td className="whitespace-nowrap px-6 py-4">26</td>
                </tr>
                <tr
                  className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                  <td className="whitespace-nowrap px-6 py-4 font-medium">Midnight To 8AM</td>
                  <td className="whitespace-nowrap px-6 py-4">255</td>
                  <td className="whitespace-nowrap px-6 py-4">12</td>
                  <td className="whitespace-nowrap px-6 py-4">02</td>
                  <td className="whitespace-nowrap px-6 py-4">19</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
</div> <div style={{ marginBottom: '50px'}}></div>

              <h1 style={{ fontSize: '24px', textAlign: 'center' }}>Weekly Requests</h1>
              <TEChart
                style={{ width: '700px', marginBottom: '50px'  }}
                type="bar"
                data={{
                  labels: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday",
                  ],
                  datasets: [
                    {
                      label: "Traffic",
                      data: [2112, 2343, 2545, 3423, 2365, 1985, 987],
                    },
                  ],
                }}
              />
            </div>
            <div style={{ marginBottom: '20px' }}> 
              <h1 style={{ fontSize: '24px', textAlign: 'center' }}>Monthly Requests</h1>
              <TEChart
                style={{ width: '700px' }}
                type="bar"
                darkTicksColor="#ff0000"
                darkGridLinesColor="#ffff00"
                darkLabelColor="#ff00ff"
                data={{
                  labels: [
                    "January",
                    "February",
                    "March",
                    "April",
                    "May",
                    "June",
                    "July",
                  ],
                  datasets: [
                    {
                      label: "Traffic",
                      data: [4200, 3250, 4790, 1425, 4123, 1985, 2251],
                    },
                  ],
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StatisticsAdmin;
