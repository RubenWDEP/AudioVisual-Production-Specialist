import './App.css';
import { Routes, Route } from "react-router-dom";
import Header from './Components/Header';
import Footer from './Components/Footer';
import WhoIAm from './Pages/WhoIAm';
import WhatIDo from './Pages/WhatIDo';
import SouthAmerica from './Pages/SouthAmerica';
import Europe from './Pages/Europe';
import AfricaSur from './Pages/AfricaSur';
import Contact from './Pages/Contact';
import AsideLinks from './Components/AsideLinks';
import SouthAfricaArrangements from './Pages/SouthAfricaArrangements';
import CapeTown from './Pages/CapeTown';
import { mauritaniaPhotos } from './Photos-Data/Photos'
import GalleryComponent from './Components/GalleryComponent';
import GardenRoute from './Pages/GardenRoute';
import Addo from './Pages/Addo';
import Gaborone from './Pages/Gaborone';
import SouthAfrica from './Pages/SouthAfrica';
import Botsuana from './Pages/Botsuana';
import OkavangoGrassLand from './Pages/OkavangoGrassLand';
import Kasane from './Pages/Kasane';
import VictoriaWaterFalls from './Pages/VictoriaWaterFalls';
import Zimbaue from './Pages/Zimbaue';
import Namibia from './Pages/Namibia';
import GrootFontein from './Pages/GrootFontein';
import Otjwarongo from './Pages/Otjwarongo';
import WalvisBay from './Pages/WalvisBay';
import Swakopmund from './Pages/Swakopmund';
import Windhoek from './Pages/Windhoek';
import SouthAmericaArrangements from './Pages/SouthAmericaArrangements';
import Uruguay from './Pages/Uruguay';
import Argentina from './Pages/Argentina';
import Paraguay from './Pages/Paraguay';
import Bolivia from './Pages/Bolivia';
import Peru from './Pages/Peru';
import Ecuador from './Pages/Ecuador';
import SummaryVideo from './Pages/SummaryVideo';
import TravellingCheap from './Pages/TravellingCheap';
import France from './Pages/France';
import Belgium from './Pages/Belgium';
import Germany from './Pages/Germany';
import Netherlands from './Pages/Netherlands';
import Italy from './Pages/Italy';
import Spain from './Pages/Spain';
import ResponsiveHeader from './Components/ResponsiveHeader';
import Comments from './Components/Comments';

function App() {
  return (
    <main className="App">
      <ResponsiveHeader />
      <Routes>
        <Route path='/' element={<WhoIAm />} />
        <Route path='/whatido' element={<WhatIDo />} />
        <Route path='/mytrips/mauritania' element={<GalleryComponent arrayPhotos={mauritaniaPhotos} />} />
        <Route path='/mytrips/southafrica' element={<AfricaSur />} />
        <Route path='/mytrips/southafrica/arragement' element={<SouthAfricaArrangements />} />
        <Route path='/mytrips/southafrica/southafrica' element={<SouthAfrica />} />
        <Route path='/mytrips/southafrica/southafrica/capetown' element={<CapeTown />} />
        <Route path='/mytrips/southafrica/southafrica/gardenroute' element={<GardenRoute />} />
        <Route path='/mytrips/southafrica/southafrica/addo' element={<Addo />} />
        <Route path='/mytrips/southafrica/botsuana' element={<Botsuana />} />
        <Route path='/mytrips/southafrica/botsuana/gaborone' element={<Gaborone />} />
        <Route path='/mytrips/southafrica/botsuana/okavangograssland' element={<OkavangoGrassLand />} />
        <Route path='/mytrips/southafrica/botsuana/kasane' element={<Kasane />} />
        <Route path='/mytrips/southafrica/zimbaue' element={<Zimbaue />} />
        <Route path='/mytrips/southafrica/zimbaue/victoriawaterfalls' element={<VictoriaWaterFalls />} />
        <Route path='/mytrips/southafrica/namibia' element={<Namibia />} />
        <Route path='/mytrips/southafrica/namibia/grootfontein' element={<GrootFontein />} />
        <Route path='/mytrips/southafrica/namibia/otjwarongo' element={<Otjwarongo />} />
        <Route path='/mytrips/southafrica/namibia/walvisbay' element={<WalvisBay />} />
        <Route path='/mytrips/southafrica/namibia/swakopmund' element={<Swakopmund />} />
        <Route path='/mytrips/southafrica/namibia/windhoek' element={<Windhoek />} />
        <Route path='/mytrips/southamerica' element={<SouthAmerica />} />
        <Route path='/mytrips/southamerica/arragement' element={<SouthAmericaArrangements />} />
        <Route path='/mytrips/southamerica/uruguay' element={<Uruguay />} />
        <Route path='/mytrips/southamerica/argentina' element={<Argentina />} />
        <Route path='/mytrips/southamerica/paraguay' element={<Paraguay />} />
        <Route path='/mytrips/southamerica/bolivia' element={<Bolivia />} />
        <Route path='/mytrips/southamerica/peru' element={<Peru />} />
        <Route path='/mytrips/southamerica/ecuador' element={<Ecuador />} />
        <Route path='/mytrips/southamerica/summary-video' element={<SummaryVideo />} />
        <Route path='/europe' element={<Europe />} />
        <Route path='/europe/trip-cheaper' element={<TravellingCheap />} />
        <Route path='/europe/spain' element={<Spain />} />
        <Route path='/europe/france' element={<France />} />
        <Route path='/europe/belgium' element={<Belgium />} />
        <Route path='/europe/germany' element={<Germany />} />
        <Route path='/europe/netherlands' element={<Netherlands />} />
        <Route path='/europe/italy' element={<Italy />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <AsideLinks />
      <Footer />
    </main >
  );
}

export default App;
