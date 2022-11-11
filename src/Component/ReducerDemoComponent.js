import { useReducer } from "react";


let initialState = {count:0};
function reducer (state,action) {
    switch(action.type){
        case 'add':
        return {count: state.count + 1};
        case 'remove':
        return {count: state.count - 1};
    }
}

export function ReducerDemoComponent(){
    const [state,dispatch] = useReducer(reducer,initialState);
    function AddClick (){
        dispatch({type:'add'})
    }
    function RemoveClick(){
        dispatch({type:'remove'})
    }

    return(
        <div className="container-fluid">
            <p>Cart items [{state.count}] <span className="bi bi-cart4"></span></p>
            <button onClick={AddClick}>Add to Cart</button>
            <button onClick={RemoveClick}>Remove from Cart</button>

        </div>
    )
}