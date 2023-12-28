import './landingpage.css';
import { Navigation } from "../../component/navbar/navbar.component"

export const LandingPage = () =>{
    return (
        <>
            <Navigation/>
            <div>

                <div className="bg-head">
                    <div className="text-container">
                        <b>LEASE THE RIGHT EQUIPMENT FOR YOUR JOB</b>
                        <div className="text">
                            Empowering Your Projects, One Tool at a Time. Excellence in Tool Hire for Unmatched Performance and Precision.
                        </div>
                        <button className='btn'>Contact Us</button>
                    </div>
                </div>

                <div className="info">
                    <img src={"https://preview.colorlib.com/theme/equipo/images/about.jpg.webp"} />
                    <div className='info-detail'>
                        <b style={{fontSize:'32px'}}>Welcome to <span style={{color: '#FFA931', letterSpacing: '1.5px', fontSize:'40px'}}>HireTool</span>  Stoke-on-trent</b>
                        <br/>
                        <div style={{marginTop: '16px', letterSpacing: '1px', lineHeight: '50px'}}>
                            We believe in empowering every project with the right tools, ensuring efficiency, precision, and outstanding results. Our commitment to excellence and customer satisfaction sets us apart. Explore our comprehensive range of high-quality tools, and let's build, create, and achieve together. 
                        </div>

                        <div style={{display: 'flex', flexDirection: 'row', justifyContent:'space-around', marginTop: '20px'}}>
                            <div className='card'>
                                <b style={{color: '#FFA931', fontSize: '27px'}}>50</b>
                                <div style={{color:'white', fontWeight:'500',letterSpacing: '1px', marginTop:'8px', lineHeight:'25px'}}>YEARS OF EXPERIENCED</div>
                            </div>

                            <div className='card'>
                                <b style={{color: '#FFA931', fontSize: '27px'}}>450</b>
                                <div style={{color:'white', fontWeight:'500',letterSpacing: '1px', marginTop:'8px', lineHeight:'25px'}}>CUSTOMER SERVERD</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="service">
                    <div style={{color: '#FFA931', fontWeight:'bold', letterSpacing: '1.3px'}}>SERVICES</div>
                    <h1 style={{marginBottom: '40px', letterSpacing: '1.5px'}}>Rental Services</h1>
                    <div className="items">


                        <div className="item">
                            <div className="itemImg">
                                <img width={'280'} src={"https://preview.colorlib.com/theme/equipo/images/services-1.jpg.webp"} />
                            </div>
                            <div className="item-text">
                                <h3>Construction</h3>
                                <span>Empower your construction projects with precision and efficiency. Choose our top-notch construction tools for unmatched reliability and performance.</span>
                            </div>
                        </div>

                        <div className="item">
                            <div className="itemImg">
                                <img width={'280'} src={"https://cdn.mos.cms.futurecdn.net/Rx63edvSZCZ9uSg7egSDRU-1600-80.jpg.webp"} />
                            </div>
                            <div className="item-text">
                                <h3>Landscape</h3>
                                <span>Transforming Landscapes, One Tool at a Time. Explore our premier landscape tools for unrivaled precision and efficiency.</span>
                            </div>
                        </div>
                        
                        <div className="item">
                            <div className="itemImg">
                                <img width={'280'} src={"https://www.thespruce.com/thmb/7cRZhjtZ8_eo_DJPVF9PwxbBreI=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/top-plumbing-tools-1824860-hero-867cc1e34408463dbab86838f89e7762.jpg"} />
                            </div>
                            <div className="item-text">
                                <h3>Pulmbing</h3>
                                <span>Precision Plumbing Starts Here: Elevate your projects with our top-tier plumbing tool hire. Unleash efficiency and reliability with cutting-edge tools from here.</span>
                            </div>
                        </div>


                        <div className="item">
                            <div className="itemImg">
                                <img width={'280'} src={"https://necscleaning.co.uk/wp-content/uploads/2021/12/Specialist-Cleaning-4-550x550.jpg"} />
                            </div>
                            <div className="item-text">
                                <h3>Cleaning</h3>
                                <span>Revolutionize Your Cleaning Experience: Unleash the Power of Precision with Our Top-tier Cleaning Tool Rentals. Elevate efficiency and achieve sparkling results.</span>
                            </div>
                        </div>
                    


                    </div>
                </div>

                <div className="footer">
                    &copy; 2024 ToolHire Stoke on trent 
                </div>

            </div>
        </>
    )
}