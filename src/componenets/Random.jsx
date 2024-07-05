import { useState } from "react";
import Spinner from "./Spinner";
import useGif from "./useGif";
import { FaCopy } from "react-icons/fa6";
import toast, { Toaster } from 'react-hot-toast';


function Random(){
    const notify = () => toast('Copied ..');

    const [copyFlag ,setCopyflag] = useState(false)
    const {gif,show,fetchData} = useGif()
    function copyLink(){
        navigator.clipboard.writeText(gif);
        setCopyflag(true)
        setCopyflag(true);
        notify();
    }
    return (
        <div className="bg-[#818FB4] w-[80%] md:w-[40%]  rounded-lg p-2 flex items-center justify-center mx-auto flex-col gap-5 mt-5 ">
            <p className="text-2xl text-white font-bold mt-2">Random Meme</p>
            <div>
                { show  ?(<Spinner/>): (<img className="w-full rounded-md " src={gif} width={300} alt='meme'/>) }
            </div>

            <div className="flex  justify-center items-center gap-x-4">

            <button   className="bg[#E1AFD1] border object-scale-down	 border-black px-3 py-2 text-white rounded-md transition-property: all bg-violet-500 hover:bg-violet-600 active:bg-violet-700 active:font-bold  focus:ring focus:outline focus:ring-violet-300 " 
            onClick={() => {fetchData(); setCopyflag(false) }}>Genrate</button>
            <button className={`${copyFlag === false ? (` text-white`) : (`hidden`)}`} onClick={copyLink}  ><FaCopy />
            </button>
            </div>
        </div>
    )
}
export default Random