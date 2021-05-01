const redruser = (state = {count : 0, name : ''}, action) => {
    switch(action.type){
      case 'INC':
        state.count = state.count + 1;
        console.log(state)
        return {...state} 
      case 'DEC':
        state.count = state.count - 1;
        console.log(state)
        return {...state}
      case 'RND':
        state.count = state.count + action.payload;
        console.log(state)
        return {...state};
      default : 
        return state
    }
  
  }
export default redruser;  