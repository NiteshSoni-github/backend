'use strict'
const User = use('App/Models/User')
const { validate } = use('Validator')
class UserController {
    async register({request,response})
    {      
        const rules = {
            email: 'unique:users',
            mobile: 'unique:users'
          }
          
          const validation = await validate(request.all(), rules)
        
          if (validation.fails()) {
            return 0;
          }
        let {
            f_name,
            m_name,
            l_name,
            email,
            password,
            mobile,
            age,
            gender
        } = request.all();  
    const user = await User.create({
            f_name,
            m_name,
            l_name,
            email,
            password,
            mobile,
            age,
            gender
    }); 
    await user.save();
    return 1;
};
}

module.exports = UserController
