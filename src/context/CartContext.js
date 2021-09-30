import React, { createContext, useState} from 'react';

export const CartContext = createContext([])

const CartProvider = ({defaultItem=[], children}) => {
    const [cartState, setCartState] = useState(defaultItem)

    const addItem = (product) => {
        if (!isInCart(product)) {
            setCartState([...cartState, product])
        } else {
            setCartState(cartState.map(item => {
                if (item.id !== product.id) return item
                return {...item, cantidad: product.cantidad}
            }))
        }
    }

    const removeItem = (product) => {
        setCartState(cartState.filter(item => item.id != product.id))
    }

    const isInCart = (product) => {
        return cartState.find(cartItem => cartItem.id == product.id)
    }
    
    return <CartContext.Provider value={{cartState, addItem, removeItem}}>
        {children}
    </CartContext.Provider>
}

export default CartProvider;