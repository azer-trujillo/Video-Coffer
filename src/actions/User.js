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
    payload: name,
    email,  
    id

});


export const logout = ()=>({
    type:'LOGOUT'
});
