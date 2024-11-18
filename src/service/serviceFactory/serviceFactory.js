import {Web3} from "web3";
import abi from "./abi";

class Services{
    web3 = new Web3(window.ethereum)
    contractAddress = '0xdC8718a41AA2bD3021447cA0a1dEC0A82F0CD1B1'
    contract = new this.web3.eth.Contract(abi, this.contractAddress)
    wallet =''

//создание pool
    async createPool (tokenA, tokenB, _reserveA, _reserveB){
        try{
            return await this.contract.methods.createPool(tokenA, tokenB, _reserveA, _reserveB).send({from: this.wallet})
        } catch(error){
            console.log(error.message)
        }
    }

    async getPools() {
        try {
            return await this.contract.methods.getPools().call();
        } catch (error) {
            console.error(error.message);
        }
    }

}
export default new Services();