let user1={
    name:"ramya",
    age:20,

    login(){
        console.log("hi", this.name)
        console.log("you are logged in")
    }
,
    logout(){
        console.log("you are logged out")
    }
}

user1.login();