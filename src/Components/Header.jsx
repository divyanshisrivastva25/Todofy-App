import sunIcon from "../assets/images/icon-sun.svg";
import moonIcon from "../assets/images/icon-moon.svg";


const Header = ({darkMode,setDarkMode}) => {

  return (
      <div className="w-full flex justify-between mt-3">
          <h1 className="text-white text-4xl font-semibold tracking-widest">TODO</h1>
          <button className="h-8 w-8 " onClick={()=>setDarkMode(!darkMode)}>
            {darkMode ? <img src={sunIcon} />: <img src={moonIcon} />}
         
          </button>
      </div>
  )
}

export default Header
