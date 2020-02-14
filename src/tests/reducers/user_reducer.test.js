import userReducer from '../../reducers/User'

const user = {
    user: 'Raul Lopez',
    payload: 'Raul Lopez',
    email:'raul_lopez@partnerhero.com',
    id: 0
};

const emptyState={
    user: undefined,
    name: undefined,
    email: undefined,
    id: 0

};
const prevState={
    user: 'Raul Lopez',
    name: 'Raul Lopez',
    email:'raul_lopez@partnerhero.com',
    id: 0
};

it('should set video-reducer default state',()=>{
    const state = userReducer(undefined,{ type:'@@INIT'});
    expect(state).toEqual(emptyState);
});

it('should add user object', ()=>{
    
    const action ={
        type:'LOGIN',
        ...user
    }
      const state= userReducer(emptyState,action);
      expect(state).toEqual( 
        {
            user: 'Raul Lopez',
            name: 'Raul Lopez',
            email:'raul_lopez@partnerhero.com',
            id: 0
        }
      );
});


it('should remove user object', ()=>{
    
    const action ={
        type:'LOGOUT'
    }

      const state= userReducer(prevState,action);
      expect(state).toEqual({});
});
