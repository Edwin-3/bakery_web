import React from 'react'
import '../Styles/hero.scss'
import '../Styles/services.scss'
import '../Styles/menu.scss'
import '../Styles/testimony.scss'
import '../Styles/booking.scss'
import '../Styles/footer.scss'
import Img01 from '../assets/Vector1.svg'
import Img02 from '../assets/plate.svg'
import Img03 from '../assets/Vector2.svg'
import Img04 from '../assets/logo.svg'
import Img05 from '../assets/bread.svg'
import Vector3 from '../assets/Vector 3.svg'
import Vector4 from '../assets/Vector 4.svg'
import Vector5 from '../assets/Vector 5.svg'
import Loaf from '../assets/loaf-icon.svg'
import Pie from '../assets/pie-icon.svg'
import Delivery from '../assets/delivery-icon.svg'
import item1 from '../assets/item1.svg'
import item2 from '../assets/item2.svg'
import item3 from '../assets/item3.svg'
import pizza from '../assets/pizza.svg'

const Home = () => {
    return (
        <div>
            <section class="hero-section">
                <img src={Img01} class="vector1-img" />
                <img src={Img02} class="plate-img" />
                <img src={Img03} class="vector2-img" />
                <button class="btn">Make a Reservation</button>
                <div class="hero-content">
                    <img src={Img04} class="logo-img" />
                    <h2>Freshy Baked Daily</h2>
                    <img src={Img05} class="bread-img" />
                </div>
                <div class="hero-text">
                    <hr />
                    <h5>Open Every Day:</h5>
                    <p>Monday-Friday: 6am – 5pm</p>
                    <p> Weekends: 7am – 4pm</p>
                    <button class="btn-2">Make a Reservation</button>
                </div>
            </section>
            <section className='service-section'>
                <div class="service-imgs">
                    <img src={Vector3} class="vector3-img" />
                    <img src={Vector4} class="vector4-img" />
                    <img src={Vector5} class="vector5-img" />
                </div>
                <div class="service-content">
                    <h6>Services</h6>
                    <h3>Our Baking Services</h3>
                    <div class="service-wrapper">
                        <img src={Loaf} />
                        <div class="service-text">
                            <h4>Daily Loaves</h4>
                            <p>Curabitur aliquet quam id dui posuere blandit. Proin
                                eget tortor risus. Mauris blandit aliquet elit, eget
                                tincidunt nibh pulvinar.</p>
                        </div>
                    </div>
                    <div class="service-wrapper">
                        <img src={Pie} />
                        <div class="service-text">
                            <h4>Custom Cakes & Pastries</h4>
                            <p>Curabitur aliquet quam id dui posuere blandit. Proin
                                eget tortor risus. Mauris blandit aliquet elit, eget
                                tincidunt nibh pulvinar.</p>
                        </div>
                    </div>
                    <div class="service-wrapper">
                        <img src={Delivery} />
                        <div class="service-text">
                            <h4>Catering & Delivery</h4>
                            <p>Curabitur aliquet quam id dui posuere blandit. Proin
                                eget tortor risus. Mauris blandit aliquet elit, eget
                                tincidunt nibh pulvinar.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='menu-section'>
                <h4>New flavors</h4>
                <p>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.
                </p>
                <div className='menu-items'>
                    <div className='item'>
                        <img src={item1} />
                        <h5>Breve</h5>
                        <h6>200Ksh</h6>
                    </div>
                    <div className='item'>
                        <img src={item2} />
                        <h5>Breve</h5>
                        <h6>200Ksh</h6>
                    </div>
                    <div className='item'>
                        <img src={item3} />
                        <h5>Breve</h5>
                        <h6>200Ksh</h6>
                    </div>
                </div>
                <div className='arrow-left'>
                    {'<'}
                </div>
                <div className='arrow-right'>
                    {'>'}
                </div>
                <button className='btn'>Make a Reservation</button>
            </section>
            <section className='testimony-section'>
                <p>"Proin eget tortor risus. Lorem ipsum
                    dolor sit amet, consectetur adipiscing
                    elit. Proin eget tortor risus."
                </p>
            </section>
            <section className='booking-section'>
                <div className='booking-img'>
                    <img src={pizza} />
                </div>
                <div className='booking-form'>
                    <h4>Make a Reservation</h4>
                    <form>
                        <input type='text' name='name' placeholder='Name' />
                        <input type='date' name='date' placeholder='Choose a Day' />
                        <input type='time' name='time' placeholder='Choose your Time' />
                        <input type='email' name='email' placeholder='Email Address' />
                        <input type='number' name='phone' placeholder='Phone No' />
                        <input type='submit ' value='RESERVE' className='btn' />
                    </form>
                </div>
            </section>
            <section className='footer-bg'>
                <div className='footer-section'>
                    <div className='col-1'>
                        <h5>Open Every Day:</h5>
                        <p>
                            Monday-Friday: 6am – 5pm
                        </p>
                        <p>
                            Weekends: 7am – 4pm
                        </p>
                    </div>
                    <div className='col-2'>
                        <h5>Visit Us</h5>
                        <p>1234 Divi St. #1000
                            San Francisco, CA 39513
                        </p>
                    </div>
                    <div className='col-3'>
                        <h5>Contacts</h5>
                        <a>1127 Santa Monica Blvd</a>
                        <a>+254712345678</a>
                        <a>bakery254@gmail.com</a>
                        <div className='socials'>

                        </div>
                    </div>
                    <div className='col-4'>
                        <h5>Subscribe to newsletter</h5>
                        <p>Contact us if you need help with anything.</p>
                        <form>
                            <input type='email' name='email' placeholder='Email Address' />
                            <input type='submit ' value='SUBMIT' className='btn' />
                        </form>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Home