import { Grid, Table, Typography,TableHead,TableRow,TableCell, TableBody, Button } from '@material-ui/core';
import React,{useEffect} from 'react';
import { useSelector } from 'react-redux';
import logo from '../../assets/images/cls-logo.png'
import './overview.css'
import { useDispatch } from 'react-redux';
import {addDevis} from '../../redux/actions'



const Overview = (props) => {
  const dispatch = useDispatch();
  const prods = useSelector(state=>state.ProductReducer.selected) || []
  const company = useSelector(state=>state.companyReducer.company)
  const formatNumber = (num) =>{
    return `${num.toFixed(2)}`
  }

  const priceRow = (qnt,unit) =>{
    return qnt*unit;
  }
  // const total = []

  const rowCreation = ()=>{
    let qnt;
    let unit;
    let total=0;
    for (let prod of prods){
      qnt=prod.qnt;
      unit=prod.prod.price;
      const price = priceRow(qnt,unit)
      total=price+total;
    }
    return total;
  }
 
  let total = 0;
  total = rowCreation(total)
  
  
  let price;
  
  return <>
          <Grid container flex>
            <div className='flex justify-between'>
              <div>
                <table>
                  <tbody>
                    <tr>
                      <td>N° Devis</td>
                      <td>15115</td>
                    </tr>
                    <tr>
                      <td>Date de devis</td>
                      <td>25/05/2022</td>
                    </tr>
                    <tr>
                      <td>Date d'echeance</td>
                      <td>25/05/2022</td>
                    </tr>
                  </tbody>
                </table>
                <Typography variant='body2'>John Doe</Typography>
                <Typography variant='body2'>adress</Typography>
                <Typography variant='body2'>+55 55254896</Typography>
                <Typography variant='body2'>belhssan@gmail.com</Typography>
              </div>
              <div className='seller-section pad-16 center flex'>
                <img src={logo} alt='logo' className='w-80'/>
                <div className='seller-divider'></div>
                <div className='pad8'>
                  <Typography variant='body2'>{company[0].name}</Typography>
                  <Typography variant='body2'>{company[0].adress}</Typography>
                  <Typography variant='body2'>{company[0].phoneNumber}</Typography>
                  <Typography variant='body2'>{company[0].email}</Typography>
                  <Typography variant='body2'>{company[0].m_fiscal}</Typography>
                </div>
              </div>
            </div>
            </Grid>
            <div className='margtable'>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Product Name</TableCell>
                  <TableCell>Prix unitaire</TableCell>
                  <TableCell>Quantité</TableCell>
                  <TableCell>Total</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {prods.map(el=>
                  <TableRow>
                    <TableCell>
                      {el.prod.name}
                    </TableCell>
                    <TableCell>
                      {el.prod.price}
                    </TableCell>
                    <TableCell>
                      {el.qnt}
                    </TableCell>
                    <TableCell>
                      {price = priceRow(el.qnt,el.prod.price)}
                    </TableCell>
                    
                  </TableRow>)}
                  <TableRow>
                    <TableCell rowSpan={3}/>
                    <TableCell colSpan={2}>Sous-Total</TableCell>
                    <TableCell>{total}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Tax</TableCell>
                    <TableCell>{company[0].tva}%</TableCell>
                    <TableCell>{(total*company[0].tva)/100}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Total</TableCell>
                    <TableCell></TableCell>
                    <TableCell>{total+((total*company[0].tva)/100)}</TableCell>
                  </TableRow>
              </TableBody>
            </Table>
            <Button style={{background:"var(--main-color)",color:"var(--txt-white)"}} variant='contained' onClick={()=>dispatch(addDevis())}>Confirmer</Button>
            <Button variant='outlined' onClick={()=>{props.setOpenModal(false)}}>Annuler</Button>

            </div>
          
        </>;
};

export default Overview;
