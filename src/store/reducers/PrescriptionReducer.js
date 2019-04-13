const initialState = {
    prescriptions:[
        {prescriptionId:'2019001', patientId:'0001', patientName:'Khmayes', doctorName:'Youssef Zied Elhechmi', drugName:'Levofloxacine500', posology:['1cp at 8h','1cp at 14h', '1cp at 20h'], duration :'5 days'},
        {prescriptionId:'2019001', patientId:'0001', patientName:'Khmayes', doctorName:'Youssef Zied Elhechmi', drugName:'Augmentin1000', posology:['1cp at 8h','1cp at 14h', '1cp at 20h'], duration :'5 days'},
        {prescriptionId:'2019001', patientId:'0001', patientName:'Khmayes', doctorName:'Youssef Zied Elhechmi', drugName:'Inibrex200', posology:['1cp at 8h','1cp at 14h', '1cp at 20h'], duration :'5 days'},
        {prescriptionId:'2019002', patientId:'0002', patientName:'Khammous', doctorName:'Youssef Zied Elhechmi', drugName:'Tavanic500', posology:['1cp at 8h','1cp at 14h', '1cp at 20h'], duration :'5 days'},
        {prescriptionId:'2019002', patientId:'0002', patientName:'Khammous', doctorName:'Youssef Zied Elhechmi', drugName:'Esoral40', posology:['1cp at 20h'], duration :'5 days'},
    ]
}

const PrescriptionReducer=(state=initialState,action)=>{
    switch (action.type) {
        case 'CREATE_PRESCRIPTION':
        console.log ('New Prescription :', action.prescription)
    }
    return state
}
    
export default PrescriptionReducer;