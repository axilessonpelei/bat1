import {Web3} from "web3";
import abi from "./abi";

class Services{
    web3 = new Web3(window.ethereum)
    contractAddress = '0xe1ef6154D704c48c5899Aa29c847A08845fad8c8'
    contract = new this.web3.eth.Contract(abi, this.contractAddress)
    wallet =''


    async swap ( amountIn, inputToken, outputToken){
        try{
            return await this.contract.methods.swap( amountIn, inputToken, outputToken).send({from: this.wallet})
        } catch(error){
            console.log(error.message)
        }
    }


}
export default new Services();