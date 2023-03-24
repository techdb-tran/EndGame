import React from 'react';
import { Form, Input, Button, Select, InputNumber, Col } from 'antd';
import { useDispatch } from 'react-redux';
import { actCreateUser, actUpdateUser } from '../../redux/features/users/usersSlice';
import { useNavigate } from 'react-router-dom';

const { Option } = Select;

const RegisterPage = () => {
    const dispatch = useDispatch();
    const [form] = Form.useForm();
    const navigate = useNavigate()

    const handleSubmitForm = (values) => {
        dispatch(actCreateUser(values));
        form.resetFields();
        navigate('/login')
    };
    return (
        <>
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
                        <Button type="primary" htmlType="submit">Sign in</Button>
                    </Form.Item>
                </Form>
        </>
    );
};

export default RegisterPage;