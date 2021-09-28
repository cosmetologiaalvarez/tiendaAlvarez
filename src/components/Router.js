import React from "react";
import ItemDetailContainer from './ItemDetailContainer.js';
import ItemListContainer from './ItemListContainer.js';
import Cart from './Cart.js';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <ItemListContainer />
                </Route>
                <Route path="/category/:categoryId">
                    <ItemListContainer />
                </Route>
                <Route path="/item/:id">
                    <ItemDetailContainer />
                </Route>
                <Route path="/cart">
                    <Cart />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Router;