"use server"


import User from "../modals/userModal"

import { connect } from "@/lib/db";


export async function createUser(user:any){
    try{
await connect()
const newUser = await User.create(user);
return JSON.parse(JSON.stringify(newUser))
    }catch(error){
console.log(error)
    }
}
export async function updateUser(id:string,user:any){
    try{
await connect()

if(id){
    const updatedUser = User.findByIdAndUpdate(id,user)
    return JSON.parse(JSON.stringify(updatedUser))
}
    return "No id found"

    }catch(error){
console.log(error)
    }
}