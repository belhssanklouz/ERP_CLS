import { Grid, Table, Typography,TableHead,TableRow,TableCell, TableBody } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import logo from '../../assets/images/cls-logo.png'
import './overview.css'



const Overview = () => {
  const prods = useSelector(state=>state.ProductReducer.selected) || []

  const formatNumber = (num) =>{
    return `${num.toFixed(2)}`
  }

  const priceRow = (qnt,unit) =>{
    return qnt*unit;
  }

  const rowCreation = ()=>{
    let name;
    let qnt;
    let unit;
    let price;
    for (let prod of prods){
      name=prod.prod.name;
      qnt=prod.qnt;
      unit=prod.unit;
      price = priceRow(qnt,unit)
    }
    return {name,qnt,unit,price}
  }
  const total = []
  console.log(prods)
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
                <p>John Doe</p>
                <p>adress</p>
                <p>+55 55254896</p>
                <p>belhssan@gmail.com</p>
              </div>
              <div className='seller-section pad-16 center flex'>
                <img src={logo} alt='logo' className='w-80'/>
                <div className='seller-divider'></div>
                <div className='pad8'>
                  <Typography variant='body2'>Consulting @ Logiciels et Systemes</Typography>
                  <Typography variant='body2'>Adress0</Typography>
                  <Typography variant='body2'>+66 545451541</Typography>
                  <Typography variant='body2'>hello@gmail.com</Typography>
                  <Typography variant='body2'>451541/A/M</Typography>
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
                      {el.qnt*el.prod.price}
                    </TableCell>
                  </TableRow>)}
              </TableBody>
            </Table>
            </div>
          
        </>;
};

export default Overview;
