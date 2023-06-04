import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    Name : "" , 
    Email : "" ,
    PhoneNumber : "" ,
    Plan : {
        Level : "" ,
        Price : "" , 
        Paiment : ""
    } , 
    Odds : [] ,
}

const UserInfoSlice = createSlice({
    name : "user" , 
    initialState , 
    reducers : {

        AddContactInfo : (state , action ) =>{
           const {Name , Email , PhoneNumber } = action.payload
           state.Name = Name ;
           state.Email = Email ;
           state.PhoneNumber = PhoneNumber ;
        } , 
        AddPlan: (state , action ) =>{
            const {Level , Price , Paiment } = action.payload
            state.Plan.Level = Level ;
            state.Plan.Price = Price ;
            state.Plan.Paiment = Paiment ;
        } , 
        AddOns : (state , action) =>{
            state.Odds = [
                ...state.Odds , 
                action.payload
            ]
        }, 
        RemoveOns :(state , action) =>{
            const index =  state.Odds.map(ons => {
                if(ons.Level == action.payload){
                   return state.Odds.indexOf(ons) 
               }
            })
            
            state.Odds.slice(index , 1)     
        }
    }
})

export default UserInfoSlice.reducer ;
export const {AddContactInfo , AddPlan , AddOns , RemoveOns } = UserInfoSlice.actions