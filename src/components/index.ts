import { ProductCardHOCProps } from '../interfaces/interfaces';
import { ProductButtoms } from './ProductButtoms';
import { ProductCard as ProductCardHOC} from './ProductCard';
import { ProductImage } from './ProductImage';
import { ProductTitle } from './ProductTitle';

export { ProductButtoms } from './ProductButtoms';
//export { ProductCard } from './ProductCard';
export { ProductImage } from './ProductImage';
export { ProductTitle } from './ProductTitle';


const ProductCard: ProductCardHOCProps=Object.assign(ProductCardHOC,{
    Title:ProductTitle,
    Image: ProductImage,
    Buttoms: ProductButtoms,
});


export default ProductCard;