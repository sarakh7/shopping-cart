import { Badge, Button, Drawer, Layout } from "antd";
import MainNav from "../nav/MainNav";
import { ConfigProvider } from 'antd';
import { ShoppingCartOutlined, MenuOutlined } from '@ant-design/icons';
import { useState } from "react";
import styles from './main-layout.module.css'
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const MainLayout = ({ children }) => {

    const { Header, Footer, Content } = Layout;

    const [open, setOpen] = useState(false);

    const total = useSelector(state => state.cart.total);

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    return (
        <ConfigProvider direction="rtl">

            <Layout>
                <Header className={styles.header}>
                    <Link to='/' className={styles.logo}><img src="/images/logo.jpg" alt="logo" /></Link>
                    <div className={styles.menuWrapper}>
                        <MainNav direction='horizontal' />
                    </div>

                    <Button icon={<MenuOutlined />} className={styles.mobileMenuBtn} size="large" type="primary" onClick={showDrawer} />

                    <Drawer title="" placement="right" onClose={onClose} open={open}>
                        <MainNav direction='vertical' />
                    </Drawer>
                    <Link to='/' className={styles.mobileLogo}><img src="/images/logo.jpg" alt="logo" /></Link>

                    <Link className={styles.cartLink} to='/cart'>
                        <Badge className={styles.badge} count={total} >
                            <Button className={styles.cart} type="primary" shape="circle" icon={<ShoppingCartOutlined />} size="large" />
                        </Badge>
                    </Link>

                </Header>

                <Content className={styles.content}>
                    <div className={styles.sitelayoutcontent}>
                        {children}
                    </div>
                </Content>

                <Footer style={{ textAlign: 'center' }}>تمامی حقوق برای فروشگاه آنلاین محفوظ است.</Footer>
            </Layout>
        </ConfigProvider>
    );
}

export default MainLayout;