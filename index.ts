import inquirer from 'inquirer'
import { performOperation, repeat } from './atmOperations/performOperation.js';
import { users } from './users/users.js';


export function authenticateUser(userId: string, pin: string): { success: boolean, index: number } {
    const index = users.findIndex(user => user.id === userId && user.pin === pin);
  
    
    if (index !== -1) {
      return { success: true, index };
    } else {
      return { success: false , index };
    }
  }

  
  

console.log('\nwelcome to ATM Program \n\n Enter UserId And Password to login');


let userLoginDetail = await inquirer.prompt([
    {
        type:"input",
        name:"userId",
        message:"Enter User Id : "
    },
    {
        type:"password",
        name:"password",
        message:"Enter Password : "
    },
])

let userAuthenticated = authenticateUser(userLoginDetail.userId , userLoginDetail.password)

if(userAuthenticated.success){
    
    
    while(repeat){
   
        let atmOptions = await inquirer.prompt({
            type:"list",
            name:"option",
            message:"which ATM operation you want to perform ? ",
            choices:['Withdraw', 'Deposit' , 'Check Balance' , 'Logout']
        })
        
       await performOperation(atmOptions.option , userAuthenticated.index)
    }
    
}else{
    console.log('wrong credentials');
    
}

