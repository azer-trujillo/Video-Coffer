import {login, logout} from '../../actions/User';
import ReactShallowRender from 'react-test-renderer/shallow';

it('should set up log-in action object', ()=>{
    const user ={
        user: 'Raul Lopez',
        name: 'Raul Lopez',
        email:'raul.lopez@partnerhero.com',
        id: 2134
    }
    const action = login(user);
    expect(action).toEqual({
        type: 'LOGIN',
        user: 'Raul Lopez',
        payload: 'Raul Lopez',
        email:'raul.lopez@partnerhero.com',
        id: 2134
    });
});

it('should set up log-out action object', ()=>{
    const action = logout();
    expect(action).toEqual({
        type:'LOGOUT'
    })
})