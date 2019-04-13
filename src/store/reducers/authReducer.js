const initialState = {
    userList:[
        {name:'Youssef Zied Elhechmi', id:'0001', password:'04683480', type:'doctor' },
        {name:'Najla Ghrairi', id:'0002', password:'22542833', type:'doctor' },
        {name:'Safouen Elhechmi', id:'0003', password:'', type:'doctor' },
        {name:'Zouhaier Elhechmi', id:'0004', password:'', type:'doctor' },
        {name:'Mohamed Ali Cherif', id:'0005', password:'', type:'doctor' },
        {name:'Hamadi Fesfes', id:'0006', password:'1234', type:'patient' },
        {name:'Khmayes Tarnene', id:'0007', password:'1234', type:'patient'}
    ]

}

const authReducer=(state=initialState,action)=>{
    switch (action.type) {
        case 'CREATE_USER':
        console.log('New user :', action.user)
    }
    return state
}
    
export default authReducer;