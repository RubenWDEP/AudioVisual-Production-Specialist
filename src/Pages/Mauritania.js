import Comments from '../Components/Comments';
import GalleryComponent from '../Components/GalleryComponent';
import { mauritaniaPhotos } from '../Photos-Data/Photos';
import './Mauritania.css'

function Mauritania() {
    return (
        <section className='mauritania'>
            <h2>Mauritania</h2>
            <GalleryComponent arrayPhotos={mauritaniaPhotos} />
            <Comments />
        </section>
    )
}

export default Mauritania;