import React from 'react';

import Table from '../../components/table/Table'
import Modal from '../../components/Modal/Modal';
import Loading from '../../components/loading/loading';
import { useDispatch } from 'react-redux';

const Devis = () => {

    const dispatch = useDispatch();

    const ProductsTableHead = [
        'N°',
        'Date',
        'Date de validité',
        'crée par',
        'Client',
        'Produit'        
      ]
      
      const renderHead = (item, index) => <th key={index}>{item}</th>
      const renderBody = (item, index) => (
        <tr key={index}>
            <td>{index}</td>
            <td>{item.date}</td>
            <td>{item.validity}</td>
            <td>{item.createdBy}</td>
            <td>{item.client}</td>
            <td>{item.product}</td>
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
  return (<div>
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
              
</div>);
};

export default Devis;
