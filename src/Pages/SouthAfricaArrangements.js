import { Link } from 'react-router-dom';
import africamap from '../images/africamap.jpg';
import './SouthAfricaArrangements.css';


function SouthAfricaArragements() {
    return (
        <section className='southAfricaArrangement'>
            <h2>Preparativos</h2>
            <p>Para esta ruta seguí los mismos <Link to='/mytrips/southamerica/arragement'>pasos previos</Link> que mi viaje a Sudamérica, pero con una búsqueda más exhaustiva de información. Cuando se habla de África se generaliza bastante, pero es imposible englobar 54 países, en una extensión de 30.272.922 km² (Europa tiene 10.180.000 km²) con más de 1.500 lenguas distintas.</p>
            <p>Me organicé con un índice de cosas por hacer y un presupuesto en base a iniciar el viaje lo más pronto posible:</p>
            <ul>
                <li>Vuelos</li>
                <li>Visados</li>
                <li>Vacunas</li>
                <li>Seguro de viaje</li>
                <li>Indagar <a href='https://www.workaway.info/' target='_blank' rel='noreferrer'>workaway</a> y trazar ruta</li>
                <li>Mochila</li>
                <li>Equipo audiovisual</li>
            </ul>
            <p>Todo lo fui haciendo muy poco a poco. Me informé sobre los diferentes visados. La media media de cada uno 60€, aunque en algunos países siendo español es gratis (Marruecos, Namibia, Sudáfrica y Botsuana) y en otros pueden hacértelo en la misma frontera (Zimbabwe y Tanzania). También es recomendable inscribirse en el <a href='https://registroviajeros.exteriores.gob.es/' target='_blank' rel='noreferrer'>Registro de viajeros</a>. El vuelo más barato lo encontré en <a href='https://www.skyscanner.es/?previousCultureSource=GEO_LOCATION&redirectedFrom=www.skyscanner.net' target='_blank' rel='noreferrer' >Skyscanner</a>. En mi caso, Sevilla-París-Cape Town por 360€.</p>
            <p>Me informé en el centro de <a href='https://www.sanidad.gob.es/profesionales/saludPublica/sanidadExterior/salud/centrosvacu.htm' target='_blank' rel='noreferrer'>vacunación internacional</a> más cercano sobre las vacunas obligatorias y recomendadas. Es necesario acudir al menos seis semanas antes del inicio del viaje.</p>
            <img src='https://laemancipaciondelvertigo.files.wordpress.com/2018/05/img_2876.jpg' alt='Documentos oficiales' />
            <p>Las vacunas obligatorias coinciden en la mayoría de países. La fiebre amarilla, obligatoria, tiene un costo de 18’50€. Las revacunaciones o dosis de recordatorio son 9€. Hepatitis A (45€), meningitis ACYW135 (18’89€), rabia (18’89€), cólera (15€), fiebre tifoidea (15€) gripe (7’90€), hepatitis B, tétanos y polio son las recomendadas. Especial atención a la malaria, hay que suministrar el fármaco (Malarone, Lariam) semanalmente antes, durante y después de pasar por una zona de riesgo. En <a href='https://www.fitfortravel.nhs.uk/home.aspx' target='_blank' rel='noreferrer'>Fit for travel</a> desglosan cada país con sus advertencias, recomendaciones y nuevos brotes, actualizado al día.</p>
            <p>Indagué por internet y locales cerca de mi ciudad un seguro de viaje que se adecuara a lo que más necesitaba. La media de un seguro de larga duración (seis meses) son unos 400€. Este precio cambia según las variantes que contrates.</p>
            <p>En mi mochila de 70L apenas hay hueco para la ropa. Las prioridades son:</p>
            <ul>
                <li>Documentación: pasaporte, visados, DNI, tarjeta sanitaria, cartilla de vacunación, seguro de viaje, cuaderno de viaje, fotos carnet, tarjeta de crédito y tarjeta prepago.</li>
                <li>Botiquín: medicinas específicas recomendadas (por ej. Lariam), antibióticos, antisépticos, antidiarreicos, antieméticos, pastillas potibilizadoras de agua, crema solar, repelente, mosquitera, vendas, betadine y tijeras.</li>
                <li>Equipo audiovisual: Mochila,  cámara, objetivos, tarjetas, baterías, ordenador portátil y cargadores.</li>
            </ul>
            <p>El resto, poca ropa, saco de dormir pequeño, toalla pequeña, jabón para lavar a mano, buen calzado, neceser básico, un cargador portátil universal, luz frontal, impermeable para las mochilas y una riñonera. Móvil con aplicaciones útiles como Google Maps, Conversor de divisas, Couchsurfing, Hostelworld, Uber y un traductor offline.</p>
            <p>La ruta general (siempre abierta a la improvisación) la hice para llevarla a cabo toda en autostop o transporte público. Únicamente necesitaría un vuelo para ir y regresar de España.</p>
            <figure>
                <img src={africamap}
                    alt="Mapa de África" />
                <figcaption>Ruta detallada en <Link to='/mytrips/southafrica'>África del Sur 2018</Link></figcaption>
            </figure>
            <p>Por último, desglosé país a país con lo más importante. Para esto me ayudó mucho las recomendaciones de la página del Ministerio de exteriores. Un ejemplo de la lista:</p>
            <h4 className='southAfricaListExample'>"" Sudáfrica:</h4>
            <ul className='southAfricaListExample' id='southAfricaListExample'>
                <li>Visado: No necesario por motivos de turismo, hasta 90 días. Al menos dos páginas del pasaporte en blanco</li>
                <li>Vacunas: Obligatorias: Fiebre amarilla</li>
                <li>Recomendadas: Tétanos</li>
                <li>Malaria: Alto riesgo en noreste. Murina, Limpopo, Mpumalanga, Kwazulu-Natal. Ríos Malopo y Orange</li>
                <li>Se encuentra principalmente en zonas por debajo de los mil metros.</li>
                <li>Idioma: Inglés</li>
                <li> Moneda: Rand sudafricano. 1€ ."&gt" 15,7 ZAR</li>
                <li>Zonas de riesgo: Apartado «Seguridad» de las recomendaciones de viaje del Ministerio de exteriores</li>
                <li>Contactos: Aquí nombro los conocidos en el país con sus respectivas direcciones y números</li>
                <li>Ruta y cosas por ver: Ciudad del Cabo, Ruta Jardín, Cabo de Buena Esperanza, Gugulethu, Franschhoeck, Bettysbaai, Walker Bay Nature Reserve, Port Elizabeth y Sabi Sand Game Reserve</li>
                <li>Workaway: Aquí nombro los contactos de proyectos locales de interés ""</li>
            </ul>
            <p>Ésto es un resumen de lo que llevo en mi cuaderno de bitácora. En él me explayo en puntos como las prevenciones de seguridad en cada zona, la posible ruta a seguir y las cosas por ver y hacer.</p>
        </section>
    )
}

export default SouthAfricaArragements;