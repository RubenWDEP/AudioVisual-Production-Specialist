import GalleryComponent from "../Components/GalleryComponent";
import { germanyPhotos } from "../Photos-Data/Photos";


function Germany() {
    return (
        <section className='france'>
            <h2>Alemania</h2>
            <GalleryComponent arrayPhotos={germanyPhotos} />

        </section>
    )
}

export default Germany;