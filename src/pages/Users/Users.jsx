import React,{useState,useEffect} from 'react'
import Table from '../../components/table/Table'
// import customerList from '../assets/JsonData/customers-list.json'

import axios from 'axios';
import Loading from '../../components/loading/loading';
import Modal from '../../components/Modal/Modal'
import AddNewUser from './AddNewUser';
import './Users.css'
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom';

import { getAllUsers,deleteUser } from '../../redux/actions';
import {useDispatch,useSelector} from 'react-redux';

const Users = () => {

    const [openModal,setOpenModal] = useState(false);
    const [usersEdit,setUsersEdit] = useState(null);


    const allUsers = useSelector(state=>state.userReducer.users) || [];
    const loadingg = useSelector(state=>state.userReducer.loading);
    const responseAdd = useSelector(state=>state.userReducer.responseAdd); 

    const dispatch = useDispatch();

        // fetching ...
        useEffect(()=>{
        
            dispatch(getAllUsers());
    
    },[dispatch])

    const UsersTableHead = [
        'N°',
        'name',
        'email',
        'phone',
        'role',
        'actions'
    ]
    const renderHead = (item, index) => <th key={index}>{item}</th>
    const renderBody = (item, index) => (
        <tr key={index}>
            <td>{item.order}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.phoneNumber}</td>
            <td>{item.role}</td>
            <td><Link to={`/editusers/${item._id}`} >
                <IconButton aria-label='edit'>
                    <EditIcon/>
                </IconButton>
                </Link>
                <IconButton aria-label='delete' onClick={() => {if(window.confirm('Delete the item?')){ dispatch(deleteUser(item._id))};}} aria-label='delete'>
                    <DeleteIcon />
                </IconButton>
            </td>
        </tr>
    )


    return (
        <div>
            <h2 className="page-header">
                Users
            </h2>
            {loadingg ? (<Loading />) : 
            (<React.Fragment>
                <div className='control'>
                <Button variant='outlined' onClick={()=>setOpenModal(true)}>Add new user</Button>
                </div>
                <div className="row">
                            <div className="col-12">
                                <div className="card">
                                    <div className="card__body">
                                        <Table
                                            limit='5'
                                            headData={UsersTableHead}
                                            renderHead={(item, index) => renderHead(item, index)}
                                            bodyData={allUsers}
                                            renderBody={(item, index) => renderBody(item, index)}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Modal 
                        openModal={openModal}
                        setOpenModal={setOpenModal}
                        title='Add users to CLS'>
                            {!responseAdd ? <AddNewUser 
                                usersEdit={usersEdit}
                                setOpenModal={setOpenModal} /> : responseAdd.msg}
                                
                        </Modal>
                        </React.Fragment>)}
                        
                    </div>
                )
}

export default Users
