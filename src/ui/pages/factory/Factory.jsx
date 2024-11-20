import 'bootstrap/dist/css/bootstrap.min.css';
import {useState, useEffect} from "react";
import ServiceFactory from "../../../service/serviceFactory/serviceFactory.js";
import serviceFactory from "../../../service/serviceFactory/serviceFactory.js";



export const Factory = () => {
    const[tokenA, setTokenA] = useState("");
    const [tokenB, setTokenB] = useState("");
    const[_reserveA, setReserveA] = useState("");
    const[_reserveB, setReserveB] = useState("");
    const [pools, setPools] = useState([]);

    const getPools = async () => {
        const userPool = await serviceFactory.getPools();
        if (userPool) {
            setPools(userPool);
            console.log(userPool);
        }

    };

    useEffect(() => {
        (async () => {
            await getPools();
        })();
    }, []);

    // добавить Pool
    const addPool = async (e) => {
        e.preventDefault();
        const tokenA = e.target[0].value;
        const tokenB = e.target[1].value;
        const _reserveA = e.target[2].value;
        const _reserveB = e.target[3].value;
        await ServiceFactory.createPool(tokenA, tokenB, _reserveA, _reserveB);  // Отправляем запрос на создание залога
        await getPools();
    };

    return (
        <>
            <div className="container">
                <h2>создание pool</h2>
                <form onSubmit={addPool}>
                    <label> token А </label>
                    <input
                        type="text"
                        className="form-control"
                        value={tokenA}
                        onChange={(e) => setTokenA(e.target.value)}
                        required
                    />
                    <label> token B </label>
                    <input
                        type="text"
                        className="form-control"
                        value={tokenB}
                        onChange={(e) => setTokenB(e.target.value)}
                        required
                    />
                    <label> reserveА </label>
                    <input
                        type="number"
                        className="form-control"
                        value={_reserveA}
                        onChange={(e) => setReserveA(e.target.value)}
                        required
                    />
                    <label> reserveB </label>
                    <input
                        type="number"
                        className="form-control"
                        value={_reserveB}
                        onChange={(e) => setReserveB(e.target.value)}
                        required
                    />
                    <button type="submit" className="btn btn-primary">создать pool</button>
                </form>
                <div >
                    {pools.map((pool, index) => (
                        <div key={index} className="col-md-4 mb-4">

                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}