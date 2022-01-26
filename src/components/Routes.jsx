import React from 'react'

import { Route, Switch} from 'react-router-dom'

import Dashboard from '../pages/Dashboard'
import Users from '../pages/Users/Users'
import EditUsers from '../pages/Users/EditUsers'
import Products from '../pages/Products/Products'
import Categories from '../pages/Categories/Categories'
import Client from '../pages/Client/Client'
import EditCategorie from '../pages/Categories/EditCategorie'
import EditProduct from '../pages/Products/EditProduct';
import EditClient from '../pages/Client/EditClient';
import Configuration from '../pages/Configuration/configuration';
import Devis from '../pages/devis/Devis'

const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={Dashboard}/>
            <Route path='/users' component={Users}/>
            <Route exact path='/editusers/:id' component={EditUsers} />
            <Route exact path='/products' component={Products} />
            <Route exact path='/editproduct/:id' component={EditProduct} />
            <Route exact path='/categories' component={Categories} />
            <Route exact path='/editcategory/:id' component={EditCategorie} />
            <Route exact path='/client' component={Client} />
            <Route exact path='/editclient/:id' component={EditClient} />
            <Route exact path='/settings' component={Configuration} />
            <Route exact path='/devis' component={Devis} />
        </Switch>
    )
}

export default Routes;
