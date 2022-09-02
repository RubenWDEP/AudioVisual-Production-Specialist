import GalleryComponent from '../Components/GalleryComponent';
import { francePhotos } from '../Photos-Data/Photos';


function France() {
    return (
        <section className='france'>
            <h2>Francia</h2>
            <GalleryComponent arrayPhotos={francePhotos} />
        </section>
    )
}

export default France;