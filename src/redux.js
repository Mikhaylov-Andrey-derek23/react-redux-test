import { createStore, bindActionCreators } from 'redux';



import redruser from './redruser';
import * as action from './action';





const store = createStore(redruser);
const { dispatch } = store;

// const bindActionCreate = (creater, dispatch) => (...arg )=>{
//   dispatch(creater(...arg));
// }

// const dispatchInc = bindActionCreate(inc, dispatch); 
// const dispatchDec = bindActionCreate(dec, dispatch); 
// const dispatcRnd = bindActionCreate(rnd, dispatch); 

const {inc, dec, rnd} = bindActionCreators(action, dispatch);




const render = (value) => {
  document.getElementById('result').innerHTML = value;
}

store.subscribe(()=>{
  render(store.getState())
})

document.getElementById('inc').addEventListener('click', ()=>{
  inc();
})

document.getElementById('dec').addEventListener('click', ()=>{
  dec();
})

document.getElementById('rnd').addEventListener('click', ()=>{
  const payload = Math.floor(Math.random()*10)
  rnd(payload);
})

