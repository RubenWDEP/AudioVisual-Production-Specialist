import Comments from '../Components/Comments';
import GalleryComponent from '../Components/GalleryComponent';
import { uruguayPhotos } from '../Photos-Data/Photos';
import './Uruguay.css';

function Uruguay() {
    return (
        <section className='uruguay'>
            <h2>Uruguay</h2>
            <a id='uruguayAnchor' href='#uruguayGalleryBelow'>(galería de fotos a final de página)</a>
            <iframe src="https://www.google.com/maps/embed?pb=!1m66!1m8!1m3!1d1684193.5961915394!2d-54.855815!3d-34.466345!3m2!1i1024!2i768!4f13.1!4m55!3e0!4m5!1s0x959f80ffc63bf7d3%3A0x6b321b2e355bec99!2sMontevideo%2C%20Departamento%20de%20Montevideo%2C%20Uruguay!3m2!1d-34.9011127!2d-56.164531399999994!4m5!1s0x959f8a15298ade23%3A0x217da01f3ba3fff7!2sPino%20Alto%2C%2015800%20Ciudad%20de%20la%20Costa%2C%20Departamento%20de%20Canelones%2C%20Uruguay!3m2!1d-34.7948169!2d-55.9107087!4m5!1s0x957543857e1f2fc5%3A0xaff9e4dd9bf05938!2sCerro%20Pan%20de%20Az%C3%BAcar%2C%2020200%20Piri%C3%A1polis%2C%20Departamento%20de%20Maldonado%2C%20Uruguay!3m2!1d-34.8102622!2d-55.259090099999995!4m5!1s0x9575059ec8c40bbd%3A0x9bdd0183c2d3cf93!2sPunta%20del%20Este%2C%20Departamento%20de%20Maldonado%2C%20Uruguay!3m2!1d-34.9363205!2d-54.9377826!4m5!1s0x95736a6e20d7613d%3A0xb3cc9db70f99a5a0!2sCabo%20Polonio%2C%2027200%20Departamento%20de%20Rocha%2C%20Uruguay!3m2!1d-34.402302!2d-53.794940999999994!4m5!1s0x95734115cff3bcf7%3A0xb1df708f9ea0e00!2sBarra%20de%20Valizas%2C%2027200%20Departamento%20de%20Rocha%2C%20Uruguay!3m2!1d-34.3366684!2d-53.793881999999996!4m5!1s0x957346fc27d70d81%3A0x22e22e2e61ab8257!2sAguas%20Dulces%2C%2027200%20Departamento%20de%20Rocha%2C%20Uruguay!3m2!1d-34.2750352!2d-53.783027999999995!4m5!1s0x95732d9bf6d89ed7%3A0xd1d3cc04626ecb77!2sPunta%20del%20Diablo%2C%2027200%20Departamento%20de%20Rocha%2C%20Uruguay!3m2!1d-34.042339399999996!2d-53.5473322!4m5!1s0x950cd2b89c418b45%3A0x90f1944d6ca144e4!2sParque%20Nacional%20de%20Santa%20Teresa%2C%20Ruta%20Nacional%20N%C2%BA%209%2C%20Km%20302%2C%2027100%20Rocha%2C%20Uruguay!3m2!1d-33.9929273!2d-53.548197099999996!5e0!3m2!1ses!2ses!4v1661878582209!5m2!1ses!2ses" width="600" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='Uruguay Map'></iframe>

            <p>Días antes de mi llegada al continente Latinoamericano pude disfrutar (con una inestable incertidumbre) con mis padres de Madrid. De su noche, del Guernica, de los paseos por Gran Vía, del musical Rey León, del Museo de Cera.</p>
            <p>Tras trece horas de viaje y una escala en Buenos Aires por fin llegué a Montevideo. La familia con la que contacté gracias a una buena amiga que hice en Hamburgo me esperaba a la salida del avión (mil gracias por todo). Me llevaron al Pinar, donde reposé y me he establecido. He pasado mis primeras semanas explorando la verde zona, visitando la playa (a dos minutos caminando) y viajando a Montevideo (45 pesos, 1h en bus). En la ciudad capital he paseado por la linda Ciudad Vieja, he comido en el Mercado del Puerto, he hecho la visita turísita al Teatro Solís, me he acercado a varios centros culturales y museos y he pateado sus kilométricas avenidas. Aquí es verano y las Navidades se conciben de otra manera. El clima ronda los 30º y alguna vez interfiere lluvia. La playa se llena y en nochebuena y nochevieja el estruendo de cohetes, petardos y hogueras duran horas.</p>
            <p>Los precios por aquí son muy parecidos a los de España. La conversión sale a 30 pesos -> 1€. Por ejemplo, una barra de pan son 26 pesos (0’90€) y unos 15 huevos son 60 pesos (2€). Una noche en un albergue del centro, el Willy Fogg (C/ Maldonado, Montevideo) cuesta 330 pesos (11€)</p>
            <figure>
                <img src='https://laemancipaciondelvertigo.files.wordpress.com/2015/02/casa-pinar-montevideo-2.jpg' alt='Casa Pinar Montevideo' />
                <img src='https://laemancipaciondelvertigo.files.wordpress.com/2015/02/casa-pinar-montevideo.jpg' alt='Casa Pinar Montevideo' />
                <figcaption>Casa Pinar Montevideo</figcaption>
            </figure>
            <p>Veo a un pueblo que se enorgullece de su presidente Mujica y que sigue su ejemplo. Ha apostado por su partido cinco años más (en marzo se sucede el gobierno. Es curioso que aquí te multan si no acudes a votar) y en general el entorno es de prosperidad, encanto y amabilidad. A parte de muchas leyes avanzadas respecto a nuestro país, me llama la atención que las universidades públicas sean completamente gratis (y sin nota de corte), así como el transporte público para estudiantes de hasta veinte años.</p>
            <p>Todo es muy verde y no muy habitado. Uruguay tiene 3,4 millones de habitantes de los cuales 1,3 residen en Montevideo. Se respira buen ambiente, más artesanal, urbano e informal -en sus buenas acepciones-. Mi cuerpo y mente se han adaptado a las peculiaridades del país. La plata. El mate. El único beso de saludo y despedida. Los sapos y mosquitos del campo. El piar del benteveo. El “sho”. Que me digan “gallego”. El olor a asado. El dulce de leche. Las paredes reivindicativas -mezcla de propaganda política y acción poética-. La cerveza Patricia. La rivalidad Peñarol-Nacional. A que en cada cuadra suene Bob Marley.</p>
            <figure>
                <img src='https://laemancipaciondelvertigo.files.wordpress.com/2014/12/192.jpg?w=308&h=&zoom=2' alt='Montevideo' />
                <figcaption>Montevideo</figcaption>
            </figure>
            <p>Hice ruta por la costa y sus pueblos una vez pasó nochebuena y terminaron los días de lluvia. Me llevé una tienda de campaña que me dejaron y empezamos subiendo al Cerro Pan de Azúcar. Una hora y media de subida para unas de las alturas más grandes del país. Las vistas eran increíbles. En los siguientes días seguí sólo y visité Punta del Este y Cabo Polonio, donde se llega con un camión que te lleva por las dunas y pasé fin de año. Pueblos pequeñitos, muy artesanos, peculiares y donde el ambiente es muy agradable y simpático. Casas pintorescas y bonitas playas.</p>
            <p>Al amanecer de año nuevo fui caminando hasta Valizas (unos 8km). Un camino precioso, con la playa, sus dunas, rocas y animales y a pocos metros la flora del pinar. Era uno de Enero, muy temprano, y aún no estaban los barqueros, los cuales olvidé esperar, así que al aventurarme a cruzar un pequeño arroyo por poco no me lleva con él. Se empapó casi toda la mochila y se estropeó el teléfono móvil y el cargador de la cámara (pudo ser peor). Además, tuve que volver andando a Cabo Polonio porque no había cajero, y me dio tiempo a ver estallar una tormenta de agua y arena. Al día siguiente caminé por la orilla hasta Aguas Dulces y me acerqué a ver Punta del Diablo. El último día volví a andar por la costa hasta el Parque Nacional Santa Teresa (unos 4km), el parque más grande del país, con hasta cinco zonas de acampada, museo, mirador de aves, etc.</p>
            <figure>
                <img src='https://laemancipaciondelvertigo.files.wordpress.com/2014/12/164.jpg?w=777&h=&zoom=2' alt='Punta de Diablo' />
                <figcaption>Punta de Diablo</figcaption>
            </figure>
            <figure>
                <img src='https://laemancipaciondelvertigo.files.wordpress.com/2015/01/acampada-punta-del-este.jpg' alt='Acampada Punta del Este' />
                <figcaption>Acampada Punta del Este</figcaption>
            </figure>
            <p>En esta ruta de cinco días hice hasta seis veces autostop, donde en cinco de ellas apenas tuve que esperar diez minutos para que me recogieran. Siempre gente muy afable y con afán de guía turístico. He hecho amistades con buenas conversaciones entre risas y siempre compartiendo todo lo posible. El primer país de mi ruta me ha dejado un muy buen sabor de boca.</p>
            <h3 id='uruguayGalleryBelow'>Galería de imágenes</h3>
            <GalleryComponent arrayPhotos={uruguayPhotos} />
            <Comments />
        </section>
    )
}

export default Uruguay;