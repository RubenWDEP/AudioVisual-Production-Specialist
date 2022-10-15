import Comments from "../Components/Comments";
import GalleryComponent from "../Components/GalleryComponent";
import { germanyPhotos } from "../Photos-Data/Photos";


function Germany() {
    return (
        <section className='france'>
            <h2>Alemania</h2>
            <GalleryComponent arrayPhotos={germanyPhotos} />
            <Comments />

        </section>
    )
}

export default Germany;