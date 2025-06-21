"use client";
import { useEffect, useState } from "react";
import { CiCircleInfo } from "react-icons/ci";

const Coupon = () => {
    const [coins,setcoins]=useState();
    
    useEffect(()=>{
        const fetchdata=async()=>{
            const response=await fetch("/API.json");
            
            if(!response.ok) throw new Error("failed to fetch");
            const json =await response.json();
            setcoins(json.data.getUserDiscountCodes.data[0].brandproduct.customer_cashback)
            
            
        }
       fetchdata()
        
        
        // setcoins(response.data.getUserDiscountCodes.data.brandproduct.customer_cashback)
    },[])
    
    
  return (
    <div className="rounded-xl bg-white p-3 w-full mx-3 ">
        <div className="flex justify-between items-center mb-2">
            <div className="flex gap-2 items-center">
                 <img src="/image/Recipto Logo.jpg" alt="" className="rounded w-[3rem] h-[3rem]"/>
                 <p>Recip.to</p>
            </div>
            <CiCircleInfo className="text-[1.5rem]"/>
           
        </div>
        <hr className="opacity-[20%]" />
        <p className="font-bold text-[.9rem]">Salaried? Get FREE Tax Help + 40% OFF On Tax Services</p>
        <div className="flex justify-between items-center mt-3 text-[0.7rem]">
            <div className="border-2 rounded p-2 border-[#f0f0f0] flex items-center gap-1 font-bold">
                <span>Earn</span>
                <img src="/image/Coins.png" alt="" className="w-4 h-4"/>
                <span>{coins}</span>
                <span>Coins</span>
            </div>
            <div className="rounded py-2 px-3  flex items-center gap-1 font-bold bg-violet-500 text-white">
                VIEW
            </div>
        </div>
       
    </div>
  )
}

export default Coupon;