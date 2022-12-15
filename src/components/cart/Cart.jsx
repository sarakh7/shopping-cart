import { Table, Card, Button } from "antd";
import { useSelector } from 'react-redux';
import styles from './cart.module.css';
import ButtonGroup from './ButtonGroup';

const Cart = () => {

    const cart = useSelector(state => state.cart);

    let locale = {
        emptyText: 'سبد خرید شما خالی است',
    };

    const columns = [
        {
            title: 'سبد خرید',
            dataIndex: 'product',
            key: 'product',
            render: (text, record, index) => (
                <div className={styles.product}>
                    <div className={styles.productImageWrapper}>
                        <img src={record.image} alt={record.title} />
                    </div>
                    <div className={styles.productInfo}>
                        <div className={styles.productMeta}>
                            <h3>{record.title}</h3>
                            <span className={styles.price}>{record.totalPrice}</span>
                            <span>تومان</span>
                        </div>
                        <ButtonGroup record={record} />
                    </div>
                </div >

            ),
        }

    ];

    return (
        <>
            <Table locale={locale} columns={columns} dataSource={cart.items} pagination={false} />
            <Card className={styles.priceCard} title="جمع سبد خرید">
                <div className={styles.totalPriceContainer}><span className={styles.totalPrice}>{cart.totalPrice}</span> تومان</div>
                <Button type="primary" danger>ادامه</Button>
            </Card>
        </>
    );
}

export default Cart;