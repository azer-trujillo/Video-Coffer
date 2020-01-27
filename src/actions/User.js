import {connect } from 'react-redux';


const addUser =(
    {
        user= '',
        name = '',
        email='',
        
    }={}
    ) =>({
    type: 'upUser',
    user,
    name,
    email,  
    id: 410,
    payload: name

});


export default addUser;