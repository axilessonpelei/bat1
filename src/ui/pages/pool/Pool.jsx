import servicePool from "../../../service/servicePool/servicePool.js";
import {useEffect, useState} from "react";

export const Pool = () => {
    const[_amount, setAmount] = useState(0);
    const [_transferA,setTransferA] = useState();
    const[fromAtoBtoken, setFromAtoBtoken] = useState();
    const[poolInfo,setPoolInfo] = useState([]);

    const getTokenInfo = async () => {
        const userPool = await servicePool.getInfo();
        if (userPool) {
            setPoolInfo(userPool);
            console.log(userPool);
        }

    };

    useEffect(() => {
        (async () => {
            await getTokenInfo();
        })();
    }, []);

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
            <div>
                    {poolInfo.map((pool, index) => (
                        <div key={index} className="col-md-4 mb-4">
                            <div className="card">
                                <div className="card-body">
                                    <p className="card-title"> TokenA: {pool.nameA.toString()}</p>
                                    <p className="card-text"> TokenB: {pool.nameB.toString()} </p>
                                    <p className="card-text"> Общая стоимость:
                                        {pool.priceA * pool.amountA + pool.priceB * pool.amountB}</p>
                                    <p className="card-text"> отношение в криптовалюте:
                                        {pool.priceA * pool.amountA} : {pool.price * pool.amountB}</p>
                                    <p className="card-text"> отношение в токенах:
                                        {pool.amountA} : {pool.amountB}</p>
                                <div className='swap'>
                                <h2>addLiquidity</h2>
                                <form onSubmit={addLiquidity}>
                                    <label> amount </label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        value={_amount}
                                        onChange={(e) => setAmount(e.target.value)}
                                        required
                                    />
                                    <label>transferA</label>
                                    <input
                                        type="bool"
                                        className="form-control"
                                        value={_transferA}
                                        onChange={(e) => setTransferA(e.target.value)}
                                        required
                                    />
                                    <p></p>
                                    <button type="submit" className="btn btn-primary">addLiquidity</button>
                                </form>
                                <h2>swap</h2>
                                <form onSubmit={swap}>
                                    <label>fromAtoBToken</label>
                                    <input
                                        type="bool"
                                        className="form-control"
                                        value={fromAtoBtoken}
                                        onChange={(e) => setFromAtoBtoken(e.target.value)}
                                        required
                                    />
                                    <label>amount</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        value={_amount}
                                        onChange={(e) => setAmount(e.target.value)}
                                        required
                                    />
                                    <button type="submit" className="btn btn-primary">swap</button>
                                </form>
                                </div>
                            </div>
                        </div>
                        </div>
                    ))}
            </div>
        </>
    )
}