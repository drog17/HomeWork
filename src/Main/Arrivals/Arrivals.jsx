import './arrivals.scss'
import shirt1 from './img/Frame 32.png'
import jeans from './img/Frame 33.png'
import shirt2 from './img/Frame 34.png'
import shirt3 from './img/Frame 38.png'
import stars4 from './img/Frame 39.png'
import stars3 from './img/Frame 35.png'




const Arrivals = () => {
    return (
        <section className='arrivals'>
            <div className="arrivals__container container">
                <h2>NEW ARRIVALS</h2>
                <div className="arrivals__menu">
                    <div className="arrivals__card">
                        <img src={shirt1} alt="image" />
                        <div className="rate">
                            <p>T-SHIRT WITH TAPE DETAILS</p>
                            <img src={stars4} alt="" />
                        </div>
                        <span>$120</span>
                    </div>
                    <div className="arrivals__card">
                        <img src={jeans} alt="image" />
                        <div className="rate">
                            <p>SKINNY FIT JEANS</p>
                            <img src={stars3} alt="" />
                        </div>
                        <span>$240</span>
                    </div><div className="arrivals__card">
                        <img src={shirt2} alt="image" />
                        <div className="rate">
                            <p>CHECKERED SHIRT</p>
                            <img src={stars4} alt="" />
                        </div>
                        <span>$180</span>
                    </div>
                    <div className="arrivals__card">
                        <img src={shirt3} alt="image" />
                        <div className="rate">
                            <p>SLEEVE STRIPED T-SHIRT</p>
                            <img src={stars4} alt="" />
                        </div>
                        <span>$130</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Arrivals
