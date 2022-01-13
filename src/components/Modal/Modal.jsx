import React from 'react'
import { Dialog, DialogContent, DialogTitle, Typography } from '@mui/material';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme=>({
    dialogWrapper: {
        padding: theme.spacing(2),
        position: 'absolute',
        top: theme.spacing(5)
    }
}))

const Modal = (props) => {

    const handleClose = () =>{
        setOpenModal(false)
        window.location.reload(false);

    }

    const classes = useStyles();

    const {title,children,openModal,setOpenModal} = props;
    return (
       <Dialog open={openModal} maxWidth='md' classes={{ paper :classes.dialogWrapper}} onClose={handleClose}>
           <DialogTitle>
               <Typography variant="h6" component='div'>
                   {title}
               </Typography>
           </DialogTitle>
           <DialogContent dividers>
               {children}
           </DialogContent>
       </Dialog>
    )
}

export default Modal
