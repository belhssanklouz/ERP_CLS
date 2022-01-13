import React,{useState,useEffect} from 'react'
import Table from '../components/table/Table'
// import customerList from '../assets/JsonData/customers-list.json'

import axios from 'axios';
import Loading from '../components/loading/loading';
import Modal from '../components/Modal/Modal'
import Addusersform from '../components/AddUser/Addusersform';
import './Users.css'
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom';

    let n = 0;
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
        <td>
            <IconButton aria-label='edit'>
                <Link to={`/editusers/${item._id}`} ><EditIcon/></Link>
            </IconButton>
            <IconButton aria-label='delete'>
                <DeleteIcon />
            </IconButton>
        </td>
    </tr>
)

const Users = () => {

    const url = 'http://192.168.1.219:8888/api/v1/user/getallusers';

    const [users, setUsers] = useState([]);
    const [loading,setIsLoading] = useState(false);
    const [openModal,setOpenModal] = useState(false);
    const [usersEdit,setUsersEdit] = useState(null);
    const openEditModal = (item) => {
        setUsersEdit(item);
        setOpenModal(true);
    }
    
    // fetching ...
    useEffect(()=>{
        const loadUsers = async () =>{
            setIsLoading(true);
            const response = await axios.get(url);
            setUsers(response.data);
            setIsLoading(false);
        }
        loadUsers();
    },[])

    return (
        <div>
            <h2 className="page-header">
                Users
            </h2>
            {loading ? (<Loading />) : 
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
                                            bodyData={users}
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
                                <Addusersform 
                                usersEdit={usersEdit}
                                setOpenModal={setOpenModal}  />
                        </Modal>
                        </React.Fragment>)}
                        
                    </div>
                )
}

export default Users
