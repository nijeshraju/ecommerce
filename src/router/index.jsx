import Product from '../pages/index'
import Detail from '../pages/detail'
import Cart from '../pages/cart'
import Checkout from '../pages/checkout'

const ROUTER = [
    {
        url: "/",
        component: Product,
    },
    {
        url: "/detail/:id",
        component: Detail,
    },
    {
        url: "/cart",
        component: Cart,
    },
    {
        url: "/checkout",
        component: Checkout,
    }
];

export { ROUTER };