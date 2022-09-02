import './SummaryVideo.css';


function SummaryVideo() {
    return (
        <section className='summaryVideoMapSection'>
            <h2>Video resumen</h2>
            <iframe className='summaryVideoMap' width="560" height="315" src="https://www.youtube.com/embed/aaqzd2Xq16w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

        </section>
    )
}

export default SummaryVideo;