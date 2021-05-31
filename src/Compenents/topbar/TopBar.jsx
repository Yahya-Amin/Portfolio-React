import './TopBar.scss';
import { Person,Mail } from '@material-ui/icons';

export default function TopBar({setMenuOpen,menuOpen}) {
    return (
        <div className={"topBar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">Genius.</a>
                    <div className="itemContainer">
                        <Person className="icon"/>
                        <span>+33780586668</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon"/>
                        <span>aminn.yahya@yahoo.com</span>
                    </div>
                </div>
                
                <div className="right">
                    <div className="Hamburger" onClick={()=>setMenuOpen(!menuOpen)} >
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
