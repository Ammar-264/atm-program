import inquirer from "inquirer";
import { users } from "../../users/users.js";


export async function deposit( userIndex:number){

    let amount = await inquirer.prompt({
        type:"number",
        name:"amount",
        message:"Enter The Amount You Want To Deposit : "
    })

    
        users[userIndex].balance += amount.amount

        console.log(`${amount.amount} Deposited Successfully\n`);
        return true    
}
