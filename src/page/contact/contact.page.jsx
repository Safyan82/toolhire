// import './landingpage.css';
import TextArea from "antd/es/input/TextArea";
import { Navigation } from "../../component/navbar/navbar.component";
import { Button, Form, Input } from "antd";

export const ContactPage = () =>{
    return (
        <>
            <Navigation/>
            <div>

                <div className="bg-head-service">
                    <div className="text-container">
                        <b>Contact us</b>
                    </div>
                </div>

                <div className="service">
                    <div style={{color: '#FFA931', fontWeight:'bold', letterSpacing: '1.3px'}}>CONTACT</div>
                    <h1 style={{marginBottom: '40px', letterSpacing: '1.5px'}}>ASK WHAT YOU THINK</h1>
                    
                    <div style={{width: '60%', margin: 'auto'}}>
                        <div style={{display: 'flex', gap: '20px', marginBottom: '16px'}}>
                            <Input
                                placeholder="Email"
                            />
                            <Input
                                placeholder="Subject"
                            />
                        </div>

                        <TextArea
                            placeholder="Leave Your Message"
                        >
                        </TextArea>

                        <button style={{marginTop: '16px', background: '#FFA931', borderRadius: '5px', border: 'none', padding: '10px 30px',  cursor: 'pointer'}}>
                            <span style={{fontSize: '12px', fontWeight:'600', letterSpacing: '1.3px',}}>
                                Leave Message
                            </span> 
                        </button>

                    </div>
                </div>

                <div className="footer">
                    &copy; 2024 ToolHire Stoke on trent 
                </div>

            </div>
        </>
    )
}