import React,{ useState } from 'react';
import { Breadcrumb, Tag, Col, Row, Table, Pagination, Button, Form } from 'antd';
import Card from 'antd/es/card/Card';
import { ColumnsType } from 'antd/es/table';
interface DataType {
    key: string;
    productCode: string;
    productName: string;
    productType: string;
    quantity: number;
    importPrice: number;
    sales: number;
}

const columns: ColumnsType<DataType> = [
    {
        title: "Product code",
        dataIndex: "productCode",
        key: "productCode",
        sorter: (a, b) => a.productCode.localeCompare(b.productCode)
    },
    {
        title: "Product Name",
        dataIndex: "productName",
        key: "productName",
        sorter: (a, b) => a.productName.localeCompare(b.productName)

    },
    {
        title: "Product Type",
        dataIndex: "productType",
        key: "productType",
        sorter: (a, b) => a.productType.localeCompare(b.productType),
        render: (type: string) => (
            <Tag color={type === "Type 1" ? "blue" : "green"}>{type.toUpperCase()}</Tag>
        ),
    },
    {
        title: "Quantity",
        dataIndex: "quantity",
        key: "quantity",
    },
    {
        title: "Import Price",
        dataIndex: "importPrice",
        key: "importPrice",
    },
    {
        title: "Sales",
        dataIndex: "sales",
        key: "sales",
    },
];

const data: DataType[] = [
    {
        key: "1",
        productCode: "PC001",
        productName: "Product 1",
        productType: "Type 1",
        quantity: 10,
        importPrice: 5.5,
        sales: 100,
    },
    {
        key: "2",
        productCode: "PC002",
        productName: "Product 2",
        productType: "Type 2",
        quantity: 20,
        importPrice: 4.5,
        sales: 150,
    },
    {
        key: "3",
        productCode: "PC003",
        productName: "Product 3",
        productType: "Type 1",
        quantity: 5,
        importPrice: 7.5,
        sales: 200,
    },
    {
        key: "4",
        productCode: "PC004",
        productName: "Product 4",
        productType: "Type 2",
        quantity: 15,
        importPrice: 6.5,
        sales: 120,
    },
];
const ProductsManagement = () => {
    const [current, setCurrent] = useState(1);

    const onChange = (page: number) => {
        console.log(page);
        setCurrent(page);
    };
    const handleSubmitForm = () => {

    }
    const handleAddProduct = () => {

    }
    return (
        <>
            <Breadcrumb className='bread-crumb'>
                <Breadcrumb.Item>Product</Breadcrumb.Item>
                <Breadcrumb.Item>Product Management</Breadcrumb.Item>
            </Breadcrumb>
            <Row>
                <Col span={6}><div className='Form'>
                    <Card title="Add New Product">
                        <Form onSubmit={handleSubmitForm}>
                            <div>
                                <label htmlFor="product_id">Product Code</label>
                                <input id="product_id" name="productId" type='text' />
                            </div>
                            <div>
                                <label htmlFor="product_name">Product Name</label>
                                <input id="product_id" name="productName" type='text' />
                            </div>
                            <div>
                                <label htmlFor="product_type">Product Type</label>
                                <select name="productType" id="product_type">
                                    <option value="#">#</option>
                                    <option value="Apple">Apple</option>
                                    <option value="Samsung">Samsung</option>
                                    <option value="XiaMi">XiaMi</option>
                                    <option value="BPhone">BPhone</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="product_quantity">Quantity</label>
                                <input id="product_quantity" name="productQuantity" type='number' />
                            </div>
                            <div>
                                <label htmlFor="product_import_price">Import Price</label>
                                <input id="product_import_price" name="productImportPrice" type='number' />
                            </div>
                            <div>
                                <label htmlFor="product_sale_price">Sale Price</label>
                                <input id="product_sale_price" name="productSalePrice" type='number' />
                            </div>
                            <Button type='submit' onClick={handleAddProduct}>Submit</Button>
                        </Form>
                    </Card>
                </div>
                </Col>
                <Col span={17}>
                <Table columns={columns} dataSource={data} pagination={false} />
                <Pagination current={current} onChange={onChange} total={50} />
                </Col>
            </Row>
        </>
    )
}

export default ProductsManagement