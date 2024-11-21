import {Web3} from "web3";
import abi from "./abi";

class Services{
    web3 = new Web3(window.ethereum);
    contractAddress = '0x4d24DE2C6a4b8c0cEFd142669840907B99A79436';
    contract = new this.web3.eth.Contract(abi, this.contractAddress);
    wallet = '';

//создание pool
    async createPool (tokenA, tokenB, reserveA, reserveB){
        try{
            return await this.contract.methods.createPool(tokenA, tokenB, reserveA, reserveB).send({from: this.wallet});
        } catch(error){
            console.log(error.message);
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