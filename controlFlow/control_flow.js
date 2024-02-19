let userRole = 'admin';
let accesslevel;


if (userRole === 'admin') {
    accesslevel = "Full access granted";
} else if (userRole === 'manager'){
    accesslevel = "limited access granted";
} else {
    accesslevel = "No access granted";
}

console.log('Access Level:', accessLevel);

let isLoggedIn = true;
let userMessage;

if (isLoggedIn) {
    if (userRole=='admin'){
        userMessage='Welcome, Admin!';
    }else{
        userMessage='Welcome, User!';
    }
}else{
        userMessage='Please log in to access the system.';
    }
console.log('User Message:', userMessage);

let userType = 'subscriber';
let userCategory;

switch(userType){
    case "admin":
        userCategory = 'Administrator';
        break;
    case "manager":
        userCategory = 'Manager';
        break;
    case "subscriber":
        userCategory = 'Subscriber';
        break;
    default:
        userCategory = 'Unknown';
}
console.log('User Cateogry:', userCategory);
