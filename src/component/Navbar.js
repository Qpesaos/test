import React,{useState ,useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';

import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton]= useState(true);

    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);
    
    const showButton = () => {
        if (window.innerWidth<= 960){
            setButton(false);
        }else{
            setButton(true);
        }
    };

    useEffect(()=>{
        showButton()
    }, []);

    window.addEventListener('resize', showButton);



    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to="/" className='navbar-logo' onClick=
                    {closeMobileMenu}>
                        SolCosm<i class="fas fa-meteor"></i>  s 
                    </Link>
                    <div className='menu-icon' onClick= {handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars' }/>
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'} >
                        <li className= 'nav-item'>
                            <Link to= '/' className= 'nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className= 'nav-item'>
                            <Link to= '/Roadmap' className= 'nav-links' onClick={closeMobileMenu}>
                                Roadmap
                            </Link>
                        </li>
                        <li className= 'nav-item'>
                            <Link to= '/FAQ' className= 'nav-links' onClick={closeMobileMenu}>
                                FAQ
                            </Link>
                        </li>
                        <li className= 'nav-item'>
                            <Link to= '/Cards' className= 'nav-links' onClick={closeMobileMenu}>
                                Collection
                            </Link>
                        </li>
                       {/*  <li className= 'nav-item'>
                            <Link to= '/Rarity' className= 'nav-links' onClick={closeMobileMenu}>
                                Rarity
                            </Link>
                        </li> */}
                        <li className= 'nav-item'>
                            <Link to= '/' className= 'nav-links' onClick={closeMobileMenu}>
                            <i class="fab fa-discord"></i>
                            </Link>
                        </li>
                        <li className= 'nav-item'>
                            <Link to= '/' className= 'nav-links' onClick={closeMobileMenu}>
                            <i class="fab fa-twitter"></i>
                            </Link>
                        </li>
                        
                    </ul>
                    {button && <Button buttonStyle='btn--outline'> Attributes </Button>}




                </div>
            </nav>
        </>    
            
        //los 2 ultimos <li> son el icono de discord y de twitter... falta por actualizar los links a los datos reales
             
    )
}

export default Navbar
