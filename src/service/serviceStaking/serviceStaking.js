import abi from "./abi.json"
import {Web3} from "web3";

class Services{
    web3 = new Web3(window.ethereum)
    contractAddress = ''
    contract = new this.web3.eth.Contract(abi, this.contractAddress)
    wallet =''

//
    async stake (countLp){
        try{
            return await this.contract.methods.stake(countLp).send({from: this.wallet})
        } catch(error){
            console.log(error.message)
        }
    }

    async withdraw (){
        try{
            return await this.contract.methods.withdraw().send({from: this.wallet})
        } catch(error){
            console.log(error.message)
        }
    }

    async claimReward (countLp){
        try{
            return await this.contract.methods.claimReward(countLp).send({from: this.wallet})
        } catch(error){
            console.log(error.message)
        }
    }


}
export default new Services();