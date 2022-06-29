# PS-Product-Card

Este es un paquete de pruebas de desplegue en NPM

### Pieda Solorzano

## Ejemplo
```
import {ProductCard, ProductImage, ProductTitle, ProductButtoms} from 'ps-product-card';
```
```
 <ProductCard className="bg-dark text-white" product={product} initialValues={{
                    count: 4,
                    maxCount: 10
                }} >
                    {
                        ({reset, isMaxCountReached, maxCount, increaseBy, count}) => (
                            <>
                                <ProductImage/>
                                <ProductTitle/>
                                <ProductButtoms/>                               
                            </>
                        )
                    }

</ProductCard>
```