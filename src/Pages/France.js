import Comments from '../Components/Comments';
import GalleryComponent from '../Components/GalleryComponent';
import { francePhotos } from '../Photos-Data/Photos';


function France() {
    const sectionCommentName = "france";
    return (
        <section className='france'>
            <h2>Francia</h2>
            <GalleryComponent arrayPhotos={francePhotos} />
            <Comments sectionCommentName={sectionCommentName} />
        </section>
    )
}

export default France;