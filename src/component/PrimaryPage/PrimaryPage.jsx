import React, {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux";
import {getAllUsers, userSearch} from "../../redux/usersReducer";
import Users from "../Users/Users";
import ModalAddUser from "../modalWindow/ModalAddUser";
import {Input} from "antd";
import {useHistory} from "react-router-dom";
import s from './PrimaryPage.module.css'


const PrimaryPage = () => {

    const {Search} = Input;

    const history = useHistory();

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllUsers())
    }, [])

    const users = useSelector(state => state.PrimaryPage.users)

    const searchUser = (values) => dispatch(userSearch(values))

    const onSearch = value => {
        history.push('/searchPage')
        searchUser(value)
    }

    return (
        <div className={s.wrapper}>
            <div style={{width: 350}}>
                <Search
                    style={{marginBottom: 10}}
                    placeholder="Введите email или телефон"
                    allowClear
                    enterButton="Поиск"
                    size="slim"
                    onSearch={onSearch}
                />
            </div>
            <div>
                <ModalAddUser/>
            </div>
            <div>
                <Users users={users}/>
            </div>
        </div>
    )
}

export default PrimaryPage