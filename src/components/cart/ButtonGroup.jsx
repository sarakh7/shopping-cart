import { Space, Button } from 'antd';
import { PlusOutlined, MinusOutlined, DeleteOutlined } from '@ant-design/icons';
import styles from './cart.module.css';
import { useDispatch } from 'react-redux';
import { removeItemFromCart } from '../../store/entities/cart/cartActions';
import { uiActions } from './../../store/ui/uiSlice';
import { productActions } from './../../store/entities/products/productSlice';
import { addItemToCart } from './../../store/entities/cart/cartActions';

const ButtonGroup = ({record}) => {
    const dispatch = useDispatch();

    const removeFromCart = (productId) => {

        dispatch(removeItemFromCart(productId));

        dispatch(uiActions.sendNotification({
            type: 'error',
            message: 'کالا از سبد خرید حذف شد.'
        }));

        dispatch(productActions.setIsInCart({
            id: productId,
            isInCart: false
        }));
    }

    return (
        <Space className={styles.actions}>
            <Button icon={<PlusOutlined />} type='link' onClick={() => dispatch(addItemToCart(record))} />
            <span>{record.quantity}</span>
            {
                record.quantity > 1
                    ? <Button icon={<MinusOutlined />} type='link' onClick={() => dispatch(removeItemFromCart(record.id))} />
                    : <Button danger icon={<DeleteOutlined />} type='link' onClick={() => removeFromCart(record.id)} />
            }

        </Space>
    );
}

export default ButtonGroup;