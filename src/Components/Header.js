import { useState } from 'react';
import { Link } from 'react-router-dom';
import headerImage from '../LandingPage-images/TarjetaVisitaCaraA.jpg';
import { Outlet } from "react-router-dom";
import './Header.css';


function Header() {


    return (
        <header className='main-header'>
            <img className='header-photo' src={headerImage} alt='Maximiliano Porta - Realizador audiovisual'></img>
            <nav>
                <ul className='mainMenu'>
                    <li><Link to={"/"}>Quién soy</Link></li>
                    <li><Link to={"/whatido"}>Qué hago</Link></li>
                    <li className="menulistLevelContainer">
                        Mis viajes
                        <ul className="menulistLevel1">
                            <li><Link to={'/mytrips/mauritania'}>Mauritania 2021</Link></li>
                            <li className="menulistLevel2Container">
                                <Link to={'/mytrips/southafrica'}>África del Sur 2018</Link>
                                <ul className='menulistLevel2'>
                                    <li><Link to={"/mytrips/southafrica/arragement"}>Preparativos</Link></li>
                                    <li className="menulistLevel3Container">
                                        <Link to={'/mytrips/southafrica/southafrica'}>Sudáfrica</Link>
                                        <ul className='menulistLevel3'>
                                            <li><Link to={'/mytrips/southafrica/southafrica/capetown'}>Ciudad del Cabo</Link></li>
                                            <li><Link to={'/mytrips/southafrica/southafrica/gardenroute'}>Ruta Jardín</Link></li>
                                            <li><Link to={'/mytrips/southafrica/southafrica/addo'}>Safari Parque Nacional de Addo</Link></li>
                                        </ul>
                                    </li>
                                    <li className="menulistLevel3Container">
                                        <Link to={'/mytrips/southafrica/botsuana'}>Botsuana</Link>
                                        <ul className='menulistLevel3'>
                                            <li><Link to={'/mytrips/southafrica/botsuana/gaborone'}>Gaborone</Link></li>
                                            <li><Link to={'/mytrips/southafrica/botsuana/okavangograssland'}>Delta de Okavango</Link></li>
                                            <li><Link to={'/mytrips/southafrica/botsuana/kasane'}>Kasane</Link></li>
                                        </ul>
                                    </li>
                                    <li className="menulistLevel3Container">
                                        <Link to={'/mytrips/southafrica/zimbaue'}>Zimbaue</Link>
                                        <ul className='menulistLevel3'>
                                            <li><Link to={'/mytrips/southafrica/zimbaue/victoriawaterfalls'}>Cataratas Victoria</Link></li>
                                        </ul>
                                    </li>
                                    <li className="menulistLevel3Container">
                                        <Link to={'/mytrips/southafrica/namibia'}>Namibia</Link>
                                        <ul className='menulistLevel3'>
                                            <li><Link to={'/mytrips/southafrica/namibia/grootfontein'}>Grootfontein</Link></li>
                                            <li><Link to={'/mytrips/southafrica/namibia/otjwarongo'}>Otjwarongo</Link></li>
                                            <li><Link to={'/mytrips/southafrica/namibia/walvisbay'}>Walvis Bay</Link></li>
                                            <li><Link to={'/mytrips/southafrica/namibia/swakopmund'}>Swakopmund</Link></li>
                                            <li><Link to={'/mytrips/southafrica/namibia/windhoek'}>Windhoek</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li className="menulistLevel2Container">
                                <Link to={'/mytrips/southamerica'}>Sudamérica 2014-15</Link>
                                <ul className='menulistLevel2'>
                                    <li><Link to={'/mytrips/southamerica/arragement'}>Preparativos</Link></li>
                                    <li><Link to={'/mytrips/southamerica/uruguay'}>Uruguay</Link></li>
                                    <li><Link to={'/mytrips/southamerica/argentina'}>Argentina</Link></li>
                                    <li><Link to={'/mytrips/southamerica/paraguay'}>Paraguay</Link></li>
                                    <li><Link to={'/mytrips/southamerica/bolivia'}>Bolivia</Link></li>
                                    <li><Link to={'/mytrips/southamerica/peru'}>Perú</Link></li>
                                    <li><Link to={'/mytrips/southamerica/ecuador'}>Ecuador</Link></li>
                                    <li><Link to={'/mytrips/southamerica/summary-video'}>Video Resumen</Link></li>
                                </ul>
                            </li>
                            <li className="menulistLevel2Container">
                                <Link to={"/europe"}>Europa occidental 2013-14</Link>
                                <ul className='menulistLevel2'>
                                    <li><Link to={'/europe/trip-cheaper'}>Cómo viajar barato</Link></li>
                                    <li><Link to={'/europe/spain'}>España</Link></li>
                                    <li><Link to={'/europe/france'}>Francia</Link></li>
                                    <li><Link to={'/europe/belgium'}>Bélgica</Link></li>
                                    <li><Link to={'/europe/germany'}>Alemania</Link></li>
                                    <li><Link to={'/europe/netherlands'}>Holanda</Link></li>
                                    <li><Link to={'/europe/italy'}>Italia</Link></li>
                                </ul>
                            </li>
                        </ul>

                    </li>
                    <li><Link to={"/contact"}>Contacto</Link></li>
                </ul>
            </nav>
        </header>

    )
}

export default Header;