import React from 'react'
import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'
import {delCart} from '../features/action/index'
import {Link} from 'react-router-dom'


const Cart = () => {

    const state = useSelector((state) => state.handleCart)
    const dispatch = useDispatch();

    const handleClose = (item) => {
        dispatch(delCart(item))
    }

    const cartItems = (cartItem) => {
        return(
            <div className="px-4 my-5 bg-light rounded-3" key={cartItem.id}>
                <div className="container py-4">
                    <button onClick={()=>handleClose(cartItem)} className="btn-close float-end" arial-label="Close"></button>
                    <div className="row justify-content-start">
                        <div className="col-md-4">
                            <img src={cartItem.image} alt={cartItem.title} height="200px" width="180px" />
                        </div>
                        <div clasName ="col-md-4">
                            <h3 className="title_cartItem">Product: {cartItem.title}</h3>
                            <p className="lead fw-bold">Price: ${cartItem.price}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    const emptyCart = () => {
        return(
            <div className="px-4 my-5 bg-light rounded-3 py-5">
                <div className="container py-4">
                    <div className="row">
                        <h3>Your Cart is Empty</h3>
                    </div>
                    </div>
                </div>
        )
    }

    const button = () => {
        return (
            <div className="container">
                <div className="row">
                    <Link to="/checkout" className="btn btn-outline-primary mb-5 w-25 mx-auto">Proceed To checkout</Link>
                </div>
            </div>
        );
    }

    return (
        <>
            {state.length === 0 && emptyCart()}
            {state.length !== 0 && state.map(cartItems)}
            {state.length !== 0 && button()}
        </>
    )
}

export  {Cart}