import { FC } from 'react';

interface Product {
    name: string;
    description: string;
    price: number,
    category: string;
    image: string;
}
const ProductDetail : FC<Product> = (props: any)=>{

const {name, description, price, category, image} = props;

return(
    <div className= 'product-detail-container'>
        <div className='details-header'>
            <h1>Product: {name}</h1>
            <button>Edit</button>
            <button>Delete</button>
        </div>
            
        <div className='details-content'>
            <div>Name: {name}</div>
            <div>Category:{category}</div>
            <div>Price:{price}</div>
            <div>Description:{description}</div>
            <div>{image}</div>
        </div>   
        
    </div>
)
}
export default ProductDetail;