import servicePool from "../../../service/servicePool/servicePool.js";
import {Outlet} from "react-router-dom";

export const Pool = () => {

        //перевести токены
    const swap = async (e) => {
        e.preventDefault();
        await servicePool.swap();
    };
        //добавить ликвидность
    const addLiquidity = async (e) => {
        e.preventDefault();
        await servicePool.addLiquidity(_amount, _transferA);
    };

    return (
        <>
            <div className="container">
                <p>WOW</p>
            </div>

        </>
    )
}