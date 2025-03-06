

import './css/style.css';
import logo from'./img/Shella logo.png';
import Flag from './img/saudiarabia.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown} from '@fortawesome/free-solid-svg-icons'
function Header() {
    return(
        <header className={"header"}>
            <div className={"logo"}>
                <img src={logo}  alt={"Logo"}/>
            </div>
            <div className={"header-btn"}>
            <img src={Flag}  alt={"flag"}/>
                <span>العربية</span>
              <button><FontAwesomeIcon icon={faChevronDown} style={{ fontSize: '24px', color: '#2ecc71'}}/></button>
            </div>
        </header> 
    );
}
export default Header;