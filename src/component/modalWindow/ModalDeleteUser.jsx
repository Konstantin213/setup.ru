import React, {useState} from 'react'
import {Modal, Tooltip} from "antd";
import CloseOutlined from "@ant-design/icons/lib/icons/CloseOutlined";
import {useDispatch} from "react-redux";
import {deleteUser} from "../../redux/usersReducer";
import s from './../Users/Users.module.css'


const ModalWindowDeleteUser = (props) => {

    const {user} = props

    const dispatch = useDispatch()

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };
    const removeUser = (id) => dispatch(deleteUser(id))

    const handleOk = () => {
        removeUser(user.id)
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <>
            <Tooltip title="Удалить пользователя">
                <span className={s.btnDeleteUser}>
                <CloseOutlined onClick={showModal}/>
                    </span>
            </Tooltip>
            <div className={s.modalWindiwDelete}>
            <Modal
                title="Вы уверены?"
                visible={isModalVisible}
                okText={'Да'}
                cancelText={'Отмена'}
                onOk={handleOk}
                onCancel={handleCancel}
            >
            </Modal>
            </div>
        </>
    );
}
export default ModalWindowDeleteUser;
