import React from "react";
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import { MainBtn } from "./Buttons";
import { ProductsSection } from "./ProductsSection";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import styles from "../styles/home.module.css";

function CustomTabPanel(props) {
    
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export const Products = () => {

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <div className="Products px-6 py-6 max-xl:px-0 bg-white rounded-3xl mb-7">
                <div >
                    <div className="flex items-start justify-between max-xl:px-6">
                        <Box>
                            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" indicatorColor="red">
                                <Tab label="Products" {...a11yProps(0)} />
                                <Tab label="Articles" {...a11yProps(1)} />
                                <Tab label="Reviews" {...a11yProps(2)} />
                            </Tabs>
                        </Box>
                        <div className={styles.review_btn}>
                            <MainBtn icon={<ControlPointIcon sx={{ fontSize: 18 }} />} label="Add Review" />
                        </div>
                    </div>

                    <CustomTabPanel value={value} index={0}>
                        <ProductsSection />
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={1}>
                        Articles
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={2}>
                        Reviews
                    </CustomTabPanel>

                </div>
            </div >
        </>
    )
}
