const Navbar = ({appname})=>{
    console.log(appname);
    return(
        <div className="w-full h-[4vh] text-white p-5 text-lg bg-purple-500 font-bold flex justify-center items-center">
        {appname}
        </div>

)
}

export default Navbar;