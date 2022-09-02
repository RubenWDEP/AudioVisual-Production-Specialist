import './Europe.css';
import RoutePlan from './RoutePlan';


function Europe() {
    return (
        <section className='europe'>
            <h2>Europa Occidental 2013-14</h2>
            <div>
                <iframe src="https://www.tripline.net/map?tripId=4766172755361011B5B88EC0EFD75F36&onSite=0" frameBorder="0" webkitallowfullscreen="true" mozallowfullscreen='true' allowFullScreen title='Europe Map'></iframe>
            </div>
            <iframe src="https://www.tripline.net/trip?id=4766172755361011B5B88EC0EFD75F36&list=1" /* width="600" */ height="1000" frameBorder="0" title='Europe Map'></iframe>
            <RoutePlan />
        </section>
    )
}

export default Europe;