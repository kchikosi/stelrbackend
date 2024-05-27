import TopNav from './top-nav.tsx'
import BottomNav  from '../bottom-nav/bottom-nav.tsx'
import Slider from '../slider/slider.tsx'

export default function About() {
    return (
        <>
        <TopNav/>
        <div id="about">
        <h1>About</h1>
            <div className="swiper-content">
                <Slider/>
            </div>
        </div>
        <BottomNav/>
        </>
    );
}