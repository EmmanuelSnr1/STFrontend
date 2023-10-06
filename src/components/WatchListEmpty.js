import {MdOutlineMonitor} from "react-icons/md";

export function WatchListEmpty(){
    return (
        <div className=" flex flex-col justify-center pt-8 items-center">
            <MdOutlineMonitor className="text-gray/90x" size={100}/>
            <div className="text-xl mb-2 ">Watch List is Empty</div>
            <div className="text-info/40">Put some stocks under watch</div>
        </div>
    )
}