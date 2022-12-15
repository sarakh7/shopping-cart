import { Col, Row } from 'antd';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getAllProducts } from '../../store/entities/products/productActions';
import Product from './Product';

const Products = () => {

    const products = useSelector(state => state.products.products);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllProducts());        
    }, [dispatch])

    return (
        <Row justify='start' gutter={[40, 40]}>
            {
                products.length > 0
                    ? products.map((product, index) =>
                        <Col key={index} md={12} lg={6}>
                            <Product product={product} />
                        </Col>
                    )
                    : 'در حال بارگزاری ...'
            }

        </Row>
    );
}

export default Products;