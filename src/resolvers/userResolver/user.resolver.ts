import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { UserInput, UserResponse } from "../../schema/userSchema/user.schema";
import { UserService } from "../../service/userService/user.service";

@Resolver()
export class UserResolver{

    constructor(private userService: UserService){
        this.userService = new UserService();
    }

    @Mutation(()=>UserResponse)
    newUser(@Arg('input', {validate: true}) input:UserInput){
        return this.userService.newUser(input);
    }

    @Query(()=>UserResponse)
    user(@Arg('id', {validate:true}) id:String){
        return this.userService.user(id);
    }
}