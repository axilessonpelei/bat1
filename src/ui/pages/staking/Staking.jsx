import 'bootstrap/dist/css/bootstrap.min.css';
import serviceStaking from "../../../service/serviceStaking/serviceStaking.js";
import { useState} from "react";

export const Staking = () => {
        const[amount, setAmount] = useState(0);

        const deposit = async (e) => {
                e.preventDefault();
                await serviceStaking.deposit(amount);
        };

        const claimReward = async (e) => {
                e.preventDefault();
                await serviceStaking.claimReward();
        };


        return (
            <>
                    <div className="container">
                            <h2>staking</h2>
                            <form onSubmit={deposit}>
                                    <label> колличество токенов </label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        value={amount}
                                        onChange={(e) => setAmount(e.target.value)}
                                        required
                                    />
                                    <button type="submit" className="btn btn-primary">застейкать токены</button>
                            </form>
                            <h2>claimReward</h2>
                            <form onSubmit={claimReward}>
                                    <button type="submit" className="btn btn-primary">забрать вознаграждение</button>
                            </form>
                    </div>
            </>
        )
}