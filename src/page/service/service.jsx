// import './landingpage.css';
import { useQuery } from "@apollo/client"
import { Navigation } from "../../component/navbar/navbar.component"
import { StarRating } from "./starRating"
import { productListQuery } from "../../util/query/product.query";
import { useNavigate } from "react-router-dom";

export const ServicePage = () =>{

    
    const {data} = useQuery(productListQuery);
    const navigate = useNavigate();
    
    return (
        <>
            <Navigation/>
            <div>

                <div className="bg-head-service">
                    <div className="text-container">
                        <b>Rental Services</b>
                    </div>
                </div>

                <div className="service">
                    <div style={{color: '#FFA931', fontWeight:'bold', letterSpacing: '1.3px'}}>SERVICES</div>
                    <h1 style={{marginBottom: '40px', letterSpacing: '1.5px'}}>Rental Services</h1>
                    <div className="items">

                        {data?.productList?.response?.map((product)=>(

                            <div className="item" style={{width: '280px'}}>
                                <div className="itemImg">
                                    <img width={'280'} src={product?.img} />
                                </div>
                                <div className="item-text" style={{textAlign: 'center'}}>
                                    <h4 style={{letterSpacing: '1.5px'}}>{product?.name}</h4>
                                    <button className="hire-btn" onClick={()=>navigate("/detail/"+product?._id)}>Hire Now</button>
                                </div>
                            </div>

                        ))}


                        
                    


                    </div>
                </div>

                <div className="footer">
                    &copy; 2024 ToolHire Stoke on trent 
                </div>

            </div>
        </>
    )
}