const initialState = {
    drugList:[
        {drug:'LEVOFLOXACINE500'},
        {drug:'AUGMENTIN1000'},
        {drug:'INIBREX200'},
        {drug:'ESOPRAL40'},
        {drug:'ESOPRAL20'},
        {drug:'HYPOTEN100'},
        {drug:'HYPOTEN50'},
        {drug:'LOPRIL25'},
        {drug:'LOPRIL50'},
        {drug:'LASILIX40'},
        {drug:'LASILIX500'},
        {drug:'CORVASAL5'},
        {drug:'LEVODIS500'},
        {drug:'SINTROM4'},
        {drug:'GARDENAL50'},
        {drug:'DEPAKINE200'},
    ]
}

const drugReducer=(state=initialState,action)=>{
    return state
}
    
export default drugReducer;