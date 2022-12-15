import { Link } from "react-router-dom";

const Notfound = () => {
    return ( 
        <div style={{textAlign: "center", marginTop: "50px"}}>
            <h1>404</h1>
            <p>متاسفانه صفحه مورد نظر پیدا نشد!</p>
            <Link to="/">صفحه اصلی</Link>
        </div>
     );
}
 
export default Notfound;