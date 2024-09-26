import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { FilterCountries } from "../../../helpers/FilterCountries";

const initialState = {
    countries: [],
    searchTerm: '',
    selectedRegion: '',
    selectedSubRegion: '',
    selectedPopulationRange: '',
    filteredCountries: [],
    visibleCountries: []
}

const url = 'https://restcountries.com/v3.1/all';

export const getCountries = createAsyncThunk('countries/getCountries', async (name, thunkAPI) => {
    try {
        const response = await axios.get(url);

        return response.data
    } catch (error) {
        return thunkAPI.rejectWithValue('something went wrong');
    }
})

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        handleSearch: (state, action) => {
            state.searchTerm = action.payload

            state.countries = FilterCountries(state.countries, state.searchTerm, state.selectedRegion, state.selectedSubRegion, state.selectedPopulationRange)
        },
        initialCountries: (state) => {
            state.visibleCountries = state.filteredCountries?.slice(
                offset,
                offset + itemsPerPage
            );
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getCountries.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getCountries.fulfilled, (state, action) => {
                state.isLoading = false,
                    state.countries = action.payload
            })
            .addCase(getCountries.rejected, (state, action) => {
                state.isLoading = false;
            })
    }
})


export const { handleSearch } = filterSlice.actions;

export default filterSlice.reducer