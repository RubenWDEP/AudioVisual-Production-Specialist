import Comments from '../Components/Comments';
import GalleryComponent from '../Components/GalleryComponent';
import { ecuadorPhotos } from '../Photos-Data/Photos';
import './Ecuador.css';

function Ecuador() {
    return (
        <section className='ecuador'>
            <h2>Ecuador</h2>
            <a id='ecuadorAnchor' href='#ecuadorGalleryBelow'>(galería de fotos a final de página)</a>
            <iframe src="https://www.google.com/maps/embed?pb=!1m54!1m8!1m3!1d4082503.4358223113!2d-79.589924!3d-2.221491!3m2!1i1024!2i768!4f13.1!4m43!3e0!4m5!1s0x91cb480661b91d2d%3A0x8e12137cdc1eee09!2sLoja%2C%20Ecuador!3m2!1d-3.9952064999999997!2d-79.2022123!4m5!1s0x91cb289529cb56f3%3A0x7d269e04912ba5bd!2sVilcabamba%2C%20Ecuador!3m2!1d-4.2623285!2d-79.2253776!4m5!1s0x902d13cbe855805f%3A0x8015a492f4fca473!2sGuayaquil%2C%20Ecuador!3m2!1d-2.1894128!2d-79.8890662!4m5!1s0x902dd4e8498f60d5%3A0xdc254019c396a227!2sMonta%C3%B1ita%2C%20Ecuador!3m2!1d-1.8268464999999998!2d-80.75297309999999!4m5!1s0x91d3912260082689%3A0xdb67c8f2fcd8aee9!2sBa%C3%B1os%20de%20Agua%20Santa%2C%20Ecuador!3m2!1d-1.3928344!2d-78.42687579999999!4m5!1s0x91d4ecf2f2a74419%3A0x92c280f1f5d7614c!2sLaguna%20de%20Quilotoa%2C%20Ecuador!3m2!1d-0.8583134!2d-78.9033627!4m5!1s0x91d59a4002427c9f%3A0x44b991e158ef5572!2sQuito%2C%20Ecuador!3m2!1d-0.18065319999999999!2d-78.4678382!5e0!3m2!1ses!2ses!4v1661959340500!5m2!1ses!2ses" width="600" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='Ecuador Map'></iframe>
            <p>Tras veinte horas de bus llegamos al pueblo más cercano a la frontera, Tumbes. Pasamos la aduana sin problemas y de allí fuimos a Loja, ya territorio ecuatoriano, para continuar hasta Vilcabamba, un pueblo pequeñísimo, conocido como «El valle de la longevidad», pues es famoso por sus ancianos habitantes. Resulta curioso que en las cajetillas de tabaco aparezca la persona más longeva del mundo. Durante el trayecto vimos plantaciones kilométricas de plataneros, además de preciosos paisajes, pues los andes recorren todo el Ecuador, de ahí su inestable clima. En este país se usa el dólar americano (1€ = 1,1$)</p>
            <p>Fueron casi dos días enteros metidos en un bus, y el hostel Izhcayluma era el sitio idóneo para descansar. Rodeado de naturaleza, con piscina, zona recreativa, cabañas, desayuno gigante… y muy económico. El problema es que llegué sin reserva y a la noche recepción estaba cerrada, por lo que tuve que dormir en una hamaca casi a la intemperie, y con una luz sensorial que molestó bastante. Lo bueno fue contemplar el cielo completamente estrellado.</p>
            <figure>
                <img src='https://laemancipaciondelvertigo.files.wordpress.com/2015/04/vilcabamba2.jpg' alt='Vilcabamba' />
                <figcaption>Vilcabamba</figcaption>
            </figure>
            <p>El siguiente destino fue Guayaquil, donde Patino y Blanca conocían unos amigos que nos acogieron muy amablemente. Me vi rodeado por cuatro cocineros profesionales durante una semana, por lo que fue una genial experiencia gastronómica. A parte de comer en casa, nos invitaron a su restaurante, además del de su padre, y nos llevaron a sitios exquisitos de comida criolla. Probé el encebollado, la cazuela de marisco, el cuy, el plátano rojo, la humita y la yuca. Gracias a la gran posesión de petróleo del país y del subsidio del gobierno ecuatoriano, la gasolina es baratísima, y por lo tanto el transporte público y el taxi también. Visitamos la plaza precolombina y la neoclásica, además de ir al famoso parque de las iguanas.</p>
            <p>Nos fuimos por recomendación a Montañita, conocida por su fiesta y playas. Residimos en Manglaralto, a veinte minutos andando por la costa. Fue la mejor elección para escapar del calor asfixiante de Guayaquil.</p>
            <figure>
                <img src='https://laemancipaciondelvertigo.files.wordpress.com/2015/04/montac3b1ita.jpg' alt='Montañita' />
                <figcaption>Montañita</figcaption>
            </figure>
            <p>Tras ocho horas en bus arribamos a Baños, una ciudad rodeada de montañas, verde ecosistema y actividades deportivas. Hicimos trekking de dos horas hasta la casa del árbol y el famoso columpio. Por el camino nos encontramos con mucha niebla, preciosos paisajes y el célebre volcán. Intentamos entrar a los baños termales, pero a pesar de la temporada baja, estaba a rebosar.</p>
            <figure>
                <img src='https://laemancipaciondelvertigo.files.wordpress.com/2015/04/dsc_0368.jpg' alt='Columpio del fin del mundo, Baños' />
                <figcaption>Columpio del fin del mundo, Baños</figcaption>
            </figure>
            <p>Residí en un hostel céntrico por 8$ la noche con desayuno incluido. También almorzamos muy barato, menús costeños, bastantes buenos y abundantes, por sólo 2’75$. De allí a cuatro horas estaba Quilotoa, donde fuimos para visitar el impresionante cráter lago.</p>
            <p>Quilotoa es un volcán situado a casi cuatro mil metros, su forma de caldera se debe a una pasada erupción y en las laderas de la misma se pueden encontrar manantiales calientes. Nos quedamos en un hostel por 15$ la noche, con una habitación y cama enormes, además de cena y desayuno incluidos.</p>
            <figure>
                <img src='https://laemancipaciondelvertigo.files.wordpress.com/2015/04/dsc_0421.jpg' alt='Lago cráter Quilotoa' />
                <figcaption>Lago cráter Quilotoa</figcaption>
            </figure>
            <p>De allí partimos hacia Quito, donde a las afueras, en Sangolquí, quedé con una pareja amiga que conocí en mi viaje por europa occidental. A 2850 metros, rodeado de mucha flora, en un ambiente rural, viven Joaquín, Majo y la pequeña Maya. Me llevaron a visitar las numerosas iglesias de la capital, las bonitas vistas de El Panecillo y la zona por la cual se conoce al país. Ecuador significa la franja imaginaria que divide el hemisferio norte del sur.</p>
            <figure>
                <img src='https://laemancipaciondelvertigo.files.wordpress.com/2015/04/dsc_0572.jpg' alt='Quito' />
                <figcaption>Quito</figcaption>
            </figure>
            <figure>
                <img src='https://laemancipaciondelvertigo.files.wordpress.com/2015/04/dsc_0544.jpg' alt='Ecuador del mundo' />
                <figcaption>Ecuador del mundo</figcaption>
            </figure>
            <p>Me despedí de Patino y Blanca, que siguieron su viaje por Colombia. Aproveché mi larga estadía para conocer bien la cultura y acercarme a sus costumbres. Acudí a la Casa de la cultura, así como al Museo etnográfico, donde me empapé de tradiciones ecuatorianas, sus 90 pueblos ancestrales, (14 registrados como nacionalidades), además de su arqueología y rituales de chamanismo. Conocimos a Josefina, madre de Majo, que nos mostró mil y una antiguedades de la ciudad, así como archivos e interesantes historias sobre su familia, llena de artistas (escultores, pintores y músicos).</p>
            <p>Llegaron a la casa Mike y Sandra, una pareja checa amiga que viajarán dos meses por Ecuador y Perú. Con ellos visitamos el centro, la enorme basílica catedral y aprovechamos para ir de excursión hacia las cascadas Rumipamba. Dos horas de camino rodeados de enormes árboles y bonita naturaleza. Llegamos a la cascada Cóndor Machay (Nido del Cóndor), con una caída de ochenta metros.</p>
            <figure>
                <img src='https://laemancipaciondelvertigo.files.wordpress.com/2015/04/dsc_5972.jpg' alt='Cascada Cóndor Machay' />
                <figcaption>Cascada Cóndor Machay</figcaption>
            </figure>
            <p>Con Mike y Sandra también subí al teleférico Cruz Loma, el cual te deja a 4100 metros sobre el nivel del mar. Desde ahí decidimos andar y escalar hasta la cumbre del Cucu Pichincha, a 4700 metros. Fueron tres horas y media de recorrido, con mucha niebla y frío arriba, pero mereció la pena por las vistas y la experiencia. Con las dos horas del descenso y los descansos la ruta duró seis horas.</p>
            <figure>
                <img src='https://laemancipaciondelvertigo.files.wordpress.com/2015/04/10406346_10204598857671596_8163283480530681613_n.jpg' alt='Cascada Cóndor Machay' />
                <figcaption>Cucu Pichincha</figcaption>
            </figure>
            <figure>
                <img src='https://laemancipaciondelvertigo.files.wordpress.com/2015/04/dsc_5915.jpg' alt='Cascada Cóndor Machay' />
                <figcaption>Cima Cucu Pichincha</figcaption>
            </figure>
            <p>Mike y Sandra continuaron su viaje hacia la selva y las Islas Galápagos, y yo fui hasta Mindo por recomendación de Joaquín y Majo. Fueron dos horas y media en bus por sólo 3’5$. Aunque me dejó a 8 km del pueblo, hice autostop y rápidamente me recogió una familia. Llegué al pueblo, inmerso entre naturaleza, rodeado por un hermoso valle, donde se pueden vislumbrar hasta 500 variedades de pájaros. Con un aire de tranquilidad asombrante, buena gente y además, muy barato. Por sólo 2$ (1’80€) tienes un buen menú de sopa, trucha y limonada. El hostel en el que residí, La casa de Cecilia, al lado del río, sólo me salió por 9$ (8€) la noche.</p>
            <p>Aproveché y estuve casi una semana. Todos los días se repetía el mismo patrón, por la mañana lucía un Sol espléndido y por la tarde llovía. Hice la ruta San Lorenzo de ocho kilómetros a las cataratas. Subí a la tarabita y durante casi cuatro horas de camino entre la selva visité diez cascadas. También fui al mariposario, donde se pueden ver hasta 40 tipos diferentes de este insecto, aunque en todo el valle de Mindo se calcula que hay 1200 especies.</p>
            <figure>
                <img src='https://laemancipaciondelvertigo.files.wordpress.com/2015/04/dsc_5986.jpg' alt='Santuario de cascadas' />
                <figcaption>Santuario de cascadas</figcaption>
            </figure>
            <figure>
                <img src='https://laemancipaciondelvertigo.files.wordpress.com/2015/04/img_20150512_110244.jpg' alt='Mariposario' />
                <figcaption>Mariposario</figcaption>
            </figure>
            <p>Regresé a Quito y acudí al festival internacional de cine documental <a href='https://festivaledoc.org/' target='_blank' rel='noreferrer'>(edoc14)</a>, con muchísimas proyecciones interesantes y hasta una conferencia en vivo desde Rusia con Edward Snowden.</p>
            <p>Pasé mis últimos días de relax y reflexionando de lo que han sido casi seis meses de viaje. Me esperaba un vuelo hacia Madrid con una escala de 14 horas en Sao Paulo (por ello me salió tan barato), y de allí a Sevilla. Con muchas ganas de disfrutar de familiares y amigos. Ahora tenía que prepararme para la vendimia francesa.</p>

            <h3 id='ecuadorGalleryBelow'>Galería de imágenes</h3>
            <GalleryComponent arrayPhotos={ecuadorPhotos} />
            <Comments />

        </section>
    )
}

export default Ecuador;