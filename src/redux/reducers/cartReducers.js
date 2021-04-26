import { ADD_TO_CART, REMOVE_FROM_CART } from './../actions/cartAction';
const initialState = {
    cart: [],
    products: [
    {name: 'Lenovo Laptop', picture: "https://cdn.mos.cms.futurecdn.net/vEcELHdn998wRTcCzqV5m9.jpg", price: 505, id: 1},
    {name: 'Asus Laptop', picture: "https://in-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/c/0/c06970886.png", price: 520, id: 2},
    {name: 'Dell Laptop', picture: "http://cdn.mos.cms.futurecdn.net/6t8Zh249QiFmVnkQdCCtHK.jpg", price: 503, id: 3},
    {name: 'HP Laptop', picture: "https://cdn.mos.cms.futurecdn.net/vEcELHdn998wRTcCzqV5m9.jpg", price: 530, id: 4},
    {name: 'Toshiba Laptop', picture: "http://cdn.mos.cms.futurecdn.net/6t8Zh249QiFmVnkQdCCtHK.jpg", price: 500, id: 5},
]
}

const cartReducers = (state = initialState, action) => {
    switch(action.type){
        case ADD_TO_CART:           
            const newItem = {
                productId: action.id,
                name: action.name,
                cartId: state.cart.length + 1,
                price: action.price,
                picture: action.picture
            };
            const newCart = [...state.cart, newItem];
             return {...state, cart: newCart};         
         
        case REMOVE_FROM_CART:
            const cartId = action.cartId;
            const remainingCart = state.cart.filter(item => item.cartId !== cartId);
            return {...state, cart: remainingCart}        

        default:
            return state;
    }
}

export default cartReducers;