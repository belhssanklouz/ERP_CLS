import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import {useDispatch,useSelector} from 'react-redux'

import Table from '../../components/table/Table'
import Modal from '../../components/Modal/Modal';
import Loading from '../../components/loading/loading';

import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import {getAllCategorys,deleteCategory} from '../../redux/actions'
import AddCategories from './AddCategories';
import categoryReducer from '../../redux/reducers/categoryReducer';

const Categories = () => {

    const [openModal,setOpenModal] = useState(false);
    const [usersEdit,setUsersEdit] = useState(null);


   // fetch with redux
   const categories = useSelector(state => state.categoryReducer.categories) || [];
   const loading = useSelector(state => state.categoryReducer.loading) ;
   const responseadd = useSelector(state => state.categoryReducer.responseadd) || null;

   const dispatch = useDispatch()
  useEffect(()=>{

      dispatch(getAllCategorys());

  },[dispatch])

  

const ProductsTableHead = [
  'N°',
  'name',
  'description',
  'actions'
]

const renderHead = (item, index) => <th key={index}>{item}</th>
const renderBody = (item, index) => (
  <tr key={index}>
      <td>{index}</td>
      <td>{item.name}</td>
      <td>{item.description}</td>
      <td><Link to={`/editcategory/${item._id}`} rel="noopener noreferrer" >
          <IconButton aria-label='edit'>
              <EditIcon/>
          </IconButton>
          </Link>
          <IconButton onClick={  () => {if(window.confirm('Delete the item?')){ dispatch(deleteCategory(item._id))};}} aria-label='delete'>
              <DeleteIcon />
          </IconButton>
      </td>
  </tr>
)


    return (
        <div>
        <h2 className="page-header">
            Categories
        </h2>
        {loading ? (<Loading />) : 
        (<React.Fragment>
            <div className='control'>
                <Button onClick={()=>window.location.reload(false)}> 
                        actualiser
                    </Button>
            <Button variant='outlined' onClick={()=>setOpenModal(true)}>Add new Category</Button>
            </div>
            <div className="row">
                        <div className="col-12">
                            <div className="card">
                                <div className="card__body">
                                    <Table
                                        limit='5'
                                        headData={ProductsTableHead}
                                        renderHead={(item, index) => renderHead(item, index)}
                                        bodyData={categories}
                                        renderBody={(item, index) => renderBody(item, index)}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <Modal 
                    openModal={openModal}
                    setOpenModal={setOpenModal}
                    title='Add new Category'>
                       
                        
                        {!responseadd ?  <AddCategories setOpenModal={setOpenModal} /> : responseadd.msg }
                    </Modal>
                    </React.Fragment>)}
                    
    </div>
    )
}

export default Categories
