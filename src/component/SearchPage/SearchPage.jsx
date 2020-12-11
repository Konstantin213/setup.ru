import React from 'react'
import User from "../Users/User";
import * as _ from "lodash";
import {useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import LeftOutlined from "@ant-design/icons/lib/icons/LeftOutlined";
import s from './SearchPage.module.css'
import {Tooltip} from "antd";

const SearchPage = () => {

    const history = useHistory();

    const backClick = () => {
        history.push('/users')
    }
    const users = useSelector(state => state.PrimaryPage.users)

    const renderSearchUsers = _.map(users, u => {
        return <User user={u} key={u.id}/>
    })

    return (
        <div className={s.searchPage}>
            <Tooltip placement='topRight'
                     title="Назад">
            <span className={s.btnBack}>
                <LeftOutlined onClick={() => backClick()}/>
            </span>
            </Tooltip>
            {renderSearchUsers}
        </div>
    )
}
export default SearchPage
