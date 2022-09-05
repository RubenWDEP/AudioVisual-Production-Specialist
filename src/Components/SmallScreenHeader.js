import { Link } from 'react-router-dom';
import headerImage from '../LandingPage-images/TarjetaVisitaCaraA.jpg';
import menuIcon from '../images/menuIcon.png';
import { useState } from 'react';
import './SmallScreenHeader.css';

const images = require.context('../images', true);

function SmallScreenHeader() {
    const [open, setOpen] = useState(false);
    const [openLevel1, setOpenLevel1] = useState(false);
    const [openLevel2Africa, setOpenLevel2Africa] = useState(false);
    const [openLevel2SouthAmerica, setOpenLevel2SouthAmerica] = useState(false);
    const [openLevel2Europe, setOpenLevel2Europe] = useState(false);
    const [openLevel3SouthAfrica, setOpenLevel3SouthAfrica] = useState(false);
    const [openLevel3Namibia, setOpenLevel3Namibia] = useState(false);
    const [openLevel3Botsuana, setOpenLevel3Botsuana] = useState(false);
    const [openLevel3Zimbaue, setOpenLevel3Zimbaue] = useState(false);

    const handleMenuClick = () => {
        setOpen(!open);
        if (openLevel1) {
            setOpenLevel1(false)
        }
        if (openLevel2Africa) {
            setOpenLevel2Africa(false);
        }
    };
    const handleMenuClickLevel1 = (e) => {
        setOpenLevel1(!openLevel1);
        if (openLevel2Africa) {
            setOpenLevel2Africa(false);
        }
        if (openLevel2SouthAmerica) {
            setOpenLevel2SouthAmerica(false);
        }
        if (openLevel2Europe) {
            setOpenLevel2Europe(false);
        }
    }
    const handleMenuClickLevel2Africa = (e) => {
        setOpenLevel2Africa(!openLevel2Africa);
        e.preventDefault();
        e.stopPropagation();
    }
    const handleMenuClickLevel2SouthAmerica = (e) => {
        setOpenLevel2SouthAmerica(!openLevel2SouthAmerica);
        e.preventDefault();
        e.stopPropagation();
    }
    const handleMenuClickLevel2Europe = (e) => {
        setOpenLevel2Europe(!openLevel2Europe);
        e.preventDefault();
        e.stopPropagation();
    }
    const handleMenuClickLevel3SouthAfrica = (e) => {
        setOpenLevel3SouthAfrica(!openLevel3SouthAfrica);
        e.preventDefault();
        e.stopPropagation();
    }
    const handleMenuClickLevel3Namibia = (e) => {
        setOpenLevel3Namibia(!openLevel3Namibia);
        e.preventDefault();
        e.stopPropagation();
    }
    const handleMenuClickLevel3Botsuana = (e) => {
        setOpenLevel3Botsuana(!openLevel3Botsuana);
        e.preventDefault();
        e.stopPropagation();
    }
    const handleMenuClickLevel3Zimbaue = (e) => {
        setOpenLevel3Zimbaue(!openLevel3Zimbaue);
        e.preventDefault();
        e.stopPropagation();
    }


    return (
        <header className='smallScreenHeader'>
            <img className='smallScreenHeaderPhoto' src={headerImage} alt='Maximiliano Porta - Realizador audiovisual'></img>
            <nav>
                <img src={menuIcon} alt='menu' onClick={handleMenuClick} />
                {open &&
                    <ul className='smallScreenHeaderMainMenu'>
                        <li><Link to={"/"}>Quién soy</Link></li>
                        <li><Link to={"/whatido"}>Qué hago</Link></li>
                        <li className="menulistLevelContainer" onClick={handleMenuClickLevel1}>
                            Mis viajes
                            {openLevel1 &&
                                <ul className="smallScreenHeaderMenulistLevel1" >
                                    <li><Link to={'/mytrips/mauritania'}>Mauritania 2021</Link></li>
                                    <li className="smallScreenHeaderMenulistLevel2Container">
                                        <Link to={'/mytrips/southafrica'}>África del Sur 2018 <img className='arrowMenu' src={images(`./flechaMenu.png`)} alt='Menu arrow' onClick={handleMenuClickLevel2Africa} /></Link>
                                        {openLevel2Africa && <ul className='smallScreenHeaderMenulistLevel2'>
                                            <li><Link to={"/mytrips/southafrica/arragement"}>Preparativos</Link></li>
                                            <li className="smallScreenHeaderMenulistLevel3Container">
                                                <Link to={'/mytrips/southafrica/southafrica'}>Sudáfrica <img className='arrowMenu' src={images(`./flechaMenu.png`)} alt='Menu arrow' onClick={handleMenuClickLevel3SouthAfrica} /></Link>
                                                {openLevel3SouthAfrica && <ul className='smallScreenHeaderMenulistLevel3'>
                                                    <li><Link to={'/mytrips/southafrica/southafrica/capetown'}>Ciudad del Cabo</Link></li>
                                                    <li><Link to={'/mytrips/southafrica/southafrica/gardenroute'}>Ruta Jardín</Link></li>
                                                    <li><Link to={'/mytrips/southafrica/southafrica/addo'}>Safari Parque Nacional de Addo</Link></li>
                                                </ul>
                                                }
                                            </li>
                                            <li className="smallScreenHeaderMenulistLevel3Container">
                                                <Link to={'/mytrips/southafrica/botsuana'}>Botsuana <img className='arrowMenu' src={images(`./flechaMenu.png`)} alt='Menu arrow' onClick={handleMenuClickLevel3Botsuana} /></Link>
                                                {openLevel3Botsuana && <ul className='smallScreenHeaderMenulistLevel3'>
                                                    <li><Link to={'/mytrips/southafrica/botsuana/gaborone'}>Gaborone</Link></li>
                                                    <li><Link to={'/mytrips/southafrica/botsuana/okavangograssland'}>Delta de Okavango</Link></li>
                                                    <li><Link to={'/mytrips/southafrica/botsuana/kasane'}>Kasane</Link></li>
                                                </ul>
                                                }
                                            </li>
                                            <li className="smallScreenHeaderMenulistLevel3Container">
                                                <Link to={'/mytrips/southafrica/zimbaue'}>Zimbaue <img className='arrowMenu' src={images(`./flechaMenu.png`)} alt='Menu arrow' onClick={handleMenuClickLevel3Zimbaue} /></Link>
                                                {openLevel3Zimbaue && <ul className='smallScreenHeaderMenulistLevel3'>
                                                    <li><Link to={'/mytrips/southafrica/zimbaue/victoriawaterfalls'}>Cataratas Victoria</Link></li>
                                                </ul>
                                                }
                                            </li>
                                            <li className="smallScreenHeaderMenulistLevel3Container">
                                                <Link to={'/mytrips/southafrica/namibia'}>Namibia<img className='arrowMenu' src={images(`./flechaMenu.png`)} alt='Menu arrow' onClick={handleMenuClickLevel3Namibia} /></Link>
                                                {openLevel3Namibia && <ul className='smallScreenHeaderMenulistLevel3'>
                                                    <li><Link to={'/mytrips/southafrica/namibia/grootfontein'}>Grootfontein</Link></li>
                                                    <li><Link to={'/mytrips/southafrica/namibia/otjwarongo'}>Otjwarongo</Link></li>
                                                    <li><Link to={'/mytrips/southafrica/namibia/walvisbay'}>Walvis Bay</Link></li>
                                                    <li><Link to={'/mytrips/southafrica/namibia/swakopmund'}>Swakopmund</Link></li>
                                                    <li><Link to={'/mytrips/southafrica/namibia/windhoek'}>Windhoek</Link></li>
                                                </ul>
                                                }
                                            </li>
                                        </ul>
                                        }
                                    </li>
                                    <li className="MenulistLevel2Container">
                                        <Link to={'/mytrips/southamerica'}>Sudamérica 2014-15 <img className='arrowMenu' src={images(`./flechaMenu.png`)} alt='Menu arrow' onClick={handleMenuClickLevel2SouthAmerica} /></Link>
                                        {openLevel2SouthAmerica && <ul className='smallScreenHeaderMenulistLevel2'>
                                            <li><Link to={'/mytrips/southamerica/arragement'}>Preparativos</Link></li>
                                            <li><Link to={'/mytrips/southamerica/uruguay'}>Uruguay</Link></li>
                                            <li><Link to={'/mytrips/southamerica/argentina'}>Argentina</Link></li>
                                            <li><Link to={'/mytrips/southamerica/paraguay'}>Paraguay</Link></li>
                                            <li><Link to={'/mytrips/southamerica/bolivia'}>Bolivia</Link></li>
                                            <li><Link to={'/mytrips/southamerica/peru'}>Perú</Link></li>
                                            <li><Link to={'/mytrips/southamerica/ecuador'}>Ecuador</Link></li>
                                            <li><Link to={'/mytrips/southamerica/summary-video'}>Video Resumen</Link></li>
                                        </ul>
                                        }
                                    </li>
                                    <li className="smallScreenHeaderMenulistLevel2Container">
                                        <Link to={"/europe"}>Europa occidental 2013-14 <img className='arrowMenu' src={images(`./flechaMenu.png`)} alt='Menu arrow' onClick={handleMenuClickLevel2Europe} /></Link>
                                        {openLevel2Europe && <ul className='smallScreenHeaderMenulistLevel2'>
                                            <li><Link to={'/europe/trip-cheaper'}>Cómo viajar barato</Link></li>
                                            <li><Link to={'/europe/spain'}>España</Link></li>
                                            <li><Link to={'/europe/france'}>Francia</Link></li>
                                            <li><Link to={'/europe/belgium'}>Bélgica</Link></li>
                                            <li><Link to={'/europe/germany'}>Alemania</Link></li>
                                            <li><Link to={'/europe/netherlands'}>Holanda</Link></li>
                                            <li><Link to={'/europe/italy'}>Italia</Link></li>
                                        </ul>
                                        }
                                    </li>
                                </ul>
                            }

                        </li>
                        <li><Link to={"/contact"}>Contacto</Link></li>
                    </ul>
                }
            </nav>
        </header>
    )
}

export default SmallScreenHeader;