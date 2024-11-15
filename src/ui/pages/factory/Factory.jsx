import serviceFactory from "../../../service/serviceFactory/serviceFactory.js";
import 'bootstrap/dist/css/bootstrap.min.css';


export const Factory = () => {

    // добавить Pool
    const addPool = async (e) => {
        e.preventDefault();
        await serviceFactory.createPool(tokenA, tokenB, _reserveA, _reserveB);  // Отправляем запрос на создание залога

    };

    return (
            <>


            </>
    )
}