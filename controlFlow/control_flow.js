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

let isAuthenticated = ture;
// If Authenticated is true, the expression before : (in this case, "Authenticated") is assigned to authenticationStatus.
// If isAuthenticated is false, the expression after : (in this case, "Not authenticated") is assigned to authenticationStatus.
let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";

console.log('Authentication Status:", authenticationStatus);
