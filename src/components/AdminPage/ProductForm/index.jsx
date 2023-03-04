import React, { useState } from 'react';
import { Modal, Form, Input, Button, Select, InputNumber } from 'antd';
import { useDispatch } from 'react-redux';
import { actCreateProduct } from '../../../redux/features/products/productsSlice';

const { Option } = Select;

const ProductForm = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const [modalVisible, setModalVisible] = useState(false);

  const handleSubmitForm = (values) => {
    dispatch(actCreateProduct(values));
    setModalVisible(false);
    form.resetFields();
  };
  return (
    <>
      <Button type="primary" onClick={() => setModalVisible(true)}>Thêm sản phẩm</Button>
      <Modal
        title="Thêm sản phẩm"
        visible={modalVisible}
        onCancel={() => setModalVisible(false)}
        footer={null}
      >
        <Form
          layout="vertical"
          form={form}
          onFinish={handleSubmitForm}
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
          <Form.Item
            label="Loại Ngành Hàng"
            name="productType"
            rules={[{ required: true, message: 'Vui lòng chọn loại ngành hàng!' }]}
          >
            <Select>
              <Option value="Apple">Apple</Option>
              <Option value="SamSung">SamSung</Option>
              <Option value="Xiao Mi">Xiao Mi</Option>
              <Option value="BPhone">BPhone</Option>
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
            <Button type="primary" htmlType="submit">Thêm sản phẩm</Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default ProductForm;
