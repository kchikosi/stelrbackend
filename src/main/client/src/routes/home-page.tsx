import Slider from './slider/slider.tsx'

export default function Home() {
    return (
    <>
    <div id="home">
    <p>
        <b> Global Lending and Payments Simplified </b>
    </p>
    <p>
        Connecting budding entrepreneurs with potential investors seemlessly. Discover, connect and fuel innovation with ease, all in one platform.
    </p>
    <div>
        <button>
          Seeking companies
        </button>
        <button>
            Seeking Investors
        </button>
    </div>
    <br/>
    <Slider/>
    <br/>
    </div>
    </>
    );
}