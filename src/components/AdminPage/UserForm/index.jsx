import React, { useState } from 'react';
import { Modal, Form, Input, Button, Select, InputNumber } from 'antd';
import { useDispatch } from 'react-redux';
import { actCreateUser } from '../../../redux/features/users/usersSlice';

const { Option } = Select;

const UserForm = () => {
    const dispatch = useDispatch();

    const [form] = Form.useForm();

    const [modalVisible, setModalVisible] = useState(false);

    const handleSubmitForm = (values) => {
        dispatch(actCreateUser(values));
        setModalVisible(false);
        form.resetFields();
    };

    return (
        <>
            <Button type="primary" onClick={() => setModalVisible(true)}>Thêm người dùng</Button>
            <Modal
                title="Thêm người dùng"
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
                        rules={[{ required: true, message: 'Vui lòng nhập số điện thoại!' }]}
                    >
                        <InputNumber />
                    </Form.Item>
                    <Form.Item
                        label="Địa chỉ"
                        name="address"
                        rules={[{ required: true, message: 'Vui lòng nhập địa chỉ!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">Thêm người dùng</Button>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
};

export default UserForm;