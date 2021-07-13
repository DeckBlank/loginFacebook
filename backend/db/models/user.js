class user  { 
 constructor(){
     this.user = [];
 }

 findOne = ({facebookId}) => {
    return this.user.find(obj=>obj.facebookId===facebookId)
 }
 createOne = (data) => {
    this.user.push(data)
 }
}

export const User = new user();