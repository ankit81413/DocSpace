"use client";

import {
  Home,
  FileText,
  Settings,
  Plus,
  Bell,
  User,
  CircleUserRound,
  CalendarFoldIcon,
} from "lucide-react";
import clsx from "clsx";

export default function Sidebar() {
  const menu = [
    { icon: Home, active: true },
    { icon: Plus },
    { icon: CalendarFoldIcon },
    { icon: FileText },
  ];

  return (
    <>
      <div className="flex v-w-100 h-dvh bg-[#fcf8f5]">
        <div className="nav flex p-7">
          <div className="flex flex-col items-center justify-between gap-4 bg-[#f3ece6] shadow-lg rounded-2xl p-5 border h-100% items-center">
            <div className="flex flex-col gap-4">
              <div className="logo w-10 p-1 bg-white rounded-full">
                <img src="logo.png" alt="Docspace" />
              </div>
              <Bell className="w-9 h-9 flex items-center justify-center rounded-full cursor-pointer transition p-2 mt-3 text-gray-500 bg-white hover:bg-black hover:text-white cursor-pointer" />
            </div>
            <div className="flex flex-col gap-4">
              {menu.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className={clsx(
                      "w-10 h-10 flex items-center justify-center rounded-full cursor-pointer transition text-gray-500 bg-white hover:bg-black hover:text-white",
                      item.active
                        ? "bg-white text-gray-700"
                        : "bg-white text-gray-700"
                    )}
                  >
                    <Icon size={18} />
                  </div>
                );
              })}
            </div>
            <div className="flex flex-col gap-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-full cursor-pointer transition text-gray-500 text-gray-500 bg-white hover:bg-black hover:text-white">
                <Settings size={20} />
              </div>
              <div className="w-10 flex items-center justify-center rounded-full">
                <img
                  src="Profile.png"
                  className="w-10 h-10 rounded-full cursor-pointer transition p-0 text-gray-500 hover:bg-gray-100 hover:text-black cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>

        <main className="flex w-[100%] bg-black ">
          
        </main>
      </div>
    </>
  );
}
