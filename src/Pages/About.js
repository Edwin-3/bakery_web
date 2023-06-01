import React from 'react'
import Img01 from '../assets/Vector1.svg'
import Vector3 from '../assets/Vector 3.svg'
import Vector4 from '../assets/Vector 4.svg'
import Vector2 from '../assets/Vector2.svg'
import Vector6 from '../assets/Vector 6.svg'
import Feather from '../assets/feather.svg'
import item1 from '../assets/item1.svg'

import '../Styles/About_hero.scss'
import '../Styles/About_values.scss'
import '../Styles/About_team.scss'
import '../Styles/About_maps.scss'
import '../Styles/footer.scss'


const About = () => {
    return (
        <div>
            <section className='hero-section'>
                <img src={Img01} className='img-01' />
                <img src={Vector3} className='img-02' />
                <img src={Vector2} className='img-03' />
                <img src={Vector6} className='img-04' />
                <div className='About-hero-content'>
                    <img src={Feather} />
                    <h6>Dedicated Since 2017</h6>

                    <h1>About Us</h1>
                    <p>Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Nulla porttitor
                        accumsan tincidunt. Donec rutrum congue leo eget malesuada. Donec
                        rutrum congue leo eget malesuada. Curabitur non nulla sit amet nisl tempus
                        convallis quis ac lectus. Mauris blandit aliquet elit, eget tincidunt nibh
                        pulvinar a. Vestibulum ac diam sit amet quam vehicula elementu
                    </p>
                    <button>Let's Talk</button>
                </div>
            </section>
            <section className='values-section'>
                <img src={Vector4} className='img-04' />
                <img src={Vector3} className='img-05' />
                <div className='values-content'>
                    <h6>Dedicated Since 2017</h6>
                    <h1>Our Values</h1>
                    <p>Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Nulla porttitor
                        accumsan tincidunt. Donec rutrum congue leo eget malesuada. Donec
                        rutrum congue leo eget malesuada. Curabitur non nulla sit amet nisl tempus
                        convallis quis ac lectus. Mauris blandit aliquet elit, eget tincidunt nibh
                        pulvinar a. Vestibulum ac diam sit amet quam vehicula elementu
                    </p>
                </div>

            </section>
            <section className='team-section'>
                <h4>Meet our team</h4>
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
                    Exercitation veniam consequat sunt nostrud amet.
                </p>
                <div className='wrapper'>
                    <div className='item'>
                        <img src={item1} />
                        <h5>Kiel Ward</h5>
                        <p>Maiores quia et. Explicabo cumque possimus nihil odio.
                            Qui et nihil rerum reiciendis perspiciatis atque itaque odio.
                            Et eligendi nemo velit iste. Accusamus non voluptate in
                            omnis ullam.
                        </p>
                    </div>
                    <div className='item'>
                        <img src={item1} />
                        <h5>Ella Jacobi</h5>
                        <p>Maiores quia et. Explicabo cumque possimus nihil odio.
                            Qui et nihil rerum reiciendis perspiciatis atque itaque odio.
                            Et eligendi nemo velit iste. Accusamus non voluptate in
                            omnis ullam.
                        </p>
                    </div>
                    <div className='item'>
                        <img src={item1} />
                        <h5>Aabel Jacobson</h5>
                        <p>Maiores quia et. Explicabo cumque possimus nihil odio.
                            Qui et nihil rerum reiciendis perspiciatis atque itaque odio.
                            Et eligendi nemo velit iste. Accusamus non voluptate in
                            omnis ullam.
                        </p>
                    </div>
                </div>
            </section>
            <section className='maps-section'>
                <div className='maps-content'>
                    <h1>Our Location</h1>
                    <p>1127 Santa Monica Blvd
                        Santa Monica, CA 90401, USA
                    </p>
                    <p>Tel: +254712345678</p>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor
                        do amet sint. Velit officia consequat duis enim velit mollit.
                        Exercitation veniam consequat sunt nostrud amet.
                    </p>
                </div>
                <div className='maps-view'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d959.5218404398227!2d36.82490364557619!3d-1.3150105689443092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2ske!4v1685630331248!5m2!1sen!2ske"
                        width="600"
                        height="550"
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade">
                    </iframe>
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

export default About