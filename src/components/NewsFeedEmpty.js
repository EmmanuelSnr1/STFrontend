import {FaRegNewspaper} from "react-icons/fa";

export function NewsFeedEmpty(){
    return (
        <div className=" flex flex-col justify-center pt-8 items-center">
            <FaRegNewspaper className="text-gray/90x" size={100}/>
            <div className="text-xl mb-2 ">News Feed is Empty</div>
            <div className="text-info/40">News about stocks will shown here</div>
        </div>
    )
}