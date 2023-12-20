import { users } from "../users/users.js";
import { deposit } from "./operations/deposit.js";
import { withdraw } from "./operations/withdraw.js";

export let repeat = true
export async function performOperation(option: string , userIndex:number) {
    switch (option) {
      case "Withdraw":
        repeat = await withdraw(userIndex) 

        break;
      case "Deposit":
       repeat = await deposit(userIndex)
        // Implement deposit logic
        break;
        case 'Check Balance':
          console.log(`Your Balance Is ${users[userIndex].balance}\n`);
        // Implement check balance logic
        break;
      case "Logout":
        repeat = false
        console.log('Logging out.');
        break;
      default:
        console.log('Invalid option.');
    }

}