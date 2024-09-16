import Navbar from "./components/Navbar";

const App=()=>{
    const Appname="FORM"
    return(
    <>
    <div className="flex flex-col justify-start items-center">
        <Navbar appname = {Appname} />
    </div>
    <div className="h-screen w-screen flex justify-center items-center bg-purple-500">
        <div className="h-3/6 w-[30%] flex justify-center items-center bg-slate-50">
        <form className="w-[80%] h-[80%] flex flex-col justify-center items-center gap-4">
            <input type="text" placeholder="ENTER YOUR NAME" className="p-3 bg-#f8f8f8 w-full font-bold outline-none active:outline-none hover:border-purple-400 focus:border-b-2"></input>
            <input type="mail" placeholder="ENTER YOUR MAIL" className="p-3 bg-#f8f8f8 w-full font-bold outline-none active:outline-none hover:border-purple-400 focus:border-b-2"></input>
            <input type="number" placeholder="ENTER YOUR AGE" className="p-3 bg-#f8f8f8 w-full font-bold outline-none active:outline-none hover:border-purple-400 focus:border-b-2"></input>
            <input type="tel" placeholder="ENTER YOUR MOBILE NUMBER" className="p-3 bg-#f8f8f8 w-full font-bold outline-none active:outline-none hover:border-purple-400 focus:border-b-2"></input>
            <button type="submit" className="p-3 bg-purple-600 w-full h-20 text-white font-bold outline-none active:outline-none  "> Login </button>
            </form>

        </div></div> 
        
    
    </>
    )
}
export default App;