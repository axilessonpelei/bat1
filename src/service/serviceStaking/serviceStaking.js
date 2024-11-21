import abi from "./abi.json"
import {Web3} from "web3";

class Services{
    web3 = new Web3(window.ethereum)
    contractAddress = '0x46Dd505Add594d0Ed64C043700B74e3924Cc38A1'
    contract = new this.web3.eth.Contract(abi, this.contractAddress)
    wallet =''

    async deposit (amount){
        try{
            return await this.contract.methods.deposit(amount).send({from: this.wallet})
        } catch(error){
            console.log(error.message)
        }
    }

    async claimReward (){
        try{
            return await this.contract.methods.claimReward().send({from: this.wallet})
        } catch(error){
            console.log(error.message)
        }
    }

}
export default new Services();