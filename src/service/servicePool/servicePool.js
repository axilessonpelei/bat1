import {Web3} from "web3";
import abi from "./abi";

class Services{
    web3 = new Web3(window.ethereum)
    contractAddress = '0xd584564Db3b56466b3282a7d9cB654142517eb3B'
    contract = new this.web3.eth.Contract(abi, this.contractAddress)
    wallet =''

// обмен токенов
    async swap (fromAtoBToken, _amount){
        try{
            return await this.contract.methods.swap(fromAtoBToken, _amount).send({from: this.wallet})
        } catch(error){
            console.log(error.message)
        }
    }
//обавление ликвидности
    async addLiquidity(_amount, _transferA){
        try{
            return await this.contract.methods.addLiquidity(_amount, _transferA).send({from: this.wallet})
        } catch(error){
            console.log(error.message)
        }
    }

    async getTokenInfo() {
        try {
            return await this.contract.methods.getTokenInfo().call();
        } catch (error) {
            console.error(error.message);
        }
    }


}
export default new Services();