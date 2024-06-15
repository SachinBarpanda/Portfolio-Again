import { createSlice } from "@reduxjs/toolkit";

const rootSlice = createSlice({
    name : 'root',
    initialState : {
        loading : false,
        portfolioData  : null,
        reloadData : false
    }, 
    reducers : {
        ShowLoading : (state, action )=>{
            state.loading = true;
        },
        HideLoading : (state , action ) =>{
            state.loading = false;
        },
        ReloadData : (state , action ) =>{
            state.reloadData = action.payload;
        },
        setPortfolioData : (state, action) =>{
            state.portfolioData = action.payload;
        }
    }
})

export default rootSlice.reducer;
export const {ShowLoading, HideLoading, setPortfolioData, ReloadData} = rootSlice.actions;