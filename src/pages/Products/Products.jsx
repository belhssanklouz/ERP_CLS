import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import {useDispatch,useSelector} from 'react-redux'

import Table from '../../components/table/Table'
import Modal from '../../components/Modal/Modal';
import Loading from '../../components/loading/loading';
import AddNewProduct from './AddNewProduct';

import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import {deleteProduct, getAllProducts,getAllCategorys} from '../../redux/actions'

const Products = () => {


   const productss = useSelector(state => state.ProductReducer.products) || [];
   const loading = useSelector(state => state.ProductReducer.loading) ;
   const categories = useSelector(state => state.categoryReducer.categories)|| [];
   const error = useSelector(state => state.ProductReducer.error)
   const responseAdd = useSelector(state => state.ProductReducer.responseAdd)


   const dispatch = useDispatch()


  const [openModal,setOpenModal] = useState(false);
    const [usersEdit,setUsersEdit] = useState(null);

   // fetch with redux

   useEffect(()=>{

    dispatch(getAllCategorys());
    dispatch(getAllProducts());

  },[
      0
  ])

  

const ProductsTableHead = [
  'N°',
  'name',
  'description',
  'price',
  'catégories',
  'actions'
]

const renderHead = (item, index) => <th key={index}>{item}</th>
const renderBody = (item, index) => (
  <tr key={index}>
      <td>{index}</td>
      <td>{item.name}</td>
      <td>{item.description}</td>
      <td>{item.price}</td>
      <td>{categories.filter((el)=>el._id == item.categories).map(el=>el.name)}</td>
      <td><Link to={`/editproduct/${item._id}`} >
          <IconButton aria-label='edit'>
              <EditIcon/>
          </IconButton>
          </Link>
          <IconButton onClick={() => {if(window.confirm('Delete the item?')){ dispatch(deleteProduct(item._id))};}} aria-label='delete'>
              <DeleteIcon />
          </IconButton>
      </td>
  </tr>
)

    return (
        <div>
            <h2 className="page-header">
                Products
            </h2>
            {loading ? (<Loading />) : 
            (<React.Fragment>
                <div className='control'>
                <Button variant='outlined' onClick={()=>setOpenModal(true)}>Add new Product</Button>
                </div>
                <div className="row">
                            <div className="col-12">
                                <div className="card">
                                    <div className="card__body">
                                        <Table
                                            limit='5'
                                            headData={ProductsTableHead}
                                            renderHead={(item, index) => renderHead(item, index)}
                                            bodyData={productss}
                                            renderBody={(item, index) => renderBody(item, index)}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Modal 
                        openModal={openModal}
                        setOpenModal={setOpenModal}
                        title='Add new Product'>
                           
                            {!responseAdd ?<AddNewProduct
                            setOpenModal={setOpenModal} /> : responseAdd.msg}
                        </Modal>
                        </React.Fragment>)}
                        
        </div>
    )
}

export default Products
