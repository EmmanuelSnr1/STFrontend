import {AiOutlineStock} from "react-icons/ai";

export function MyPortfolioChartEmpty(){
    return (
        <div className=" flex flex-col justify-center items-center pt-8">
            <AiOutlineStock className="text-gray/90x" size={100}/>
            <div className="text-neutral text-xl mb-2 ">Your portfolio is Empty</div>
            <div className="text-info/40">A chart showing how your portfolio is performing will be shown here</div>
        </div>
    )
}