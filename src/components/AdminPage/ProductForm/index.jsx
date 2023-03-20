import React, { useRef, useState } from 'react';
import { Modal, Col, Form, Input, Button, Select, InputNumber } from 'antd';
import { useDispatch } from 'react-redux';
import { actCreateProduct, actUpdateProduct } from '../../../redux/features/products/productsSlice';
import ProductTable from '../ProductTable';

const { Option } = Select;

const ProductForm = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const [modalVisible, setModalVisible] = useState(false);
  const [isEditing, setEditing] = useState(false);
  const idUpdateRef = useRef(null)


  const handleSubmitForm = (values) => {
    dispatch(actCreateProduct(values));
    setModalVisible(false);
    form.resetFields();
    setEditing(false)
  };
  const handleUpdateForm = (values) => {
    // dispatch(actUpdateProduct(values))
    console.log(values);
    form.setFieldsValue(values)
    idUpdateRef.current = values.id
    setModalVisible(true)
    setEditing(true)
  }
  const handleSaveForm = (values) => {
    console.log(idUpdateRef.current, 'hi')
    dispatch(actUpdateProduct(idUpdateRef.current, values))
    setModalVisible(false);
    form.resetFields();
    setEditing(false)
  }
  return (
    <>
      <Col span={6}>
        <Button type="primary" onClick={() => {
          setModalVisible(true)
          setEditing(false)
        }}>Thêm sản phẩm</Button>
      </Col>
      <Modal
        title={isEditing ? 'Thay đổi thông tin sản phẩm' : 'Thêm sản phẩm'}
        visible={modalVisible}
        onCancel={() => {
          setModalVisible(false);
          setEditing(false)
        }}
        footer={null}
      >
        <Form
          layout="vertical"
          form={form}
          onFinish={isEditing ? handleSaveForm : handleSubmitForm}
        >
          <Form.Item
            label="Mã Hàng"
            name="productCode"
            rules={[{ required: true, message: 'Vui lòng nhập mã hàng!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Tên Hàng"
            name="productName"
            rules={[{ required: true, message: 'Vui lòng nhập tên hàng!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item name="productDes"
            label="Mô tả sản phẩm"
            rules={[{ required: true, message: 'Vui lòng nhập mô tả sản phẩm!' }]}>
            <Input.TextArea />
          </Form.Item>
          <Form.Item name="discount"
            label="Chiết khấu"
            rules={[{ required: true, message: 'Vui lòng nhập chiết khấu!' }]}>
            <Input />
          </Form.Item>
          <Form.Item name="rating"
            label="Đánh giá"
            rules={[{ required: true, message: 'Vui lòng tỷ lệ đánh giá!' }]}>
          <InputNumber />
          </Form.Item>
          <Form.Item
            label="Loại Ngành Hàng"
            name="productType"
            rules={[{ required: true, message: 'Vui lòng chọn loại ngành hàng!' }]}
          >
            <Select>
              <Option value="Accessory">Accessory</Option>
              <Option value="LivingTool">Living Tool</Option>
              <Option value="Stationary">Stationery</Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="Số Lượng"
            name="productQuantity"
            rules={[{ required: true, message: 'Vui lòng nhập số lượng!' }]}
          >
            <InputNumber />
          </Form.Item>
          <Form.Item
            label="Hình ảnh"
            name="thumbnail"
            rules={[{ required: true, message: 'Vui lòng nhập link ảnh!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item name="img" label="Ảnh chi tiết"
          rules={[{ required: true, message: 'Vui lòng nhập link ảnh!' }]}>
            <Input.TextArea rows={4} />
          </Form.Item>
          <Form.Item
            label="Giá Nhập"
            name="productImportPrice"
            rules={[{ required: true, message: 'Vui lòng nhập giá nhập!' }]}
          >
            <InputNumber />
          </Form.Item>
          <Form.Item
            label="Giá Bán"
            name="productSalePrice"
            rules={[{ required: true, message: 'Vui lòng nhập giá bán!' }]}
          >
            <InputNumber />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">{isEditing ? 'Lưu' : 'Thêm sản phẩm'}</Button>
          </Form.Item>
        </Form>
      </Modal>
      <ProductTable onUpdateForm={handleUpdateForm} />
    </>
  );
};
export default ProductForm;
