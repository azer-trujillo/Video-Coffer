export const login =(
    {
        user= '',
        name = '',
        email='',
        id= 0
    }={}
    ) =>({
    type: 'LOGIN',
    user,
    name,
    email,  
    id,
    payload: name

});

export const logout = ()=>({
    type:'LOGOUT'
});
