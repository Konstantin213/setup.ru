import React, {useState} from 'react'
import {Button, Form, Input, InputNumber, Modal} from "antd";
import {useDispatch} from "react-redux";
import {addNewUser} from "../../redux/usersReducer";
import moment from "moment";

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 10,
    },
};

const ModalAddUser = () => {

    const [isModalVisible, setIsModalVisible] = useState(false);

    const dispatch = useDispatch()

    const [form] = Form.useForm();

    const showModal = () => {
        setIsModalVisible(true);
    };
    const handleOk = () => {
        setIsModalVisible(false);
    };
    const handleCancel = () => {
        setIsModalVisible(false);
    };
    let now = moment();

    const onFinish = (values) => {
        values.createDate = now.format('LLLL')
        addUser(values)
        setIsModalVisible(false);
    }
    const addUser = (formValues) => dispatch(addNewUser(formValues))

    return (
        <>
            <div>
                <Button style={{marginBottom: 10, width: 350}}
                        type='primary'
                        onClick={showModal}>
                    Добавить нового пользователя
                </Button>
            </div>
            <Modal
                title="Заполните форму"
                visible={isModalVisible}
                okText={'Ок'}
                cancelText={'Отмена'}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <Form {...layout}
                      form={form}
                      onFinish={onFinish}>
                    <Form.Item
                        name={'email'}
                        label="Email"
                        rules={[
                            {
                                required: true,
                                type: "email"
                            },
                        ]}
                    >
                        <Input/>
                    </Form.Item>
                    <Form.Item
                        name={'id'}
                        hidden={true}
                    >
                    </Form.Item>
                    <Form.Item
                        name={'password'}
                        label="Пароль"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input/>
                    </Form.Item>
                    <Form.Item
                        name={'phone'}
                        label="Телефон"
                        rules={[
                            {
                                type: 'number',
                                required: true
                            },
                        ]}
                    >
                        <InputNumber/>
                    </Form.Item>
                    <Form.Item
                        name={'name'}
                        label="ФИО"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input/>
                    </Form.Item>
                    <Button type="primary" htmlType="submit">
                        Добавить
                    </Button>
                </Form>
            </Modal>
        </>
    );
}
export default ModalAddUser;
