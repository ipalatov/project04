import { createStore } from "redux";


const reducer = (state = 0, action) => {
	switch (action.type) {
		case 'INC':
			return state + 1;
		case 'DEC':
			return state - 1;
		case 'RND':
			return state + action.value;
		case 'RES':
			return 0;

		default:
			return state;
	}
}

let store = createStore(reducer);
console.log(store.getState());

const incAC = () => ({ type: 'INC' });
const decAC = () => ({ type: 'DEC' });
const rndAC = (value) => ({ type: 'RND', value })
const resAC = () => ({ type: 'RES' })

document.getElementById('inc').addEventListener('click', () => {
	store.dispatch(incAC())
})
document.getElementById('dec').addEventListener('click', () => {
	store.dispatch(decAC())
})
document.getElementById('res').addEventListener('click', () => {
	store.dispatch(resAC())
})

const update = () => {
	document.getElementById('counter').innerHTML = store.getState();
}


store.subscribe(update);

// store.dispatch({ type: 'INC' });
// store.dispatch({ type: 'INC' });
// store.dispatch({ type: 'INC' });
