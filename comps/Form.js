import React, { useEffect, useState } from 'react';
import {
    FormControl,
    InputLabel,
    MenuItem,
    Paper,
    Select,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
    TextField,
} from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCategories, fetchCategoriesProperties, fetchModel } from '../features/categoriesSlice';

const Form = () => {
    const [subCategoryId, setSubCategoryId] = useState('');
    const [category, setCategory] = useState('');
    const [subcategories, setSubcategories] = useState('');
    const [subCategoriesChange, setSubCategoriesChange] = useState('');
    const [properties, setProperties] = useState({});
    const [otherValue, setOtherValue] = useState('');
    const [child, setChild] = useState('');
    const [models, setModels] = useState('');
    const [selectedData, setSelectedData] = useState([]);

    const dispatch = useDispatch();
    const { categorie, property, model, status, error } = useSelector((state) => state.categories);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchCategories());
        }

    }, [dispatch, status]);

    useEffect(() => {
        if (subCategoryId) {
            dispatch(fetchCategoriesProperties(subCategoryId));
        }

    }, [dispatch, subCategoryId]);

    const handleCategoryChange = (event) => {
        const selectedCategoryId = event.target.value;
        setCategory(selectedCategoryId);
        const selectedCategory = categorie.data?.categories.find(cat => cat.id === selectedCategoryId);
        setSubcategories(selectedCategory ? selectedCategory.children : []);
    };

    const handleSubcategoryChange = (event) => {
        const selectedSubcategoryId = event.target.value;
        setSubCategoriesChange(selectedSubcategoryId);
        setSubCategoryId(selectedSubcategoryId)
        const selectedSubCategory = subcategories.find(subcat => subcat.id === selectedSubcategoryId);
        setProperties(selectedSubCategory ? selectedSubCategory : '');
    };

    const handleProcessTypeChange = (propertyId, event) => {
        const selectedValue = event.target.value;

        setProperties(prevProperties => ({
            ...prevProperties,
            [propertyId]: selectedValue
        }));

        if (selectedValue === 'other') {
            setOtherValue('');
        } else if (propertyId && property.data && Array.isArray(property.data.options)) {
            const selectedProperty = property.data.options.find(prop => prop.id === propertyId);
            if (selectedProperty && selectedProperty.child) {
                dispatch(fetchModel(selectedValue));
            }
        }
    };

    const handleOtherInputChange = (event) => {
        setOtherValue(event.target.value);
    };

    const handleModelChange = (event) => {
        setModels(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const selectedCategory = categorie.data.categories.find(cat => cat.id === category);
        const categoryName = selectedCategory ? selectedCategory.name : '';

        const selectedSubCategory = subcategories.find(subcat => subcat.id === subCategoriesChange);
        const subCategoryName = selectedSubCategory ? selectedSubCategory.name : '';

        const optionProperties = {};
        // Object.keys(properties).forEach(propertyId => {
        //     const selectedOption = property.data.find(prop => prop.id === parseInt(propertyId));
        //     if (selectedOption) {
        //         const selectedValue = selectedOption.options.find(opt => opt.id === parseInt(properties[propertyId]));
        //         if (selectedValue) {
        //             optionProperties[selectedOption.name] = selectedValue.name;
        //         }
        //     }
        // });

        const newDataEntry = {
            category: categoryName,
            subCategory: subCategoryName,
            properties: optionProperties,
            otherValue,
            models
        };

        setSelectedData(prevData => [...prevData, newDataEntry]);

        setCategory('');
        setSubCategoriesChange('');
        setProperties({});
        setOtherValue('');
        setChild('');
        setModels('');
    };

    return (
        <div className='my-7 flex items-center justify-center'>
            <div>
                <form onSubmit={handleSubmit}>
                    {/* Category */}
                    <div className='mt-3'>
                        <FormControl variant="standard" sx={{ m: 1, minWidth: 550 }}>
                            <InputLabel id="demo-simple-select-standard-label">الفئة</InputLabel>
                            <Select
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select-standard"
                                value={category}
                                onChange={handleCategoryChange}
                                label="الفئة"
                            >
                                {categorie.data?.categories.map(category => (
                                    <MenuItem value={category.id} key={category.id}>{category.name}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </div>

                    {/* Subcategory */}
                    <div className='mt-3'>
                        <FormControl variant="standard" sx={{ m: 1, minWidth: 550 }}>
                            <InputLabel id="demo-simple-select-standard-label"> الفئه الفرعيه </InputLabel>
                            <Select
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select-standard"
                                value={subCategoriesChange}
                                onChange={handleSubcategoryChange}
                                label="الفئه الفرعيه"
                            >
                                {category && subcategories && subcategories.map(subcategory => (
                                    <MenuItem value={subcategory.id} key={subcategory.id}>{subcategory.name}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </div>

                    {/* Dynamic properties */}
                    <div>
                        {subCategoriesChange && property.data && property.data.map(property => (
                            <div className='mt-3' key={property.id}>
                                <FormControl variant="standard" sx={{ m: 1, minWidth: 550 }}>
                                    <InputLabel id={`prop-label-${property.id}`}>{property.name}</InputLabel>
                                    <Select
                                        labelId={`prop-label-${property.id}`}
                                        id={`prop-select-${property.id}`}
                                        value={properties[property.id] || ''}
                                        onChange={(e) => handleProcessTypeChange(property.id, e)}
                                        label={property.name}
                                    >
                                        {property.options && property.options.map(option => (
                                            <MenuItem value={option.id} key={option.id}>{option.name}</MenuItem>
                                        ))}
                                        <MenuItem value="other">اخري</MenuItem>
                                    </Select>
                                    {properties[property.id] === 'other' && (
                                        <TextField
                                            id={`other-input-${property.id}`}
                                            label={`اكتب ${property.name}`}
                                            value={otherValue}
                                            onChange={handleOtherInputChange}
                                            sx={{ mt: 3 }}
                                        />)
                                    }
                                </FormControl>

                                {/* {property.options?.map(opt => (
                                    opt.child === true ? (
                                        <FormControl variant="standard" sx={{ m: 1, minWidth: 550 }} key={opt.id}>
                                            <InputLabel id={`demo-simple-select-model-label`}>Model</InputLabel>
                                            <Select
                                                labelId={`demo-simple-select-model-label`}
                                                id={`demo-simple-select-model`}
                                                value={models}
                                                onChange={handleModelChange}
                                                label="Model"
                                            >
                                                {model.data && model.data.map(group => (
                                                    (group.options && group.options.map(option => (
                                                        <MenuItem value={option.id} key={option.id}>{option.name}</MenuItem>
                                                    )))
                                                ))}
                                            </Select>
                                        </FormControl>
                                    ) : null
                                ))} */}
                            </div>
                        ))}
                    </div>

                    {/* Submit button */}
                    <button type='submit' className='bg-black text-white p-2 px-5 rounded-lg mt-6'>ارسال</button>
                </form >

                {/* Display selected data */}
                <div className='mt-7'>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 750 }} aria-label="simple table">
                            <TableBody>
                                {selectedData.map((data, index) => (
                                    <TableRow key={index}>
                                        <TableCell>{data.category}</TableCell>
                                        <TableCell>{data.subCategory}</TableCell>
                                        {Object.entries(data.properties).map(([propertyName, propertyValue]) => (
                                            <TableCell key={propertyName}>{propertyValue}</TableCell>
                                        ))}
                                        <TableCell>{data.otherValue}</TableCell>
                                        {/* <TableCell>{data.models}</TableCell> */}
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>
        </div >
    )
}

export default Form;
