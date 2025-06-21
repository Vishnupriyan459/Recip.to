
import { IoIosArrowUp } from "react-icons/io";
const Offers = () => {
  return (
    <div className="rounded-xl bg-[#fff] p-3 mx-3 space-y-3 drop-shadow-xl">
        <img src="/image/taxservices.webp" alt=""  className="rounded-xl"/>
        
        <div className="flex justify-between items-center">
            <div>
                <h2 className="font-bold" >Tax Service Offers</h2>
                <p className="font-semibold opacity-50">14 Offers</p>
            </div>
            <IoIosArrowUp />
        </div>
    </div>
  )
}

export default Offers