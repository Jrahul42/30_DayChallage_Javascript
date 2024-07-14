//Reassignment Demo:
//Create a script that demonstrates the difference in behavior between let and const when it comes to reassignment.

let Name = "Rahul"
let initial_name = Name
Name = "Hitesh"
console.log("Initial Name is in let Keyword:",initial_name,"afterchanging it will display:",Name);
const age = 27
try{
    age = 35
}catch(error){
    console.error("Initial age in const Keyword:",age,"tried to change it in const but get this error:",error.message)

}

