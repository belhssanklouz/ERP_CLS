
import React,{useState,useEffect} from 'react'

import Loading from '../../components/loading/loading';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom';

import Table from '../../components/table/Table'
import Modal from '../../components/Modal/Modal';
import { useDispatch,useSelector } from 'react-redux';
import { deleteDevis, getAllDevis } from '../../redux/actions';
import AddDevis from './addDevis';
import Overview from './overview'
import { set } from 'react-hook-form';

const Devis = () => {

    const dispatch = useDispatch();

    const [openModal,setOpenModal] = useState(false);
    const [oopenModal,ssetOpenModal] = useState(false);
    const [quote,setQuote] = useState(false);
    const devis = useSelector(state=>state.devisReducer.devis) || [];
    const loading = useSelector(state=>state.devisReducer.loading);
    const client = useSelector(state=>state.clientReducer.client) || [];
    const product = useSelector(state=>state.ProductReducer.products) || [];

    const listProduit = devis.map(data=>data.listproduit)
    console.log(listProduit)


    const ProductsListTableHead = [
        'N°',
        'Produit',
        'Quantité',
        'Prix Unitaire',
        'Prix Total',
        'Actions'   
      ]

    const ProductsTableHead = [
        'N°',
        'Date',
        'Date de validité',
        'Client',
        'Produit',
        'Status',
        'Actions'   
      ]

      const renderProdListBody = (item, index) => (
    <>{item.map((el,index)=>
        <tr>
            <td>{index}</td>
            <td>{el.prod.name}</td>
            <td>{el.qnt}</td>
            <td>{el.prod.price}</td>
            <td>{el.prod.price}</td>
            <td><Link to={`/editcategory/${item._id}`} rel="noopener noreferrer" >
                <IconButton aria-label='edit'>
                    <EditIcon/>
                </IconButton>
                </Link>
                <IconButton onClick={  () => {if(window.confirm('Delete the item?')){ dispatch(deleteDevis(item._id))};}} aria-label='delete'>
                    <DeleteIcon />
                </IconButton>
            </td>
        </tr>
        )}
    </>
    );

      const renderHead = (item, index) => <th key={index}>{item}</th>
      const renderBody = (item, index) => (
        <tr key={index}>
            <td>{item.numerodevis}</td>
            <td>{item.datedevis.substr(0,10)}</td>
            <td>{item.datevalidite.substr(0,10)}</td>
            <td>{client.filter(el=>el._id===item.client).map(el=>el.name)}</td>
            <td><Link onClick={()=>{ssetOpenModal(true)}} to='#'>Voir plus</Link></td>
            <td>In Progress</td>
            <td><Link to={`/editcategory/${item._id}`} rel="noopener noreferrer" >
                <IconButton aria-label='edit'>
                    <EditIcon/>
                </IconButton>
                </Link>
                <IconButton onClick={  () => {if(window.confirm('Delete the item?')){ dispatch(deleteDevis(item._id))};}} aria-label='delete'>
                    <DeleteIcon />
                </IconButton>
            </td>
        </tr>
      )
  return (<div>
  <h2 className="page-header">
      Quote
  </h2>
  {loading ? (<Loading />) : 
  (<React.Fragment>
      <div className='control'>
          <Button onClick={()=>window.location.reload(false)}> 
                  actualiser
              </Button>
      <Button variant='outlined' onClick={()=>setOpenModal(true)}>Add new Quote</Button>
      </div>
      <div className="row">
                  <div className="col-12">
                      <div className="card">
                          <div className="card__body">
                              <Table
                                  limit='5'
                                  headData={ProductsTableHead}
                                  renderHead={(item, index) => renderHead(item, index)}
                                  bodyData={devis}
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
                 <AddDevis setQuote={setQuote} />
                  
                  {/* {!responseadd ?  <AddCategories setOpenModal={setOpenModal} /> : responseadd.msg } */}
              </Modal>
              <Modal
              openModal={oopenModal}
              setOpenModal={ssetOpenModal}
              title='Product List'>
                  <Table
                                  limit='5'
                                  headData={ProductsListTableHead}
                                  renderHead={(item, index) => renderHead(item, index)}
                                  bodyData={listProduit}
                                  renderBody={(item, index) => renderProdListBody(item, index)}
                              />
              </Modal>
              <Modal openModal={quote} setOpenModal={setQuote} title='Quote Overview'>
                <Overview setOpenModal={setQuote}/>
              </Modal>
              </React.Fragment>)}
              
</div>);
};

export default Devis;
