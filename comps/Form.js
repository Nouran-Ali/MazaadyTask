import React, { useEffect } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCategories, fetchCategoriesProperties, fetchModel } from '../features/categoriesSlice';
import TextField from '@mui/material/TextField';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Form = () => {

    const [category, setCategory] = React.useState('');
    const [subcategories, setSubcategories] = React.useState('');
    const [subCategoriesChange, setSubCategoriesChange] = React.useState('');
    const [processType, setProcessType] = React.useState('');
    const [processTypes, setProcessTypes] = React.useState({});
    const [otherValue, setOtherValue] = React.useState('');
    const [child, setChild] = React.useState({});
    const [models, setModels] = React.useState({});
    const [selectedData, setSelectedData] = React.useState([]);

    const dispatch = useDispatch();
    const { categorie, property, model, status, error } = useSelector((state) => state.categories);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchCategories());
            dispatch(fetchCategoriesProperties());
            dispatch(fetchModel());
        }
    }, [dispatch, status]);


    const handleCategoryChange = (event) => {
        setCategory(event.target.value);

        const selectedCategory = categorie.data?.categories.find(cat => cat.id === event.target.value);
        console.log(selectedCategory);
        setSubcategories(selectedCategory ? selectedCategory.children : []);
    };

    const handleSubcategoryChange = (event) => {
        setSubCategoriesChange(event.target.value);

        const selectedSubCategory = subcategories.find(subcat => subcat.id === event.target.value);
        console.log(selectedSubCategory);
        setProcessType(selectedSubCategory ? selectedSubCategory : []);
    };

    const handleProcessTypeChange = (propertyId, event) => {
        const selectedValue = event.target.value;

        setProcessTypes({
            ...processTypes,
            [propertyId]: selectedValue
        });

        if (selectedValue === 'other') {
            setOtherValue('');
        }

        if (selectedValue === true) {
            setChild('');
        }
    };

    // console.log(categorie.data && categorie.data.categories);

    // console.log(model.data);

    const handleOtherInputChange = (event) => {
        setOtherValue(event.target.value);
    };

    const handleChildChange = (event) => {
        setChild(event.target.value);
    };

    const handleModelChange = (event) => {
        setModels(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // const newDataEntry = {
        //     name: processTypes.name,
        //     calories: processTypes.calories,
        //     fat: processTypes.fat,
        //     carbs: processTypes.carbs,
        //     protein: processTypes.protein,
        // };

        setSelectedData([...selectedData, category]);
        setCategory('');

    };

    return (
        <div className='my-7 flex items-center justify-center'>
            <div>
                <form onSubmit={handleSubmit}>
                    <div className='mt-3'>
                        <FormControl variant="standard" sx={{ m: 1, minWidth: 350 }}>
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

                    <div className='mt-3'>
                        <FormControl variant="standard" sx={{ m: 1, minWidth: 350 }}>
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

                    <div>
                        {
                            subCategoriesChange && property.data && property.data.map(propert => (
                                <div className='mt-3'>
                                    <FormControl variant="standard" sx={{ m: 1, minWidth: 350 }} key={propert.id}>
                                        <InputLabel id="demo-simple-select-standard-label">{propert.name}</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-standard-label"
                                            id="demo-simple-select-standard"
                                            value={processTypes[propert.id] || ''}
                                            onChange={(e) => handleProcessTypeChange(propert.id, e)}
                                            label={propert.name}
                                        >
                                            {propert.options && propert.options.map(option => (
                                                <MenuItem value={option.id} key={option.id}>{option.name}</MenuItem>
                                            ))}
                                            <MenuItem value="other">اخري</MenuItem>
                                        </Select>
                                        {processTypes[propert.id] === 'other' && (
                                            <TextField
                                                id={`other-input-${propert.id}`}
                                                label={`اكتب ${propert.name}`}
                                                value={otherValue}
                                                onChange={handleOtherInputChange}
                                                sx={{ mt: 3 }}
                                            />
                                        )}
                                    </FormControl>

                                    {/* {propert.options?.map(opt => (
                                        opt.child === true ? (
                                            <FormControl variant="standard" sx={{ m: 1, minWidth: 350 }} key={opt.id}>
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
                            ))
                        }
                    </div>

                    <button type='submit' className='bg-black text-white p-2 px-5 rounded-lg mt-3'>ارسال</button>
                </form >

                <div className='mt-7'>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 750 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Key</TableCell>
                                    <TableCell align="right">Value</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {/* {selectedData.map((row, index) => (
                                    <TableRow key={index}>
                                        <TableCell component="th" scope="row">{row.name}</TableCell>
                                        <TableCell align="right">{row.calories}</TableCell>
                                        <TableCell align="right">{row.fat}</TableCell>
                                        <TableCell align="right">{row.carbs}</TableCell>
                                        <TableCell align="right">{row.protein}</TableCell>
                                    </TableRow>
                                ))} */}

                                {selectedData.map((data, index) => (
                                    <tr key={index}>
                                        <td>{data}</td>
                                    </tr>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>
        </div >
    )
}

export default Form
