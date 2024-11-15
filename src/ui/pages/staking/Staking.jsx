import 'bootstrap/dist/css/bootstrap.min.css';
import serviceStaking from "../../../service/serviceStaking/serviceStaking.js";
import { useState} from "react";

export const Staking = () => {
        const [count, setCount] = useState(0);

        // const stake = async (e) => {
        //         e.preventDefault();
        //         await serviceStaking.stake(countLp);
        // };
        //
        // const withdraw = async (e) => {
        //         e.preventDefault();
        //         await serviceStaking.withdraw();
        // };
        //
        // const claimReward = async (e) => {
        //         e.preventDefault();
        //         await serviceStaking.claimReward(countLp);
        // };


    return (
        <>
            <div className="container">
                    <div>
                            <form>
                                    <label> колличество токенов </label>
                                    <input type="submit" value="reward" onChange={(e) => setCount(e.target.value)}/>
                            </form>

                            <form>
                                    <input type="submit" value="reward" onChange={(e) => setCount(e.target.value)}/>
                            </form>

                            <form>
                                    <label> колличество токенов </label>
                                    <input type="submit" value="reward" onChange={(e) => setCount(e.target.value)}/>
                            </form>
                    </div>
            </div>
        </>
    )
}