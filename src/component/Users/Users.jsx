import React, {useState} from 'react'
import * as _ from 'lodash';
import User from "./User";
import {Select} from "antd";
import s from './Users.module.css'

const {Option} = Select;

const Users = (props) => {

    const [selectValue, setSelectValue] = useState()

    const {users} = props

    const listUsers = (value) => _.map(value, u => {
        return <User user={u} key={u.id}/>
    })
    const onChange = (value) => {
        setSelectValue(value)
    }
    const filteredUsers = (selectValue) => {
        switch (selectValue) {
            case 'all' : {
                return listUsers(users)
            }
            case 'true' : {
                const filterList = _.filter(users, u => {
                    return u.boolean
                })
                return listUsers(filterList)
            }
            case 'false' : {
                const filterList = _.filter(users, u => {
                    return !u.boolean
                })
                return listUsers(filterList)
            }
            default :
                return listUsers(users)
        }
    }

    return (
        <div className={s.filter}>
            <Select placeholder='Выберите значение' style={{width: '100%', marginBottom: 10}} onChange={onChange}>
                <Option value="all">Все пользователи</Option>
                <Option value="true">True</Option>
                <Option value="false"> False </Option>
            </Select>
            {filteredUsers(selectValue)}
        </div>
    )
}

export default Users

