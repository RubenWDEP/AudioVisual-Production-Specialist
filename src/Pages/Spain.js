import { spainPhotos } from '../Photos-Data/Photos'
import GalleryComponent from '../Components/GalleryComponent';
import Comments from '../Components/Comments';


function Spain() {
    const sectionCommentName = "spain";
    return (
        <section className='spain'>
            <h2>España</h2>
            <GalleryComponent arrayPhotos={spainPhotos} />
            <Comments sectionCommentName={sectionCommentName} />
        </section>
    )
}

export default Spain;