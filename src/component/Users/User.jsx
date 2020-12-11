import React, {useState} from 'react'
import {Button, Form, Input, InputNumber} from "antd";
import 'antd/dist/antd.css';
import {useDispatch} from "react-redux";
import {editUser} from "../../redux/usersReducer";
import ModalWindowDeleteUser from "../modalWindow/ModalDeleteUser";
import s from './Users.module.css'
import moment from 'moment';


const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};

const User = (props) => {

    const {user} = props

    const [editMode, setEditMode] = useState(false)

    const dispatch = useDispatch()

    const [form] = Form.useForm();

    const editingUser = (editValue) => dispatch(editUser(editValue))

    let now = moment();

    const onFinish = (formValues) => {
        formValues.changeDate = now.format('LLLL')
        editingUser(formValues)
        setEditMode(false)
    }
    const validateMessages = {
        // eslint-disable-next-line no-template-curly-in-string
        required: "Требуется ввести '${label}'",
        types: {
            email: 'Введите корректный Email',
        },
        string: {
            // eslint-disable-next-line no-template-curly-in-string
            min: "'${label}' может содержать только буквы"
        },
    }

    return (
        <div className={s.user}>
            <div className={s.modalDelete}>
                <ModalWindowDeleteUser user={user}/>
            </div>
            <div>
                <Form {...layout}
                      form={form}
                      onFinish={onFinish}
                      validateMessages={validateMessages}>
                    <Form.Item
                        name={'email'}
                        initialValue={user.email}
                        label="Email"
                        rules={[
                            {
                                required: true,
                                type: "email"
                            },
                        ]}
                    >
                        <Input disabled={!editMode}/>
                    </Form.Item>
                    <Form.Item
                        name={'password'}
                        initialValue={user.password}
                        label="Пароль"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input disabled={!editMode}/>
                    </Form.Item>
                    <Form.Item
                        name={'phone'}
                        initialValue={user.phone}
                        label="Телефон"
                        rules={[
                            {
                                type: 'number',
                                required: true,
                            },
                        ]}
                    >
                        <InputNumber disabled={!editMode}/>
                    </Form.Item>
                    <Form.Item
                        name={'name'}
                        initialValue={user.name}
                        label="ФИО"
                        rules={[
                            {
                                required: true,
                                type: "string",
                                min: 5,
                            },
                        ]}
                    >
                        <Input disabled={!editMode}/>
                    </Form.Item>
                    <Form.Item
                        name={'createDate'}
                        initialValue={user.createDate}
                        label="Дата создания"
                    >
                        <Input disabled={true}/>
                    </Form.Item>
                    <Form.Item
                        name={'changeDate'}
                        initialValue={user.changeDate}
                        label="Дата изменения"
                    >
                        <Input disabled={true}/>
                    </Form.Item>
                    <Form.Item wrapperCol={{...layout.wrapperCol, offset: 8}}>
                        <div className={s.editBtn}>
                            <Button onClick={() => setEditMode(true)}>Редактировать</Button>
                            {editMode ?
                                <div>
                                    <Button type="primary" htmlType="submit">
                                        Сохранить
                                    </Button>
                                    <Button onClick={() => setEditMode(false)}>
                                        Отмена
                                    </Button>
                                </div>
                                : null}
                        </div>
                    </Form.Item>
                    <Form.Item
                        name={'id'}
                        initialValue={user.id}
                        hidden={true}
                    >
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default User;