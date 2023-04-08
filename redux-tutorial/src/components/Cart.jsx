import React from 'react'
import{
    increment,
    decrement,
    reset
} from '../store/actions/cartAction'

import { useDispatch,useSelector } from 'react-redux'
const Cart = () => {
    const dispatch=useDispatch()
   
    let state=useSelector((state)=>state.cart)

    return (
        <>
            <h1>Shopping Cart</h1>
            <h1>{state}</h1>
            <button onClick={()=>dispatch(increment())}>ADD TO CART</button>
            <button onClick={()=>dispatch(decrement())}>REMOVE FROM CART</button>
            <button onClick={()=>dispatch(reset())}>RESET</button>
            
            </>
    )
}

export default Cart

// UseSelector shows current state  == initial state =0 current state change hoti jaye gi. 
//useDispatch perform the actions.