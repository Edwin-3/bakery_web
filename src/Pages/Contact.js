import React from 'react'
import Feather from '../assets/feather.svg'
import '../Styles/Contact.scss'
import '../Styles/footer.scss'


const Contact = () => {
    return (
        <div>
            <div className='contact-container'>
                <h6>Contact Us</h6>
                <img src={Feather} />
                <h1>Get In Touch!</h1>
                <div className='contact-form'>
                    <form>
                        <input type='text' name='name' placeholder='Name' />
                        <input type='email' name='email' placeholder='Email Address' />
                        <input type='number' name='phone' placeholder='Phone No' />
                        <textarea rows={10} placeholder='Type message here...' />
                        <input type='submit ' value='RESERVE' className='button-form' />
                    </form>
                </div>
            </div>
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

export default Contact