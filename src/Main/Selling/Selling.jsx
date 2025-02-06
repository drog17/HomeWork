import './selling.scss'
import shirt1 from './img/Frame 32 (1).png';
import shirt2 from './img/Frame 33 (1).png';
import shorts from './img/Frame 34 (1).png';
import jeans from './img/Frame 38 (1).png';
import stars4 from './img/Frame 39.png'
import stars3 from './img/Frame 35.png'



const Selling = () => {
    return (
        <section className='selling'>
            <div className="selling__container container">
                <h2>NEW ARRIVALS</h2>
                <div className="selling__menu">
                    <div className="selling__card">
                        <img src={shirt1} alt="image" />
                        <div className="rate">
                            <p>T-SHIRT WITH TAPE DETAILS</p>
                            <img src={stars4} alt="" />
                        </div>
                        <span>$120</span>
                    </div>
                    <div className="selling__card">
                        <img src={shirt2} alt="image" />
                        <div className="rate">
                            <p>SKINNY FIT JEANS</p>
                            <img src={stars3} alt="" />
                        </div>
                        <span>$240</span>
                    </div><div className="selling__card">
                        <img src={shorts} alt="image" />
                        <div className="rate">
                            <p>CHECKERED SHIRT</p>
                            <img src={stars4} alt="" />
                        </div>
                        <span>$180</span>
                    </div>
                    <div className="selling__card">
                        <img src={jeans} alt="image" />
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

export default Selling

