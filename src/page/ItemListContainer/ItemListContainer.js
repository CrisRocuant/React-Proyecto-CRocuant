
import { products } from '../../data/products';


const ItemListContainer = ({ greeting}) => {

    const getProducts = new Promise((res, rej) => {
        setTimeout (() => {
            res(products)
        }, 3000);

    });
    getProducts()

    return <div>{greeting}</div>
};
export default ItemListContainer;