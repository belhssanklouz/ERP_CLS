import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux'

import Table from '../../components/table/Table'
import Modal from '../../components/Modal/Modal';
import Loading from '../../components/loading/loading';

import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import {getAllClient,deleteClient} from '../../redux/actions'
import AddNewClient from './AddNewClient';


function Client() {
      const dispatch = useDispatch()

    const loading = useSelector(state => state.clientReducer.loading);
    const client = useSelector(state => state.clientReducer.client) || [];
    const responseAdd = useSelector(state => state.clientReducer.responseAdd) || '';


    const [openModal,setOpenModal] = useState(false);
    const [usersEdit,setUsersEdit] = useState(null);
  
     // fetch with redux
  
     useEffect(()=>{
        dispatch(getAllClient())
    },[dispatch])
  

  const ClientTableHead = [
    'N°',
    'name',
    'Raison social',
    'Secteur d\'Activité',
    'Address',
    'Téléphone',
    'Commentaire',
    'Liste des commandes',
    'actions'
  ]
  
  const renderHead = (item, index) => <th key={index}>{item}</th>
  const renderBody = (item, index) => (
    <tr key={index}>
        <td>{index}</td>
        <td>{item.name}</td>
        <td>{item.raisonSocial}</td>
        <td>{item.secteurActivite}</td>
        <td>{item.adress.map((el)=><p>{ el.adressLine} ,{ el.city} ,{el.zipCode} </p> )}</td>
        <td>{item.phoneNumber}</td>
        <td>{item.commentaire}</td>
        <td><Link to='/hhhh'>Voir plus </Link></td>
        <td><Link to={`/editclient/${item._id}`} >
            <IconButton aria-label='edit'>
                <EditIcon/>
            </IconButton>
            </Link>
            <IconButton onClick={() => {if(window.confirm('Delete the item?')){dispatch(deleteClient(item._id))};}} aria-label='delete'>
                <DeleteIcon />
            </IconButton>
        </td>
    </tr>
  )

    return (
        <div>
            <h2 className="page-header">
                Clients
            </h2>
            {loading ? (<Loading />) : 
            (<React.Fragment>
                <div className='control'>
                <Button variant='outlined' onClick={()=>setOpenModal(true)}>Add new Client</Button>
                </div>
                <div className="row">
                            <div className="col-12">
                                <div className="card">
                                    <div className="card__body">
                                        <Table
                                            limit='10'
                                            headData={ClientTableHead}
                                            renderHead={(item, index) => renderHead(item, index)}
                                            bodyData={client}
                                            renderBody={(item, index) => renderBody(item, index)}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Modal 
                        openModal={openModal}
                        setOpenModal={setOpenModal}
                        title='Add new Client'>
                           {!responseAdd ? <AddNewClient setOpenModal={setOpenModal} /> : responseAdd.msg}
                        </Modal>
                        </React.Fragment>)}
                        
        </div>
    )
}

export default Client
