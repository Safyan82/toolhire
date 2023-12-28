import { Table } from 'antd';
import { AdminNavigation } from "../../component/navbar/adminNavbar";
import { useQuery } from '@apollo/client';
import { productListQuery } from '../../util/query/product.query';
import { useNavigate } from 'react-router-dom';

export const Tool = ()=>{
    const dataSource = [
        {
          key: '1',
          name: 'John Doe',
          age: 30,
          address: '123 Main St',
        },
        {
          key: '2',
          name: 'Jane Doe',
          age: 25,
          address: '456 Oak St',
        },
        // Add more data as needed
      ];
      
      const columns = [
        {
          title: 'Tool code',
          dataIndex: 'code',
          key: 'code',
          sorter: (a, b) => a.code.localeCompare(b.code),
        },
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          sorter: (a, b) => a.name - b.name,
        },
        {
          title: 'Rate/h',
          dataIndex: 'price',
          key: 'price',
          sorter: (a, b) => a.price.localeCompare(b.price),
        },
    ];

    const {data} = useQuery(productListQuery);


    const navigate = useNavigate();

    const handleRowClick = (record) => {
        // Handle row click, e.g., navigate to a detail page
        console.log('Row clicked:', record);
        navigate("/addTool",{state:{user: record}})
      };
    
      const rowProps = (record) => {
        return {
          onClick: () => handleRowClick(record),
        };
      };

    return(
        <>
            <AdminNavigation />
            
            <div style={{ margin: '30px 60px' }}>

                <h3>TOOL LIST</h3>
                <Table 
                    dataSource={data?.productList?.response} 
                    columns={columns}               
                    onRow={rowProps}
                    rowKey="key"
                />

            </div>

        </>
    )
}