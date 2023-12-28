import dayjs from "dayjs"
import { UserModal } from "../../schema/userSchema/user.schema"

export class UserService{
    async newUser(input){
        try{
            const user  = await UserModal.create({...input, createdAt: dayjs()});
            return {
                response: user,
                message: "User created successfully",
            }
        }
        catch(err){
            return {
                response: null,
                message: err.message
            }
        }
    }

    async user(id){
        try{
            const user = await UserModal.findById(id);
            return {
                response: user,
                // message:
            }
        }catch(err){
            return{
                response: null,
                message: err.message
            }
        }
    }
}