import React, { useRef, useState } from 'react';
import { Modal, Form, Input, Button, Select, InputNumber, Col } from 'antd';
import { useDispatch } from 'react-redux';
import { actCreateUser, actUpdateUser } from '../../../redux/features/users/usersSlice';
import UserTable from '../UserTable';

const { Option } = Select;

const UserForm = () => {
    const dispatch = useDispatch();
    const [form] = Form.useForm();
    const [modalVisible, setModalVisible] = useState(false);
    const [isEditing, setEditing] = useState(false)
    const idUpdateRef = useRef(null)

    const handleSubmitForm = (values) => {
        dispatch(actCreateUser(values));
        setModalVisible(false);
        form.resetFields();
    };
    const handleUpdateForm = (values) => {
        console.log(values)
        form.setFieldsValue(values)
        idUpdateRef.current = values.id
        setEditing(true);
        setModalVisible(true)
    }
    const handleSaveForm = (values) => {
        dispatch(actUpdateUser(idUpdateRef.current, values))
        setModalVisible(false);
        form.resetFields();
        setEditing(false)
    }
    return (
        <>
            <Col>
                <Button type="primary" onClick={() => {
                    setModalVisible(true)
                    setEditing(false)
                }}>Thêm người dùng</Button>
            </Col>
            <Modal
                title={isEditing ? "Sửa thông tin người dùng" : "Thêm người dùng"}
                visible={modalVisible}
                onCancel={() => setModalVisible(false)}
                footer={null}
            >
                <Form
                    layout="vertical"
                    form={form}
                    onFinish={isEditing ? handleSaveForm : handleSubmitForm}
                >
                    <Form.Item
                        label="Tài khoản"
                        name="username"
                        rules={[{ required: true, message: 'Vui lòng nhập tài khoản!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[{ required: true, message: 'Vui lòng nhập email!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Mật khẩu"
                        name="password"
                        rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}
                    >
                        <Input.Password />
                    </Form.Item>
                    <Form.Item
                        label="Giới tính"
                        name="gender"
                        rules={[{ required: true, message: 'Vui lòng chọn giới tính!' }]}
                    >
                        <Select>
                            <Option value="Nam">Nam</Option>
                            <Option value="Nữ">Nữ</Option>
                            <Option value="Khác">Khác</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        label="Số điện thoại"
                        name="phoneNumber"
                        rules={[
                            {
                              required: true,
                              message: 'Vui lòng nhập số điện thoại!',
                            },
                            {
                              pattern: /^(\+84|84|0)(3[2-9]|5[689]|7[0|6-9]|8[1-9]|9[0-9])([0-9]{7})$/,
                              message: 'Số điện thoại không đúng định dạng!',
                            },
                          ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Địa chỉ"
                        name="address"
                        rules={[{ required: true, message: 'Vui lòng nhập địa chỉ!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">{isEditing ? "Lưu" : "Thêm"}</Button>
                    </Form.Item>
                </Form>
            </Modal>
            <UserTable onUpdateUser={handleUpdateForm} />
        </>
    );
};

export default UserForm;