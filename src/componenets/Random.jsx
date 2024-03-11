import { useState } from "react";
import Spinner from "./Spinner";
import useGif from "./useGif";


function Random(){

    const [copyFlag ,setCopyflag] = useState('false')
    const {gif,show,fetchData} = useGif()
    function copyLink(){
        navigator.clipboard.writeText(gif);
        setCopyflag(true)
    }
    return (
        <div className="bg-[#E1AFD1] w-8/12  h-4/12 rounded-lg p-2 flex items-center justify-center mx-auto flex-col gap-3 ">
            <p className="text-2xl text-white font-bold mt-2">Random Meme</p>
            <div>
                { show  ?(<Spinner/>): (<img className="w-full rounded-md " src={gif} width={300} alt='meme'/>) }
            </div>
            <button className="px-2 pb-2 border rounded-lg border-white bg-[#CCD3CA] active:font-bold h-[35px] w[50px]" onClick={copyLink}  > Copy Link </button>
            {
                copyFlag == true ? (<div className="text-white text-[20px] p-2 mt-[-25px]">Link Copied</div>) : null
            }

            <div>

            <button   className="bg[#E1AFD1] border object-scale-down	 border-black px-3 py-2 text-white rounded-md transition-property: all bg-violet-500 hover:bg-violet-600 active:bg-violet-700 active:font-bold  focus:ring focus:outline focus:ring-violet-300 " onClick={() => {fetchData(); setCopyflag(null)}}>Genrate</button>
            </div>
        </div>
    )
}
export default Random