export const createPrescription = (prescription) => {
    return (dispatch, getState) => {
        dispatch ({type:'CREATE_PRESCRIPTION', prescription:prescription})
    }
}