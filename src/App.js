import './App.css';
import Random from './componenets/Random';
import Tag from './componenets/Tag'
function App() {
  return (
        
        <div className='flex gap-5 text-2xl flex-col w-12/12 h-12/12 items-center bg-[#7469B6] '>
          <h1 className='text-white font-bold text-3xl bg-[#AD88C6] mt-3 p-4 rounded-md' >Genrate Your own Meme </h1>
          <div>
          <Random />
          <Tag />
          </div>
        </div>
         
  );
}

export default App;
