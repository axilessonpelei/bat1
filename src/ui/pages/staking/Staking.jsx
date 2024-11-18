import 'bootstrap/dist/css/bootstrap.min.css';
import serviceStaking from "../../../service/serviceStaking/serviceStaking.js";
import servicePool from "../../../service/servicePool/servicePool.js";
import { useState} from "react";

export const Staking = () => {
        const [countLp, setCountLp] = useState(0);
        const [_transferA,setTransferA] = useState();
        const[_amount, setAmount] = useState(0);

        const stake = async (e) => {
                e.preventDefault();
                await serviceStaking.stake(countLp);
        };

        const withdraw = async (e) => {
                e.preventDefault();
                await serviceStaking.withdraw();
        };

        const claimReward = async (e) => {
                e.preventDefault();
                await serviceStaking.claimReward(countLp);
        };

        return (
            <>
                    <div className="container">
                            <h2>staking</h2>
                            <form onSubmit={stake}>
                                    <label> колличество токенов </label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        value={countLp}
                                        onChange={(e) => setCountLp(e.target.value)}
                                        required
                                    />
                                    <button type="submit" className="btn btn-primary">застейкать токены</button>
                            </form>
                            <h2>withdraw</h2>
                            <form onSubmit={withdraw}>
                                    <button type="submit" className="btn btn-primary">забрать токены</button>
                            </form>
                            <h2>claimReward</h2>
                            <form onSubmit={claimReward}>
                                    <label> колличество токенов </label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        value={countLp}
                                        onChange={(e) => setCountLp(e.target.value)}
                                        required
                                    />
                                    <button type="submit" className="btn btn-primary">забрать вознагрождение</button>
                            </form>
                    </div>
            </>
        )
}