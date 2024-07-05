import { useState } from "react"
import logo from "./assets/logo-dark.png"

function Header(){


    const [num, setNum] = useState(false); 
    const [btn, setBtn] = useState(false); 
    const handleClick = () => { 
        setNum(!num); 
        setBtn(!btn); 
    }; 


    return(
        <>
            <div className="header">
                <div className="nav">
                    <div>
                        <a href=""><img className="logo" src={logo} alt="logo" /></a>
                    </div>
                    <ul className="navbar">
                        <li><a href="">Home</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Product</a></li>
                        <li><a href="">Blog</a></li>
                        <li><a href="">Contact</a></li>
                    </ul>
                    <div  className="find__icon" onClick={handleClick}>

                        { 
                            btn ? 
                            <ion-icon className="close__search" name="close-outline"></ion-icon> :
                            <ion-icon className="open__search" name="search-outline"></ion-icon>
                            
                        } 

                    </div>
                </div>    
            </div>   
            {
                num ? 
                <div className="search">
                    <form className="search__place">
                        <input className="text" type="text" placeholder="Search..." />
                    </form>
                </div> :
                <div className="empty-search">

                </div>    
            }
        </>
    )
}

export default Header