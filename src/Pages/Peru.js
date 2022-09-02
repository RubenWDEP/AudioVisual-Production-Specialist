import GalleryComponent from '../Components/GalleryComponent';
import { peruPhotos } from '../Photos-Data/Photos';
import './Peru.css';

function Peru() {
    return (
        <section className='peru'>
            <h2>Perú</h2>
            <a id='peruAnchor' href='#peruGalleryBelow'>(galería de fotos a final de página)</a>
            <iframe src="https://www.google.com/maps/embed?pb=!1m54!1m8!1m3!1d15962122.998583883!2d-74.52741!3d-12.382752!3m2!1i1024!2i768!4f13.1!4m43!3e0!4m5!1s0x915d6985f4e74135%3A0x1e341dd8f24d32cf!2zUHVubywgUGVyw7o!3m2!1d-15.8402218!2d-70.0218805!4m5!1s0x916dd5d826598431%3A0x2aa996cc2318315d!2zQ3VzY28sIFBlcsO6!3m2!1d-13.53195!2d-71.96746259999999!4m5!1s0x91424a487785b9b3%3A0xa3c4a612b9942036!2zQXJlcXVpcGEsIFBlcsO6!3m2!1d-16.4090474!2d-71.53745099999999!4m5!1s0x9110e2c3cec74f3d%3A0x5ce1a2b590e67ecd!2zSWNhLCBQZXLDug!3m2!1d-14.07546!2d-75.7341811!4m5!1s0x911062d8942674f3%3A0xb292160966de04cb!2zUGFyYWNhcywgUGVyw7o!3m2!1d-13.8409149!2d-76.2508304!4m5!1s0x9105c8db1e539667%3A0x4f45538aa07bda29!2sCercado%20de%20Lima%2C%20Per%C3%BA!3m2!1d-12.046374!2d-77.0427934!4m5!1s0x91ad3d7fe3fae92d%3A0xd3bc7d125d4e8508!2zVHJ1amlsbG8sIFBlcsO6!3m2!1d-8.106042799999999!2d-79.0329727!5e0!3m2!1ses!2ses!4v1661956196673!5m2!1ses!2ses" width="600" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='Peru Map'></iframe>
            <p>Llegamos a Puno tras pasar la aduana sin problemas. Nos advirtieron que sería muy complicada, pero debido a una huelga todo los trámites los realizaron muy livianamente.</p>
            <p>Visitamos la Isla de los Uros. 87 islas flotantes construidas artificialmente con las plantas de los totorales. En éste pueblo ancestral nos explicaron su gestión, su sencillez de vida y nos invitaron a entrar a sus casas y enseñarnos y probarnos su indumentaria. Una de las experiencias que más me ha dado que pensar.</p>
            <figure>
                <img src='https://laemancipaciondelvertigo.files.wordpress.com/2015/03/isla-gaviota-de-los-uros.jpg' alt='Isla Gaviota' />
                <figcaption>Isla Gaviota</figcaption>
            </figure>
            <p>Nos hospedamos en un gran hotel por sólo 20 soles peruanos (5,95€). El Perú es algo más caro que Bolivia, pero sigue siendo muy asequible para el visitante europeo. Un nuevo sol peruano equivale a 3,30 euros.</p>
            <p>Corriendo bajo la lluvia, subimos al bus nocturo hacia Cuzco por sólo 20 soles. Allí llegué al Pakari Travel, el hostel/agencia de turismo donde realicé mi intercambio como workaway. Trabajé seis horas durante seis días a la semana, a cambio de una habitación y el almuerzo. También lo hice en su otro hostel, éste más grande y caro, El Imperio del Sol. Las tareas consistían, mayoritariamente, en recepción, (muy tranquilo, pues en temporada baja no hay mucho movimiento), y limpieza y venta de tours en la plaza o estación de buses a Machu Picchu.</p>
            <p>El hostel se encuentra en pleno centro histórico, a dos cuadras de la conocida Plaza de Armas. Cuzco es la antigua capital del Imperio Inca, y una de las ciudades más importantes de toda Latinoamérica. A 3400 metros sobre el nivel del mar, podemos encontrar una simpatía desbordada en sus calles, envuelta en enormes mercados donde encontrar cualquier cosa. En el centro se concentran muchos interesantes museos, con niños muy agradables que crecen rapidísimo (algunos con siete años vendiendo en la calle, o incluso cantando y tocando solos el ukelele), mayores ofreciendo hospedaje y masajes, predicadores, turistas embobados, y su lindo carnaval, una especie de cabalgata con música local y bailes típicos.</p>
            <figure>
                <img src='https://laemancipaciondelvertigo.files.wordpress.com/2015/03/carnaval-cuzco5.jpg' alt='Carnaval' />
                <figcaption>Carnaval</figcaption>
            </figure>
            <figure>
                <img src='https://laemancipaciondelvertigo.files.wordpress.com/2015/03/cuzco2.jpg' alt='La calle de mi hostel' />
                <figcaption>La calle de mi hostel</figcaption>
            </figure>
            <p>Gracias a que trabajé en dicha agencia de turismo, me hicieron una rebaja para mi excursión a Machu Picchu. Por 263 soles (80€), incluyó transporte, tres comidas, entrada al parque y visita guiada.</p>
            <p>Gracias a que trabajé en dicha agencia de turismo, me hicieron una rebaja para mi excursión a Machu Picchu. Por 263 soles (80€), incluyó transporte, tres comidas, entrada al parque y visita guiada.</p>
            <figure>
                <img src='https://laemancipaciondelvertigo.files.wordpress.com/2015/03/camino-aguas-calientes2.jpg' alt='Camino a Aguas Calientes' />
                <figcaption>Camino a Aguas Calientes</figcaption>
            </figure>
            <p>A las cuatro de la madrugada nos levantamos y fuimos a desayunar. A las cinco, estábamos subiendo la escalera a Machu Picchu, más de mil escalones durante los cuales vimos amanecer. Una vez en Machu Picchu (mal conocido, pues éste es el nombre de una montaña cercana, no de las ruinas incas), tuvimos una hora de visita guiada y unas tres horas para nuestra libertad dentro del parque. Conocimos el Recinto del guardián, el Templo de las tres ventanas, el Templo del Sol, la Roca ceremonial, la roca del Cóndor, el Observatorio astronómico y lo que eran en su tiempo las escuelas, fuentes, la zona agrícola y el sector urbano.</p>
            <figure>
                <img src='https://laemancipaciondelvertigo.files.wordpress.com/2015/03/machu-picchu.jpg' alt='Machu Picchu' />
                <figcaption>Machu Picchu</figcaption>
            </figure>
            <figure>
                <img src='https://laemancipaciondelvertigo.files.wordpress.com/2015/03/templo-sagrado.jpg' alt='Templo sagrado' />
                <figcaption>Templo sagrado</figcaption>
            </figure>
            <p>Toda una sagrada maravilla construida por los Incas a mediados del siglo XV, una ciudadela hermosa, perfectamente pensada y construida en cuanto a posición y estructura, con preciosos paisajes y con un cuidado al detalle.</p>
            <p>Bajamos toda la escalera e hicimos la ruta de casi tres horas hacia Hidroeléctricas, donde nos esperaba la furgoneta. De nuevo, nos llovió por el camino, y la vuelta en coche fue marcada por una intensa niebla a gran altura.</p>
            <p>Después de la visita a Machu Picchu me empapé de historia en el Museo Inka, a dos cuadras de mi hostel. Con transcripciones de hace más de 500 años. Escritos y muestras de su gastronomía, arquitectura, cerámica, medicina, tan avanzada a su tiempo, con muestras de trepanaciones craneanas y momias. Además de textos y representaciones artísticas de la invasión española en el siglo XVI. <a href='http://www.mamacoca.org/feb2002/informe_la_coca_no_es_cocaina.html' target='_blank' rel='noreferrer'>Historia y usos de la hoja de coca</a>, en ritos a los dioses, relaciones personales, medicina, ilustraciones, etc. Debido a que estaba prohibido hacer fotos, sólo pude aprovechar con el móvil cuando el personal de seguridad no miraba.</p>
            <figure>
                <img src='https://laemancipaciondelvertigo.files.wordpress.com/2015/03/img_20150321_155014.jpg' alt='Origen mitológico de los Incas' />
                <figcaption>Origen mitológico de los Incas</figcaption>
            </figure>
            <figure>
                <img src='https://laemancipaciondelvertigo.files.wordpress.com/2015/03/img_20150321_160620.jpg' alt='Templo sagrado' />
                <figcaption>Trepanaciones craneanas</figcaption>
            </figure>
            <figure>
                <img src='https://laemancipaciondelvertigo.files.wordpress.com/2015/03/img_20150321_155459.jpg' alt='Cerámicas' />
                <figcaption>Cerámicas</figcaption>
            </figure>
            <p>Cerca de mi hostel, se encuentra esta pared rompecabezas, una muestra de la perfección de los muros incaicos, que cubren buena parte de la ciudad. Llegaron a tallar una piedra de doce ángulos.</p>
            <figure>
                <img src='https://laemancipaciondelvertigo.files.wordpress.com/2015/03/dsc_5570.jpg' alt='Muros incaicos' />
                <figcaption>Muros incaicos</figcaption>
            </figure>
            <p>Durante mi estadía en el barrio de San Cristóbal de un mes me dio tiempo de hacer muchas amistades. Me despedí de Mett y Rocío, que continuaron hacia el norte, pero me reencontré con dos amigos suizos del Salar de Uyuni. Además, entablé mucha conversación con gente de Cuzco, así como una bonita amistad con una señora vendedora de impermeables y con el resto de voluntarios del hostel. Moría de ganas de establecerme en una ciudad como ésta. Poder «trabajar» ella, sentirme uno más, hacer buenos amigos y perderme en sus rincones más escondidos. La grandeza de Plaza de Armas, sus calles de piedra, el choclo, el chilcano, el cebiche, el pisco, las paredes incaicas. Indagué sus iglesias (algunas con el curioso cartel de «Apaguemos el celular, Dios habla al corazón no te va a llamar por teléfono»). Aprendí de su gastronomía gracias a los dueños del hostel, a su museo del chocolate y a los mercados de domingo y su inmensa variedad de fruta. La única pega de la urbe es la escasez de papeleras. Aquí la basura se acumula en un rincón y cada mañana pasa el servicio municipal a recogerla. Visité bares con buena música en directo. Fui testigo de diversas manifestaciones, por defensa del agua o contra el maltrato de animales, así como la Semana Santa y algunos desfiles militares. Me acostumbré al soroche (mal de altura), al calor del día y al frío nocturno. Además, a dos minutos de donde me hospedé, gozaba de éstas tremendas vistas.</p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/rb5KLe3p6pA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <p>Pocos días antes de irme de la ciudad, unos okupas entraron en el hostel El Imperio. La trifulca sucedió por problema de pagos por parte de los dueños. Me vi en medio de una pelea entre insultos, una agresión a una mujer embarazada con la policía impasible, lanzamiento de pintura desde ventana e incluso un intento de incendio del edificio. Menos mal que no me tocó a mi el turno de voluntariado durante la escena, pues habría perdido varias horas en comisaría  a parte de verme envuelto en juicio.</p>
            <p>Me reencontré con Jesús y Blanca, una pareja amiga, (ya nos vimos en Buenos Aires) y decidimos ir a Arequipa el sábado en bus. Allí me acogió en calidad de couchsurfing Pedro, que ya tenía en su casa a nueve viajeros más. Me tocó dormir al lado de los gallos de pelea, que empezaron a cantar a eso de las cuatro de la mañana. Residía en las afueras, pero un taxi de más de veinte minutos sólo me costaba 12 soles (3’40€), y un bus urbano 80 centavos (0,25€). Estuvimos día y medio, durante los cuales visitamos el centro, alguna iglesia y el mirador.</p>
            <p>Fuimos en bus nocturno hacia Ica. Llegamos a la costa en busca de playa, concretamente a Paracas (en quechua, viento de arena), donde un hotel con piscina nos costó sólo 30 soles (9€). Almorzamos en la costa, un menú de pescado por 15 soles (4’50€).</p>
            <figure>
                <img src='https://laemancipaciondelvertigo.files.wordpress.com/2015/03/ceviche.jpg' alt='Ceviche' />
                <figcaption>Ceviche</figcaption>
            </figure>
            <figure>
                <img src='https://laemancipaciondelvertigo.files.wordpress.com/2015/03/jalea-con-chicharrones-de-marisco.jpg' alt='Jalea con chicharrones de marisco' />
                <figcaption>Jalea con chicharrones de marisco</figcaption>
            </figure>
            <p>Llegamos a Lima casi anocheciendo. Nos hospedamos en el centro turístico, cerca de la costa, a 35 soles por noche, desayuno incluido. Tuvimos la suerte de compartir habitación con un tipo bastante inestable. Nos contó que estaba en trámites de separación con su esposa, con un hijo de por medio, y se gastó 400 dólares el día anterior en su salida nocturna. Todo el día medio muerto, buscaba constantemente conversación, rozando el tono depresivo, y llegamos a encontrar cocaína esparcida por el baño.</p>
            <p>Se acabaron las alturas, y volvemos a caminar a nivel del mar. La capital del Perú me recordó a Madrid. Excesivo tráfico, mucha contaminación acústica y ambiental y más de 8 millones de habitantes que forman una urbe enorme y trepidante. Como en la mayoría de las grandes ciudades peruanas, los conductores de auto llevan pegada su mano al claxon. Paseamos por su larga costa y sus multitudinarios parques, tomamos algún que otro chilcano y salimos por la famosa «calle de las pizzas»; una vía llena de pizzerías y locales nocturnos. Allí, mientras consultábamos una carta, dos mujeres intentaron robar a Blanca, registrándole el bolso. De nuevo, la policía, aún presenciando un delito, no movió un dedo. El incidente se saldó con las ladronas desapareciendo de manos vacías haciéndose las locas.</p>
            <p>Tras tres días conociendo Lima, nos quedaba un trayecto de treinta horas de bus hasta la primera ciudad de Ecuador, Guayaquil.</p>

            <h3 id='peruGalleryBelow'>Galería de imágenes</h3>
            <GalleryComponent arrayPhotos={peruPhotos} />
        </section>
    )
}

export default Peru;