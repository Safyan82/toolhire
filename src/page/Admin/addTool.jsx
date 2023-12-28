import { Button, Form, Input, notification } from "antd";
import { InboxOutlined } from '@ant-design/icons';
import { AdminNavigation } from "../../component/navbar/adminNavbar";
import Dragger from "antd/es/upload/Dragger";
import { useEffect, useState } from "react";
import { useMutation } from "@apollo/client";
import { newProductMutation, updateProductMutation } from "../../util/mutation/product.mutation";
import { useLocation } from "react-router-dom";

export const AddTool = ()=>{

    const {state} = useLocation();

    useEffect(()=>{
        if(state==null){
            
            setName("");
            setCode("");
            setPreviewImage("");
            setPrice("");
            setFileList([]);
        }
    },[state]);

    const [fileList, setFileList] = useState([]);
    const [previewImage, setPreviewImage] = useState(state?.user?.img || null);

    const handleChange = (info) => {
      let fileList = [...info.fileList];


  
      // Limit the number of uploaded files
      fileList = fileList.slice(-1);
  
      // Display a message if the upload is done
      if (fileList.length > 0) {
        const reader = new FileReader();
        reader.readAsDataURL(fileList[0].originFileObj);
        reader.onload = () => setPreviewImage(reader.result);
      }
  
      setFileList(fileList);
    };


    
    const [name, setName] = useState(state?.user?.name || "");
    const [price, setPrice] = useState(state?.user?.price || "");
    const [code, setCode] = useState(state?.user?.code || "");

    const [addProduct] = useMutation(newProductMutation);
    const [api, contextHolder] = notification.useNotification();

    const [updateProduct] = useMutation(updateProductMutation);


    const handelSubmit = async ()=>{
        
        const product = {
            name, price, code, img: previewImage
        };
        try{
            if(name?.length>0 && price?.length>0 && code?.length>0 && previewImage?.length>0){
                if(state?.user){

                    await updateProduct({
                        variables:{
                            input: {_id:state?.user?._id, ...product}
                        }
                    });
        
                    api.success({
                        message: 'Tool has been saved successfully',
                        // description: 'This is the content of the notification. You can put any JSX element here.',
                    });
                }
                else{
                    await addProduct({
                        variables:{
                            input: product
                        }
                    });
        
                    api.success({
                        message: 'Tool has been updated successfully',
                        // description: 'This is the content of the notification. You can put any JSX element here.',
                    });
                }
                setName("");
                setCode("");
                setPreviewImage("");
                setPrice("");
                setFileList([]);
            }else{
                api.error({
                    message: "All fields are mandatory"
                })
            }
            
        }
        catch(err){
            api.error({
                message: 'An error encountred',
                description: err.message
            });
        }
    }
  
    return(
        <>
            {contextHolder}
            <AdminNavigation />
            <h3 style={{width: '50%', margin: '30px 60px'}}> {state?.user? "Edit " : "Add "}Tool</h3>
            <div style={{width: '80%', margin: '10px 60px', display: 'flex', gap:'150px', alignItems: 'center'}}>
                
                <div style={{width: '50%'}}>
                    <Form.Item>
                        <Input 
                            placeholder={"Tool name"}
                            value={name}
                            onChange={(e)=>setName(e.target.value)}
                        />
                    </Form.Item>
                    <Form.Item>
                        <Input 
                            placeholder={"Tool code"}
                            value={code}
                            onChange={(e)=>setCode(e.target.value)}
                        />
                    </Form.Item>
                    <Form.Item>
                        <Input 
                            type="number"
                            placeholder={"Price rate per hour in GBP"}
                            value={price}
                            onChange={(e)=>setPrice(e.target.value)}
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" onClick={handelSubmit}>Add Tool</Button>
                    </Form.Item>
                </div>
                
                <Dragger
                    name="file"
                    multiple={false}
                    style={{width: '100%'}}
                    onChange={handleChange}
                    fileList={fileList}
                    showUploadList={{ showPreviewIcon: true, showRemoveIcon: true }}
                    beforeUpload={()=> false}
                >
                    {previewImage? 

                    <img src={previewImage} 
                    style={{ maxWidth: '300px', display: 'block', margin: '0 auto' }}
                    /> :  
                    <>
                        <p className="ant-upload-drag-icon">
                            <InboxOutlined />
                        </p>
                    </>}
                        <p className="ant-upload-text">Click or drag image file to this area to upload</p>

                </Dragger>

            </div>
        </>
    )
}