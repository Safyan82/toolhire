import { useQuery } from "@apollo/client"
import { AdminNavigation } from "../../component/navbar/adminNavbar"
import { reviewList } from "../../util/query/product.query"
import { Modal, Select, Table } from "antd";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const Review = ()=>{
    const {data} = useQuery(reviewList,{
        fetchPolicy: 'network-only'
    });
    console.log(data?.getReview?.response);

    const columns = [
        {
          title: 'Tool id',
          dataIndex: 'toolId',
          key: 'toolId',
          sorter: (a, b) => a.toolId.localeCompare(b.toolId),
        },
        {
          title: 'Review',
          dataIndex: 'review',
          key: 'review',
          sorter: (a, b) => a.review - b.review,
        },
        {
          title: 'Display status',
          dataIndex: 'status',
          key: 'status',
        //   sorter: (a, b) => a.status.localeCompare(b.status),
        },
    ];

    const navigate = useNavigate();

    const [selectedState, setSelectedState] = useState();
    const [visible, setVisible] = useState(false);
    
    const handleRowClick = (record) => {
        // Handle row click, e.g., navigate to a detail page
        console.log('Row clicked:', record);
        setSelectedState(record?._id);
        setVisible(true);
      };
    
      const rowProps = (record) => {
        return {
          onClick: () => handleRowClick(record),
        };
      };


    const {Option} = Select;

    return(
        <>
            <AdminNavigation />
            <div style={{ margin: '30px 60px' }}>

                <h3>REVIEWS LIST</h3>
                <Table 
                    dataSource={data?.getReview?.response?.map((review)=>({...review, status: review?.status? "True": "False"}))} 
                    columns={columns}               
                    onRow={rowProps}
                    rowKey="key"
                />

            </div>
            <Modal
                title="Display status"
                visible={visible}
                onOk={()=>setVisible(false)}
                onCancel={()=>setVisible(false)}
            >
                <Select
                    style={{width:'100%', height: '50px', margin: '16px 0'}}
                    placeholder="Choose review display status"
                >
                    <Option>True</Option>
                    <Option>False</Option>
                </Select>
            </Modal>
        </>
    )
}