import {Web3} from "web3";
import abi from "./abi";

class Services{
    web3 = new Web3(window.ethereum)
    contractAddress = '0xdC8718a41AA2bD3021447cA0a1dEC0A82F0CD1B1'
    contract = new this.web3.eth.Contract(abi, this.contractAddress)
    wallet =''

//
    async swap ( tokenA,  tokenB,  amount){
        try{
            return await this.contract.methods.swap(tokenA,  tokenB,  amount).send({from: this.wallet})
        } catch(error){
            console.log(error.message)
        }
    }


}
export default new Services();