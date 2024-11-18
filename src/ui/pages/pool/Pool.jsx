import servicePool from "../../../service/servicePool/servicePool.js";
import {useEffect, useState} from "react";

export const Pool = () => {
    const[_amount, setAmount] = useState(0);
    const [_transferA,setTransferA] = useState();
    const[fromAtoBtoken, setFromAtoBtoken] = useState();
    const[poolinfo,setPoolinfo] = useState([]);

    const getInfo = async () => {
        const userPool = await servicePool.getInfo();
        if (userPool) {
            setPoolinfo(userPool);
            console.log(userPool);
        }

    };

    useEffect(() => {
        (async () => {
            await getInfo();
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
            <div className="container">
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
                <div>
                    {poolinfo.map((poolinfo, index) => (
                        <div key={index} className="col-md-4 mb-4">
                            <div className="card">
                                <div className="card-body">
                                    <p className="card-title"> TokenA: {poolinfo.nameA.toString()}</p>
                                    <p className="card-text"> TokenB: {poolinfo.nameB.toString()} </p>
                                    <p className="card-text"> Общая стоимость:
                                        {poolinfo.priceA} * {poolinfo.amountA} + {poolinfo.priceB} * {poolinfo.amountB}</p>
                                    <p className="card-text"> отношение в криптовалюте:
                                        {poolinfo.priceA} * {poolinfo.amountA} : {poolinfo.price} * {poolinfo.amountB}</p>
                                    <p className="card-text"> отношение в токенах:
                                        {poolinfo.amountA} : {poolinfo.amountB}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </>
    )
}