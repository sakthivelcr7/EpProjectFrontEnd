import React from 'react'

function ContactComp() {
    return (<div>
                    <div className="row align-items-center">
                        <header className="col-12" style={{"background":"rgb(7,7,100)"}}>
                            <h1 style={{"color":"white"}}>Thank you for your interest</h1>
                            <h4 style={{"color":"white"}}>Enabling the Digital FIRST mindset</h4>
                        </header>
                    </div>
                    <section className="gray-bg"> 
                        <div className="container-fluid py-5"> 
                            <div className="row align-items-stretch"> 
                                <div className="col-12"> 
                                    <h5 className='text-white'>How can we help you?</h5> 
                                    <p  className='text-white'>Submit your details and we’ll contact you right away to discuss your needs in more detail.</p> 
                                    <div className="row"> 
                                    <div className='col-md-8'>
                                    <div>
                                    <form >
                                        <div className='form-group'>
                                            <label className='form-label text-white'>Enter your Name:</label>
                                            <input type='text' name='cname' className='form-control'/>
                                        </div>
                                        <div className='form-group'>
                                            <label className='form-label text-white'>Enter your organisation:</label>
                                            <input type='text' name='corg' className='form-control'/>
                                        </div>
                                        <div className='form-group'>
                                            <label className='form-label text-white'>Enter email</label>
                                            <input type='email' name='pcompany' className='form-control'/>
                                        </div>
                                        <div className='form-group'>
                                            <label className='form-label text-white'>Enter Message</label>
                                            <textarea type='text' name='cmessage' className='form-control gray-background'/>
                                        </div>
                                        <button type='submit' className='btn btn-primary mt-2'>Submit</button>
                                        </form> 
                                    </div>

                                    </div>
                                    
                                    <div className="col-md-4 contact-country-list mt-4 mt-md-0"> 
                                        <div className="contact-address location-item" id="chennaiLocation"> 
                                            <h3 className="mb-2 text-white">Chennai</h3> 
                                            <p className="text-white">Beast Technologies Pvt., Ltd., H-3 IT Park, OldMaruvathur Road, Siruseri, Chennai – 603 103. India </p> 
                                            <p><a className="d-inline-block text-white" href="tel:000">+91 472827180000 , </a><a classNam="d-inline-block" href="tel:+7480003">+91 4754880003</a></p> 
                                            <p className="text-white"><a href="mailto:talktous@beast.com">talktous@beast.com</a></p> 
                                        </div> 
                                        <div>
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2750.8420223727785!2d80.22010316001658!3d12.825297702558876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525a688f3d32f1%3A0x769131751ee5a50e!2sChangepond%20Technologies!5e0!3m2!1sen!2sin!4v1699935579731!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                        </div> 
                                    </div> 
                                    </div> 
                                </div> 
                            </div>
                        </div>
                    </section>
            </div> 
    )
}

export default ContactComp
