import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import {useDispatch} from "react-redux";
import {actionTypes} from "../types";

export default function BasicSelect({one, two}: any) {
    const [age, setAge] = React.useState('');
    const dispatch = useDispatch()


    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
        console.log(event.target.value as string)
        // event.target.value as string==='Металл'?dispatch({type: actionTypes.FILTER_DATA, payload: 2}):
        //     dispatch({type: actionTypes.FILTER_DATA, payload: 1})
        if (event.target.value as string === 'Металл') {
            dispatch({type: actionTypes.FILTER_DATA, payload: 2})
        } else if (event.target.value as string === 'Цена по возростанию') {
            dispatch({type: actionTypes.SORT_DATA_UP})
        } else if (event.target.value as string === 'Цена по убыванию') {
            dispatch({type: actionTypes.SORT_DATA_DOWN})
        } else if (event.target.value as string === 'Дерево') {
            dispatch({type: actionTypes.FILTER_DATA, payload: 1})
        }
    };


    return (
        <Box sx={{
            maxHeight: '40px',
            minHeight: '40px',
            height: '40px',
            minWidth: '120px',
            width: '288px',
            maxWidth: '288px',
            backgroundColor: '#F2F2F2',
            boxSizing: ' content-box',
            // margin: '24px'
        }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label"></InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label=''
                    onChange={handleChange}
                >
                    <MenuItem value={one}>{one}</MenuItem>
                    <MenuItem value={two}>{two}</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}
