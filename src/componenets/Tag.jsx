import { useState } from "react"
import Spinner from "./Spinner";
import useGif from "./useGif";
import { FaCopy } from "react-icons/fa6";
import toast, { Toaster } from 'react-hot-toast';

function Tag(){
    const notify = () => toast('Copied ..');
    const [tag,setTag] = useState('')
    const {gif,show,fetchData} = useGif(tag)
    const [copyFlag ,setCopyflag] = useState(false)
    function clickHandler(){
        fetchData(tag);
        setCopyflag(false)
    }
    function changeHandler(e){
        setTag(e.target.value)
    }
    function copyLink(){
        navigator.clipboard.writeText(gif);
        notify();
        setCopyflag(true)
    }
    
    return (
        <div className="bg-[#818FB4] w-[80%] md:w-[40%]  rounded-lg p-2 flex items-center justify-center mx-auto flex-col gap-5 mt-5 ">
            <p className="text-2xl text-white font-bold mt-3">Genrate Your Own</p>
            <div>
                { show  ?(<Spinner/>): (<img className="w-full rounded-md "  src={gif} alt='meme' width={450}/>) }
            </div>
            <input className="px-3 py-2 w-10/12 rounded-md font-semibold bg-slate-400 text-white" type="text" onChange={changeHandler} value={tag} placeholder="Enter Your Meme Name"/>
            <div className="flex flex-row gap-x-6 justify-center items-center">
                <button   className="bg[#E1AFD1] border object-scale-down	 border-black px-3 py-2 text-white rounded-md transition-property: all bg-violet-500 hover:bg-violet-600 active:bg-violet-700 active:font-bold  focus:ring focus:outline focus:ring-violet-300 " onClick={clickHandler}>Genrate</button>
                <button className={`${copyFlag === false ? (` text-white`) : (`hidden`)}`} onClick={copyLink}  ><FaCopy />
                </button>
            </div>
        </div>
    )
}
export default Tag