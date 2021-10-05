import React, { createContext, useState} from 'react';

export const CartContext = createContext([])

const CartProvider = ({defaultItem=[], children}) => {
    const [cartState, setCartState] = useState(defaultItem)

    const addItem = (product, amount) => {console.log(cartState)
        if (!isInCart(product)) {
            setCartState([...cartState, product])
            product.cantidad = amount;
        } else {
            setCartState(cartState.map(item => {
                if (item.id !== product.id) return item
                return {...item, cantidad: item.cantidad + amount}
            }))
        }
    }

    const removeItem = (product) => {
        setCartState(cartState.filter(item => item.id != product.id))
    }

    const isInCart = (product) => {
        return cartState.find(cartItem => cartItem.id == product.id)
    }

    const clearCart = () =>{
        setCartState([])
    }
    
    return <CartContext.Provider value={{cartState, addItem, removeItem, clearCart}}>
        {children}
    </CartContext.Provider>
}

export default CartProvider;