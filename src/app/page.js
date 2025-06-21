"use client"
import Image from "next/image";
import Infobtn from "@/components/Infobtn";
import { GiSettingsKnobs } from "react-icons/gi";
import { useState } from "react";
import Offers from "@/components/Offers";
import Coupon from "@/components/Coupon";
export default function Home() {
  const [btn,setbtn] = useState(true);

  return (
    <div className=" font-[family-name:var(--font-geist-sans)]  overflow-hidden pb-1">
      <main className=" ">
        <div className="flex justify-end m-4 ">
          {" "}
          <Infobtn />
        </div>
        <div className="flex flex-col justify-center items-center gap-5">
          <img
            src="/image/Recipto Logo.jpg"
            alt=""
            className="rounded-full w-[8rem] h-[8rem]"
          />
          <p className="text-[1.2rem] font-bold">Recip.to</p>
        </div>
        <div className="flex justify-end  gap-3 items-center m-3">
          <div className="flex gap-2 justify-around rounded-full bg-[#ffff] drop-shadow-xl  ">
            <div className={` ${btn ?"bg-violet-700 text-white":"bg-[#fff]"} flex items-center justify-center rounded-full gap-1 py-2 px-3`}  onClick={()=>setbtn(!btn)}>
              Offer
              <img src="/image/Filter Icons - All.png" alt="" className="w-5" />
            </div>
            <div className={`${!btn ?"bg-violet-700 text-white":"bg-[#fff]"} py-2 px-2 rounded-full`} onClick={()=>setbtn(!btn)}>My Coupouns</div>
          </div>
          <div className=" rounded-full p-2 bg-[#fff] drop-shadow-xl"><GiSettingsKnobs /></div>
        </div>
        <div className="flex justify-center items-center">
          <Offers/>
        </div>
        <div className="overflow-scroll">
        <div className="overflow-x-auto w-[120vw] flex justify-around items-center my-3 gap-1  text-[.9rem] ">
            <div className=" rounded-full bg-white py-1 px-4 flex justify-center items-center gap-1 drop-shadow-xl">
                <img src="/image/Filter Icons - All.png" alt="" className="w-5"  />
                <p>All</p>
            </div>
            <div className=" rounded-full bg-white py-1 px-4 flex justify-center items-center gap-1 text-nowrap drop-shadow-xl">
                <img src="/image/Filter Icons - Personal.png " alt="" className="w-5 "  />
                <p>For salaried professionals</p>
            </div>
            <div className=" rounded-full bg-white py-1 px-4 flex justify-center items-center gap-1 text-nowrap drop-shadow-xl">
                <img src="/image/Filter Icons - Business.png" alt="" className="w-5"  />
                <p>For office</p>
            </div>
        </div>
        </div>
        <div className="flex justify-center items-center ">
          <Coupon />
        </div>
      </main>
    </div>
  );
}
