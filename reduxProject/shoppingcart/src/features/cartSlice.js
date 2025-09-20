import { createSlice } from '@reduxjs/toolkit'
import { act } from 'react'

const initialState = {
    cart: [],
    TotalPrice: 0,
    TotalQuantity: 0,
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, actions) => {

            const find = state.cart.findIndex((value) => {
                return value.id === actions.payload.id
            })
            // console.log(find);

            if (find != -1) {
                state.cart[find] = ({ ...state.cart[find], quantity: state.cart[find].quantity + 1 })
            } else {
                state.cart.push({ ...actions.payload, quantity: 1 })
            }
        },
        deleteCartItem: (state, actions) => {
            state.cart = state.cart.filter((value) => {
                return value.id !== actions.payload.id
            })
        },
        IncrementQuantity: (state, actions) => {
            state.cart = state.cart.map((value) => {
                if (value.id === actions.payload.id) {
                    return { ...value, quantity: value.quantity + 1 }
                }
                return value
            })
        },
        DecrementQunatity: (state, actions) => {
            state.cart = state.cart.map((value) => {
                if (value.id === actions.payload.id) {
                    return { ...value, quantity: value.quantity > 1 ? value.quantity - 1 : 1 }
                }
                return value
            })
        },
        cartTotal: (state) => {
            const { totalPrice, totalQuantity } = state.cart.reduce((cartTotal, cartItems) => {
                const { price, quantity } = cartItems
                const itemTotal = parseFloat(price) * quantity
                cartTotal.totalPrice += itemTotal
                cartTotal.totalQuantity += quantity
                return cartTotal
            }, {
                totalPrice: 0,
                totalQuantity: 0
            })
            state.TotalPrice = totalPrice
            state.TotalQuantity = totalQuantity
        }
    },
})


export const { addToCart, deleteCartItem, IncrementQuantity, DecrementQunatity, cartTotal } = cartSlice.actions

export default cartSlice.reducer