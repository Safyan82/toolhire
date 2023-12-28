import "./toolDetail.css";
import { Navigation } from "../../component/navbar/navbar.component"
import { Avatar, Button, DatePicker, Input, notification } from "antd";
import {EnterOutlined, UserOutlined} from "@ant-design/icons";
import moment from "moment";
import { useState } from "react";
import { StarRating } from "./starRating";
import { useMutation, useQuery } from "@apollo/client";
import { productListById } from "../../util/query/product.query";
import { useParams } from "react-router-dom";
import { newCommentMutation, newReviewMutation } from "../../util/mutation/review.mutation";
const {RangePicker} = DatePicker;

export const ToolDetail = ()=>{
    const [price, setPrice] = useState(0);

    const handleRangePickerChange = (dates)=>{
        if (dates?.length === 2) {
            const startDateTime = dates[0];
            const endDateTime = dates[1];
      
            const durationInMilliseconds = endDateTime.diff(startDateTime);
            const durationInHours = moment.duration(durationInMilliseconds).asHours();
            setPrice(durationInHours*5);
        }else{
            setPrice(0);
        }
    }
    const {id} = useParams();
    const {data, refetch} = useQuery(productListById,{
        variables: {
            id 
        },
        fetchPolicy: 'network-only'
    });

    const product = data?.getProductById?.response[0];
    
    const [api, context] = notification.useNotification();

    const [newReview] = useMutation(newReviewMutation);

    const [review, setReview] = useState();
    
    const [performanceRating, setPerformanceRating] = useState(0);
    const [customerRating, setCustomerRating] = useState(0);
    const [supportRating, setSupportRating] = useState(0);


    const handelReview = async()=>{
        try{
            await newReview({
                variables:{
                    input:{
                        review,
                        toolId: id,
                        performanceRating,
                        customerRating,
                        supportRating
                    }
                }
            });

            await refetch();
            
            api.success({
                message: "Review Added",
            });

            setReview("");

        }catch(err){
            api.error({
                message: err.message,
            })
        }
    }

    const [comment, setComment] = useState("")
    const [newComment] = useMutation(newCommentMutation);
    const handelComment = async (id)=>{
        await newComment({
            variables:{
                input: {
                    comment,
                    reviewId: id
                }
            }
        });
        setComment("");
        await refetch();
    }

    return(
        <>
            <Navigation/>

            <div className="item-detail">
                <div className="item-detail-img">
                    <img  src={product?.img} alt="" />
                </div>
                <span className="item-detail-text">
                    <div >
                        <h3 style={{letterSpacing: '1.5px'}}>{product?.name}</h3>
                        <h5> <span style={{color:'grey'}}>Tool/Equipment Code</span> :  {product?.code}</h5>
                        <h5> <span style={{color:'grey'}}>&pound; {product?.price}</span> per hour</h5>
                        
                        <div className="hiring-box">
                            <span style={{fontSize: '20px', letterSpacing: '2px', fontWeight:'500', color: '#FFA931'}}>Hiring date...</span>
                        
                            <RangePicker
                                className="rangePicker"
                                showTime={{ format: 'HH:mm' }}
                                onChange={handleRangePickerChange}
                            />

                            {price>0?
                            <h4 style={{fontWeight: 500}}> <span style={{color:'grey'}}>Price</span> : &nbsp; &pound; {price.toFixed(2)}</h4>
                            :null}

                        </div>
                    </div>
                </span>

            </div>
            
            <div className="review">
                <h4 style={{borderBottom: '2px solid lightblue', width: '100px'}}>
                    Reviews
                </h4>

                {
                    product?.reviews?.length>0 ?  product?.reviews?.map((review)=>(

                        <>
                            <div className="review-item" style={{marginBottom: '32px'}}>
                                    <h4 style={{margin: 'none', margin: '3px 0px'}}>{"Anon_"+review?._id}</h4>
                                    <h6 style={{margin: 'none', margin: '3px 0px', fontWeight: 'normal', fontSize:'14px'}}>
                                        {review.review}. <br/>
                                        <span style={{fontSize:'10px'}}>
                                        <b>Customer service {review?.customerRating}/5</b> &emsp;
                                        <b>Support service {review?.supportRating}/5</b> &emsp;
                                        <b>Performance {review?.performanceRating}/5</b>
                                        </span>
                                    </h6>
                                    {product?.comments?.filter((comment)=>comment.reviewId==review._id)?.map((comment)=>(
                                        <h6 style={{margin:'16px 32px'}}>
                                         <EnterOutlined style={{transform: 'scaleX(-1)'}}/> &nbsp;   {comment.comment}
                                        </h6>
                                    ))}

                                    <div style={{display: 'flex', columnGap: '20px', alignItems: 'center'}}>
                                        <Avatar size={50} style={{width: '55px'}}>
                                            <UserOutlined/>
                                        </Avatar>
                                        <Input
                                            placeholder="Reply your comment"
                                            style={{margin: '20px 0', height: '50px', width: '60%'}}
                                            className="generic-input-control"
                                            value={comment}
                                            onChange={(e)=>setComment(e.target.value)}
                                        />
                                    </div>
                                        <Button type={"dashed"} onClick={()=>handelComment(review?._id)}>Leave comment</Button>
                            </div>

                            

                        </>
                    ))
                    :
                    <div style={{fontSize: '12px', letterSpacing: '0.5px'}}>
                        No review yet
                    </div>
                }


                <div style={{ padding: '32px 0 62px 0', }}>
                    <h5 style={{margin: '0 0 40px 0', borderBottom: '2px solid #FFA931', width: '110px'}}>Leave Review</h5>
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <span>
                            <div style={{fontWeight: '500', marginBottom: '10px', fontSize: '13px',}}>Equipment performance</div>
                            <StarRating rating={performanceRating} setRating={setPerformanceRating}/>
                        </span>
                        <span>
                            <div style={{fontWeight: '500', marginBottom: '10px', fontSize: '13px',}}>Customer service</div>
                            <StarRating rating={customerRating} setRating={setCustomerRating}/>
                        </span>
                        <span>
                            <div style={{fontWeight: '500', marginBottom: '10px', fontSize: '13px',}}>Support service</div>
                            <StarRating rating={supportRating} setRating={setSupportRating}/>
                        </span>
                    </div>
                    <Input.TextArea
                        placeholder="Leave Your Thoughts ..."
                        style={{marginTop: '2%', height: '200px', padding: '20px', fontWeight: 'bold', letterSpacing: '2px'}}
                        className="generic-input-control"
                        value={review}
                        onChange={(e)=>setReview(e.target.value)}
                    >
                    </Input.TextArea>

                    <Button type={"primary"} onClick={handelReview} style={{margin:'10px 0'}}>Leave review</Button>
                </div>



            </div>

            <div className="footer">
                &copy; 2024 ToolHire Stoke on trent 
            </div>
        </>
    )
}