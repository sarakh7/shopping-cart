import { Button, Card, Divider } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { addItemToCart } from '../../store/entities/cart/cartActions';
import { useDispatch } from 'react-redux';
import { uiActions } from './../../store/ui/uiSlice';
import ButtonGroup from './../cart/ButtonGroup';
import styles from './products.module.css';

const { Meta } = Card;

const Product = ({ product }) => {

    const dispatch = useDispatch();

    const addToCart = (product) => {
        dispatch(addItemToCart({ ...product }));

        dispatch(uiActions.sendNotification({
            type: 'success',
            message: 'کالا به سبد خرید اضافه شد'
        }));

    }

    return (
        <Card
            hoverable
            cover={<img className={styles.cardImg} alt={product.title} src={product.image} />}
        >
            <Meta
                title={<h3>{product.title}</h3>}
                description={<p className={styles.cardDescription}>{`${product.description.slice(0, 60)} ...`}</p>}
            />
            <Divider />
            <div className={styles.cardFooter}>
                <div className={styles.price}>{product.price} تومان</div>
                {
                    product.quantity > 0 ?
                        <ButtonGroup record={product} />
                        : <Button
                            type='primary'
                            icon={<ShoppingCartOutlined />}
                            onClick={() => addToCart(product)}
                        >خرید</Button>

                }

            </div>
        </Card>

    );
}

export default Product;