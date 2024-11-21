import serviceRouter from "../../../service/serviceRouter/serviceRouter.js";
import {useState} from "react";


export const Router = () => {
    const[inputToken, setInputToken] = useState("");
    const [outputToken, setOutputToken] = useState("");
    const[amountin, setAmountin] = useState("");

    const trade = async (e) => {
        e.preventDefault();
        await serviceRouter.swap(inputToken,  outputToken,  amountin);};

    return (
        <>
            <div className="container">
                <h2>router swap</h2>
                <form onSubmit={trade}>
                    <label> токен А </label>
                    <input
                        type="number"
                        className="form-control"
                        value={inputToken}
                        onChange={(e) => setInputToken(e.target.value)}
                        required
                    />
                    <label> токен B </label>
                    <input
                        type="number"
                        className="form-control"
                        value={outputToken}
                        onChange={(e) => setOutputToken(e.target.value)}
                        required
                    />
                    <label> колличество токенов </label>
                    <input
                        type="number"
                        className="form-control"
                        value={amountin}
                        onChange={(e) => setAmountin(e.target.value)}
                        required
                    />
                    <button type="submit" className="btn btn-primary">обменять токены</button>
                </form>
            </div>
        </>
    )
}