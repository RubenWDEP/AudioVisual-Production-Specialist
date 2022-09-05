import { useEffect, useState } from "react"
import Header from "./Header"
import SmallScreenHeader from "./SmallScreenHeader"

const ResponsiveHeader = () => {
    const [width, setWidth] = useState(window.innerWidth)
    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth)
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])
    return (
        <>
            {width >= 769 ? <Header /> : <SmallScreenHeader />}
        </>
    )
}

export default ResponsiveHeader;