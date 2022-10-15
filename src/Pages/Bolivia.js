import Comments from '../Components/Comments';
import GalleryComponent from '../Components/GalleryComponent';
import { boliviaPhotos } from '../Photos-Data/Photos';
import './Bolivia.css';

function Bolivia() {
    return (
        <section className='bolivia'>
            <h2>Bolivia</h2>
            <a id='boliviaAnchor' href='#boliviaGalleryBelow'>(galería de fotos a final de página)</a>
            <iframe src="https://www.google.com/maps/embed?pb=!1m54!1m8!1m3!1d7757709.3104382325!2d-66.121394!3d-18.304169!3m2!1i1024!2i768!4f13.1!4m43!3e0!4m5!1s0x93f1e81ca7c01a63%3A0x5c8b0a53a467611b!2sSanta%20Cruz%20de%20la%20Sierra%2C%20Bolivia!3m2!1d-17.8145819!2d-63.156085299999994!4m5!1s0x93fbc8bc8187832f%3A0xbd9df259af1bee96!2sSucre%2C%20Bolivia!3m2!1d-19.035345!2d-65.2592128!4m5!1s0x93f94e0e72e5d423%3A0xaae8f4290ef1f4e8!2sVilla%20Imperial%20de%20Potos%C3%AD%2C%20Bolivia!3m2!1d-19.572280499999998!2d-65.75500629999999!4m5!1s0x93ffbad958d3f2bd%3A0x1455841e2c4e6653!2sUyuni%2C%20Bolivia!3m2!1d-20.4603534!2d-66.82606489999999!4m5!1s0x93ffbae03c9bfe71%3A0x6f91998c1418cb6f!2sC.%20Dominga%20Viuda%20de%20Claros%2C%20Uyuni%2C%20Bolivia!3m2!1d-20.466393999999998!2d-66.83365909999999!4m5!1s0x915edf0a04f5a40f%3A0x57dbfc76b4458ab3!2sLa%20Paz%2C%20Bolivia!3m2!1d-16.489689!2d-68.11929359999999!4m5!1s0x915dcd7e020a5f2f%3A0x5ff56029fdb79a4a!2sCopacabana%2C%20Bolivia!3m2!1d-16.1662935!2d-69.0861568!5e0!3m2!1ses!2ses!4v1661941957193!5m2!1ses!2ses" width="600" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='Bolivia Map'></iframe>
            <p>Tras veinticinco horas de viaje llegamos a la peculiar Bolivia.</p>
            <p>El bus era pequeño, y aunque tuve el asiento de mi lado libre, el sillón no era muy cómodo y desde primera hora la parte de atrás olía algo a orina. El trayecto se hizo largo y las deterioradas carreteras no ayudaron. Tras las paradas para el sello de pasaporte y el registro de equipaje llegué a Santa Cruz de la Sierra.</p>
            <p>Quedé con Diego de couchsurfing. Me invitó a desayunar tradicionales salteñas y zumo mocochichi (durazno deshidratado), mientras me explicaba la historia de la ciudad y su arquitectura (su futura profesión). Santa Cruz es particular en su estructura, formada por 12 anillos concéntricos que facilitan la conexión de calles por la ciudad. Días antes se celebró el carnaval, por lo que muchos edificios han quedado impregnados de pintura.</p>
            <p>Fuimos en coche al bosquecino pueblo de Porongo y nos acercamos a La rinconada. Un sitio emblemático, escondido y que guarda mucha naturaleza. Allí pude disfrutar de las victorias amazónicas (foto de cabecera de la web), de los tucanes y del bosque lluvioso. Diego me presentó a su linda familia y almorzamos asado y tarta en el cumpleaños de su hermana. A la tarde, fuimos juntos a un lindo pueblo a 100 kilómetros, Buena Vista. Cené majadito de charque, yuca (boniato) y chicha (zumo de maní).</p>
            <figure>
                <img src='https://laemancipaciondelvertigo.files.wordpress.com/2015/03/majadito-de-charque-y-zumo-de-manc3ad.jpg' alt='Majadito de charque y zumo de maní' />
                <figcaption>Majadito de charque y zumo de maní</figcaption>
            </figure>
            <figure>
                <img src='https://laemancipaciondelvertigo.files.wordpress.com/2015/03/tucc3a1n.jpg' alt='Tucán' />
                <figcaption>Tucán</figcaption>
            </figure>
            <p>El plato con la bebida sale unos 20 pesos bolivianos (2’55€). El cambio respecto a Paraguay es notable, todo es mucho más barato. (1€ → 7,85 pesos bolivianos). Por ejemplo, en el mercado, cuatro plátanos grandes me costó sólo un boliviano (0’15€).</p>
            <p>En el bus de Asunción conocí a una pareja viajera, Rocío (hispanoalemana) y Meth (luxemburgúes). Quedamos con ellos y entre charlas y proyecciones de ruta tomamos la chela (cerveza) local, la Huari, y el vino Singani los Parrales. Comimos masaco (platano frito molido con queso) y probamos la Ll’ajua, una salsa picante quechua. Merodeamos por el centro y coincidimos con el carnavalito.</p>
            <p>Antes de despedirme de Diego y su familia me regalaron una chompa (sudadera) con motivos indígenas y un champú artesanal del amazonas Cusi. Una experiencia maravillosa en casa boliviana.</p>
            <p>Rocío, Meth y yo coincidimos en la ruta por Bolivia y decidimos ir juntos. El autostop en Bolivia es algo más complicado. Las carreteras y sus conexiones no son muy buenas, el calor del día es enemigo y mucha gente te pide dinero a cambio de llevarte, debido a que los buses son muy baratos. Pagamos 100 pesos bolivianos (13€) por doce horas de bus para llegar a la capital constitucional, Sucre, a 2750 metros sobre el nivel del mar.</p>
            <figure>
                <img src='https://laemancipaciondelvertigo.files.wordpress.com/2015/03/sucre2.jpg' alt='Sucre' />
                <figcaption>Sucre</figcaption>
            </figure>
            <p>Nos quedamos en el Hostel 7 patas por 38bs la noche (4,90€). Un albergue enorme, céntrico, habitaciones grandes y camas cómodas. Durante dos días en la ciudad, subimos al mirador, visitamos el interesante museo de arte indígena y pateamos el pequeño centro.</p>
            <p>Almorcé dos veces en el famoso mercado. La primera vez, un grandísimo plato de milanesa con arroz y verduras, por sólo 12bs (1’55€). La segunda, carne con fideos y ensalada, cocacola incluido, también 12 bs. Además de muchísimas especias, artículos de hogar, artesanías, el mercado tiene una sección de fruta y jugos muy interesante para poner a prueba nuestro paladar.</p>
            <p>De nuevo aparecieron lindas casualidades en mi camino. Coincidí con una pareja francesa que conocí en Buenos Aires y con otra pareja teatral (Compañía Mamelucos Circo Teatro) que conocí en San Miguel de Tucumán. A éstos últimos los vi actuar por la noche y salimos juntos a cenar mientras nos contábamos de nuestros viajes.</p>
            <p>Llegamos a Potosí tras tres horas de viaje por sólo 20 pesos bolivianos (2’55€). La recepción en las terminales son muy informales. Apenas está informatizado y los andenes se llenan de señoras vendiéndote los pasajes a grito pelado. Además de muchísima venta ambulante. Frutos secos, empanadas, bebidas, helados…todo por un par de pesos. La ciudad de Potosí se encuentra a 4000 metros. Allí sufrí un poco el mal de altura, un cansancio inusual y pequeñas faltas de aire, así que compramos hoja de coca para aliviar. Nos salió 35 pesos bolivianos la habitación. Visitamos el mercado y subimos al mirador (temporalmente cerrado por obras).</p>
            <p>En las ciudades bolivianas se forma una curiosa mezcla de indígenas y turistas extranjeros. Éstos últimos resaltamos por nuestra apariencia, pero siempre acogidos con mucha simpatía y ayuda por la gente local. Las calles se llenan de mujeres trabajando y vendiendo productos. Su vestimenta varía dependiendo de la zona geográfica. Son vestidos de muy difícil confección, con lanas de llama, vicuña u oveja, con fabulosas mezclas de colores y patrones geométricos. Dependiendo de los colores y formas, se puede diferenciar de que ciudad del país provienen, y también distinguir a los quechuas, aymaras, urus, guaranís y demás comunidades indígenas.</p>
            <figure>
                <img src='https://laemancipaciondelvertigo.files.wordpress.com/2015/03/mujeres.jpg' alt='Indígenas' />
                <figcaption>Mujeres indígenas</figcaption>
            </figure>
            <figure>
                <img src='https://laemancipaciondelvertigo.files.wordpress.com/2015/03/museo-arte-indigena-sucre.jpg' alt='Indígenas' />
                <figcaption>Museo de arte indígena</figcaption>
            </figure>
            <p>Pagamos 25 bs para llegar Uyuni, un pueblecito en medio de la nada con muchos turistas de tránsito solo para el Salar. El camino se resume en paisajes con grandes montañas, zona arqueológicas y llamas. Me quedé en el Hostel El viajero. Por 45 bs, algo precario, con enchufes que daban miedo y con cobro por parte de la dueña de hasta el papel higiénico. A la noche cenamos en un restaurante en el que una niña de doce años era la encargada de anotar, servir y cobrar, bajo todo el asombro de los clientes.</p>
            <p>La duración de la excursión al Salar fue de tres días y dos noches, con transporte, tres comidas incluidas cada día y alojamiento. Todo por unos 750 bolivianos (98€). Hubo personas de nuestro mismo grupo que llegó a pagar 900. En este país es usual regatear casi todo.</p>
            <p>Lo primero que hicimos fue visitar el cementerio de trenes. Allí tuve otro reencuentro viajero, con un grupo de franceses que conocí en Buenos Aires. Nos pusimos en marcha hacia el Salar y tuvimos el primer contratiempo, pues el 4×4 pinchó una rueda. Llegamos un poco tarde al museo de sal, donde nos explicaron cómo la fabricaban con yodo y pudimos almorzar en una casa entera construida del salitre. A la tarde llegamos al gran atractivo de la excursión, el Salar, el mayor desierto de sal con más de 10.000 km cuadrados. Su origen es causa de la evaporación de un mar interno en lo que hoy es Bolivia. Visitamos la parte mojada y la seca, además del hotel Playa Blanca, el único hotel dentro del Salar. El efecto óptico (depende del clima) es espectacular, no hay horizonte, y los reflejos en el agua son preciosos.</p>
            <figure>
                <img src='https://laemancipaciondelvertigo.files.wordpress.com/2015/02/dsc_4566.jpg' alt='Salar de Uyuni' />
                <figcaption>Salar de Uyuni</figcaption>
            </figure>
            <figure>
                <img src='https://laemancipaciondelvertigo.files.wordpress.com/2015/03/hotel-de-sal-playa-blanca.jpg' alt='Hotel de sal Playa Blanca' />
                <figcaption>Hotel de sal Playa Blanca</figcaption>
            </figure>
            <figure>
                <img src='https://laemancipaciondelvertigo.files.wordpress.com/2015/03/6.jpg' alt='Playa Blanca' />
                <figcaption>Playa Blanca</figcaption>
            </figure>
            <p>Nos hospedamos en el pueblito de San Cristóbal. Por la mañana partimos y el coche que iba delante nuestra rompió la correa, por lo que demoramos una hora y media. Visitamos el Cerro Corina, donde se pueden vislumbrar hasta tres tipos flamencos, además de muchas llamas y vicuñas. Llegamos a la preciosa laguna colorada y a la laguna blanca, pero no pudimos disfrutar de la laguna verde; el clima y el viento no fueron favorables. Descansamos en una especie de campamento en medio de la nada. Los del tour nos invitaron a una botella de vino y partimos con pocas horas de sueño a las 4 de la madrugada. Vimos mientras amanecía las fumarolas Sol de mañana, en la zona de actividad volcánica. Después, llegamos a las aguas termales a las 7 de la mañana, donde me di un baño totalmente regenerador. Por último, antes de almorzar vimos el Desierto Dalí y el Valle de piedras. Una genial excursión, quizá los 100€ mejor invertidos en mi vida.</p>
            <figure>
                <img src='https://laemancipaciondelvertigo.files.wordpress.com/2015/03/9.jpg' alt='Fumarolas Sol de Mañana' />
                <figcaption>Fumarolas Sol de Mañana</figcaption>
            </figure>
            <figure>
                <img src='https://laemancipaciondelvertigo.files.wordpress.com/2015/03/10.jpg' alt='Fumarolas Sol de Mañana' />
                <figcaption>Valle de piedras</figcaption>
            </figure>
            <p>Dejamos a una parte del grupo en la frontera con Chile y volvimos a Uyuni, ocho horas de trayecto. Ya en Uyuni pagamos 100 bolivianos por una semicama dirección La Paz. Fue un engaño de la agencia, pues no era directo como nos dijeron, y nos enteramos por gente local que haciendo escala en Oruro salía por la mitad. A la madrugada, el bus se estropeó y nos dejó una hora tirados hasta que lograron repararlo.</p>
            <p>Llegamos a La Paz, la capital política, a 3500 metros sobre el mar. Cansadísimos, nos albergamos en el Full hostel, en el centro. Con tres camas para nosotros en una habitación de cinco, por 40 pesos bolivianos (5,30€) cada uno. Eso sí, la cocina hecha un desastre, sin platos si quiera. Visitamos el mirador, el centro, los muchos puestos de artesanías locales y los enormes mercados, donde probamos los Ispis, muy parecido a los boquerones.</p>
            <p>El calor insoportable que hacía en Santa Cruz queda atrás, cuando cae la noche hace frío y la lluvia hace su aparición al menos una vez al día. También compré Mentisan, un ungüento de más de 70 años de aceites esenciales que se fabrica en los Andes bolivianos. Debido a su múltiples usos, es muy frecuente en las familias bolivianas.</p>
            <figure>
                <img src='https://laemancipaciondelvertigo.files.wordpress.com/2015/03/la-paz.jpg' alt='La Paz' />
                <figcaption>La Paz</figcaption>
            </figure>
            <p>Hice la excursión de la Ruta de la muerte en bicicleta, también conocida como el Camino a los Yungas, o como la carretera más peligrosa del mundo. A 4700 metros de altitud, desde la Cumbre de la muerte, se baja hasta los 1200 en el transcurso hasta Yolosa, sin apenas guardaraíles en la ruta. El trayecto entero es de tierra y piedras, estrecho y con curvas de hasta 180 grados. La caída en muchos puntos es de 800 metros. Hasta 2006, morían alrededor de 100-150 personas al año. Desde que existe otra vía alternativa, ya pocos la usan y los fallecidos rondan los 30-40 anuales, casi ninguno ciclista.</p>
            <figure>
                <img src='https://laemancipaciondelvertigo.files.wordpress.com/2015/03/ruta-de-la-muerte-6.jpg' alt='Ruta de la muerte' />
                <img src='https://laemancipaciondelvertigo.files.wordpress.com/2015/03/ruta-de-la-muerte-4.jpg' alt='Ruta de la muerte' />
                <figcaption>Imágenes de la Ruta de la muerte</figcaption>
            </figure>

            <p>El paquete me salió 330 bs (44€) (+ 25bs en puesto policial). Incluye transporte, equipo (bicicleta de montaña, casco, coderas, rodilleras, chaleco reflectante), desayuno, almuerzo buffet, piscina (toalla y champú), camiseta y DVD. La ruta la haces con un guía que marca el camino y un coche escoba cerrando el grupo. Empezamos bien temprano, y a los nervios se le sumaron que no paraba de nevar. Bajamos un poco con la furgoneta donde apenas ya llovía, por precaución, y comenzamos la ruta en carretera, rápido pero segura. A la hora, después de almorzar, empezamos la ruta sin asfaltar. Casi dos horas de bajada entre descansos y fotografías donde la adrenalina se impone y los paisajes te dejan boquiabierto.</p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/c-zgOAC0QNE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

            <p>Al día siguiente salí temprano a Copacabana en bus por 35 bs. Se hace una parada en San Pablo de Tiquina, donde hay control policial y se toma un barco para cruzar por 2 pesos, bus vacío en lancha a parte. Llegué a la Isla del Sol por 20 bs, donde me reuní con Mett y Rocío.</p>
            <p>Recorrimos la parte norte tras subir los 240 escalones de la Isla. Cené la típica sopa Quinoa, más trucha y postre helado. La Sagrada Isla, bañada por el lago Titicaca, es un paraíso a parte. A la noche el cielo es estrelladísimo, hay hospedajes baratos (4€ la noche) y con vistas increíbles. Al segundo día, hicimos la ruta a pie hacia la parte norte. 15 kilómetros entre ida y vuelta, en el que hay que pagar 15 pesos que son destinados a escuelas y cuidado de ancianos. Recorrimos el Camino del Inca, con la Chakana (ruinas) y la piedra sagrada, una maravilla de trayecto. Nos encontramos a muchos niños volviendo del colegio, todos simpatiquísimos y adorables, además de mucha flora y animales diversos (jabalíes, ovejas, burros, llamas…).</p>
            <figure>
                <img src='https://laemancipaciondelvertigo.files.wordpress.com/2015/03/camino-del-inca.jpg' alt='Ruta de la muerte' />
                <figcaption>Camino del Inca</figcaption>
            </figure>
            <figure>
                <img src='https://laemancipaciondelvertigo.files.wordpress.com/2015/03/isla-del-sol-parte-norte.jpg' alt='Ruta de la muerte' />
                <figcaption>Isla del Sol, parte norte</figcaption>
            </figure>
            <p>A las ocho de la tarde anochece y en la Isla no hay mucha luz, por lo que hay poco que hacer. Muy cansados, nos acostamos pronto y madrugamos para subir al primer ferry destino Copacabana, para allí salir en bus hacia Puno, la primera ciudad del Perú.</p>

            <h3 id='paraguayGalleryBelow'>Galería de imágenes</h3>
            <GalleryComponent arrayPhotos={boliviaPhotos} />
            <Comments />
        </section>
    )
}

export default Bolivia;