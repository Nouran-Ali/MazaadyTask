import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCategories = createAsyncThunk(
    'categories/fetchCategories',
    async (_, { rejectWithValue }) => {
        try {
            const response = await fetch('https://staging.mazaady.com/api/v1/get_all_cats', {
                headers: {
                    'Content-Type': 'application/json',
                    'private-key': '3%o8i}_;3D4bF]G5@22r2)Et1&mLJ4?$@+16'
                }
            });

            if (!response.ok) {
                throw new Error('Failed to fetch categories');
            }

            const data = await response.json();

            console.log(data);

            return data;

        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const fetchCategoriesProperties = createAsyncThunk(
    'categories/fetchCategoriesProperties',
    async (id, { rejectWithValue }) => {
        try {
            const response = await fetch(`https://staging.mazaady.com/api/v1/properties?cat=${id}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'private-key': '3%o8i}_;3D4bF]G5@22r2)Et1&mLJ4?$@+16'
                }
            });

            if (!response.ok) {
                throw new Error('Failed to fetch categories');
            }

            const data = await response.json();

            console.log(data);

            return data;

        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const fetchModel = createAsyncThunk(
    'categories/fetchModel',
    async (id, { rejectWithValue }) => {
        try {
            const response = await fetch(`https://staging.mazaady.com/api/v1/get-options-child/${id}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'private-key': '3%o8i}_;3D4bF]G5@22r2)Et1&mLJ4?$@+16'
                }
            });

            if (!response.ok) {
                throw new Error('Failed to fetch categories');
            }

            const data = await response.json();

            console.log(data);
            
            return data;

        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const categoriesSlice = createSlice({
    name: 'categories',
    initialState: {
        categorie: { data: null },
        property: { data: null },
        model: { data: null },
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCategories.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchCategories.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.categorie = action.payload;
            })
            .addCase(fetchCategories.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            // categoriesProperties
            .addCase(fetchCategoriesProperties.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchCategoriesProperties.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.property = action.payload;
            })
            .addCase(fetchCategoriesProperties.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            // categoriesModel
            .addCase(fetchModel.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchModel.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.model = action.payload;
            })
            .addCase(fetchModel.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default categoriesSlice.reducer;