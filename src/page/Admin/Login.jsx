import { Button, Form, Input, notification } from "antd"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = ()=> {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [api, contextholder] = notification.useNotification();
    const navigate = useNavigate();

    const handelLogin = ()=>{
        if(email=="admin@gmail.com" && password=="admin@2023"){
            api.success({
                message: "Logged In Successfully"
            });
            navigate("/tool");
        }else{
            api.error({
                message: "Email or password may be wrong"
            })
        }

    };

    return(
        <div style={{margin: '50px 350px 50px 350px', padding:'5% 5%',  textAlign: 'center', boxShadow: '0 0 4px #FFA931'}}>
            {contextholder}
            <h3>Login</h3>
            <Form.Item>
                <Input
                    placeholder="Email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                />
            </Form.Item>
            <Form.Item>
                <Input
                    placeholder="Password"
                    value={password}
                    type="password"
                    onChange={(e)=>setPassword(e.target.value)}
                />
            </Form.Item>
            <Button type="primary" onClick={handelLogin}>Login</Button>
        </div>
    )
}