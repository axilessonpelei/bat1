import Header from "../../component/header/Header.jsx";
import serviceRouter from "../../../service/serviceRouter/serviceRouter.js";


export const Router = () => {

    const swap = async (e) => {
        e.preventDefault();
        await serviceRouter.swap(tokenA,  tokenB,  amount);
    };

    return (
        <>
            <div className="container">


            </div>

        </>
    )
}