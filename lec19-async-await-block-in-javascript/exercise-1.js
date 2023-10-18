const fetchUser = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({data: {user: "Monkey", admin: true}});
        }, 3000)
    })
}

const login = (object) => {
    
    if(object.data.admin === true) 
    console.log("Successfully logged in!");
    else 
        console.log("Failed to log in, please try again.");
}

console.log("Program Started");//1

const useData = async () => {
    const result = await fetchUser();
  
    login(result)//3
}
useData();

console.log("Program completed")//2