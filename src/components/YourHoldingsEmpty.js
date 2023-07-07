import {FaSuitcase} from "react-icons/fa";

export function YourHoldingsEmpty(){
    return (
        <div className=" flex flex-col justify-center pt-8 items-center">
            <FaSuitcase className="text-gray/90x" size={100}/>
            <div className="text-xl mb-2 ">Holdings is empty</div>
            <div className="text-info/40">Your holdings will be displayed here</div>
        </div>
    )
}