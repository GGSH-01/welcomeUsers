let usersArr = [ 
    {username: 'Jan Kowalski', birthYear: 1983, salary: 4200},
    {username: 'Anna Nowak', birthYear: 1994, salary: 7500},  
    {username: 'Jakub Jakubowski', birthYear: 1985, salary: 18000},  
    {username: 'Piotr Kozak', birthYear: 2000, salary: 4999},  
    {username: 'Marek Sinica', birthYear: 1989, salary: 7200},  
    {username: 'Kamila Wisniewska', birthYear: 1972, salary: 6800}, 
];

function welcomeUsers(users){
    users.forEach(user => {
        console.log(user);
        if(user.salary > 15000){
            console.log('Witaj, prezesie!');
        }else if(user.salary < 5000){
            console.log(user.username + ', szykuj sie na podwyzke!');
        }else if(user.birthYear % 2 == 0){
            let age = new Date().getFullYear() - user.birthYear;
            console.log('W tym roku  konczysz ' + age + ' lat!');
        }else if(user.hasOwnProperty('birthYear') && user.birthYear % 2 != 0){
            console.log(user.username + ' jestes zwolniony!');
        }else{
            return;
        }
    });
}

welcomeUsers(usersArr);
