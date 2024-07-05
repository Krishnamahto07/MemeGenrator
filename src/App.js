import './App.css';
import Random from './componenets/Random';
import Tag from './componenets/Tag'
import toast, { Toaster } from 'react-hot-toast';

function App() {
  return (        
        <div className='flex gap-5 text-2xl flex-col w-full items-center bg-[#0C134F] '>
          <h1 className='text-white  shadow-transparent text-3xl  mt-3 p-4 rounded-md underline font-light' >Genrate Your own Meme </h1>
          <div className='flex md:flex-row flex-col gap-x-3 mx-3 px-3 ' >
          <Random />
          <Tag />
          </div>
          <Toaster />
        </div>
         
  );
}

export default App;
