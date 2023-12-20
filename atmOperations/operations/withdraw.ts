import inquirer from "inquirer";
import { users } from "../../users/users.js";

export async function withdraw( userIndex:number){

    let amount = await inquirer.prompt({
        type:"number",
        name:"amount",
        message:"Enter The Amount You Want To Withdraw : "
    })

    if(users[userIndex].balance >= amount.amount) {
        users[userIndex].balance -= amount.amount

        console.log(`${amount.amount} withdrawn successfully\n`);
        
    }else{
        console.log('Insufficient Funds\n');
        
    }
    return true
}