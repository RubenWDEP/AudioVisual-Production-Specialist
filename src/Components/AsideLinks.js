import './AsideLinks.css';
import { asideData } from '../Photos-Data/asideData.js';


function AsideLinks() {
    return (
        <aside className='asideInstagramLinks'>
            <h4>Instagram</h4>
            <ul>
                {asideData.map((result, index) => {
                    return <li key={index}>
                        <a href={result.url} target="_blank" rel='noreferrer'><img className='linkInstagram' src={result.img} alt='Instagram references' /></a>
                    </li>
                })}
            </ul>
        </aside>
    )
}


export default AsideLinks;