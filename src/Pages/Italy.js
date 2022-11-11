import Comments from "../Components/Comments";
import GalleryComponent from "../Components/GalleryComponent";
import { italyPhotos } from "../Photos-Data/Photos";


function Italy() {
    const sectionCommentName = "italy";
    return (
        <section className='italy'>
            <h2>Italia</h2>
            <GalleryComponent arrayPhotos={italyPhotos} />
            <Comments sectionCommentName={sectionCommentName} />
        </section>
    )
}

export default Italy;