

export default (state,action)=>{
  
    switch (action.type) {
        case 'NEXT':
            return {
                num:state.num+1
            }
           
        case 'PREV':
            return {
                num:state.num-1
            }

        case 'GOTO':
            return {
                num:action.payload
            }    

        default:
            return state;
    }
}