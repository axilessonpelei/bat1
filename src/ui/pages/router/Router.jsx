import serviceRouter from "../../../service/serviceRouter/serviceRouter.js";
import {useState} from "react";


export const Router = () => {
    const[tokenA, setTokenA] = useState("");
    const [tokenB, setTokenB] = useState("");
    const[amount, setAmount] = useState("");

    const swap = async (e) => {
        e.preventDefault();
        await serviceRouter.swap(tokenA,  tokenB,  amount);};

    return (
        <>
            <div className="container">
                <h2>router swap</h2>
                <form onSubmit={swap}>
                    <label> токен А </label>
                    <input
                        type="number"
                        className="form-control"
                        value={tokenA}
                        onChange={(e) => setTokenA(e.target.value)}
                        required
                    />
                    <label> токен B </label>
                    <input
                        type="number"
                        className="form-control"
                        value={tokenB}
                        onChange={(e) => setTokenB(e.target.value)}
                        required
                    />
                    <label> колличество токенов </label>
                    <input
                        type="number"
                        className="form-control"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        required
                    />
                    <button type="submit" className="btn btn-primary">обменять токены</button>
                </form>
            </div>
        </>
    )
}