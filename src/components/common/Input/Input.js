import * as React from 'react';
import { TextField, InputLabel, MenuItem, Typography } from '@mui/material';
import styled from '@emotion/styled';
import { useField } from 'formik'


const MyTextField = styled(TextField)(({ theme }) => ({
    '& .MuiFilledInput-underline:after': {
        borderBottomColor: theme.palette.grey[600],
        '& .Mui-focused': {
            backgroundColor: theme.palette.grey[400],
            borderBottomColor: theme.palette.grey[600]
        },
    },

    '& .Mui-selected': {
        backgroundColor: theme.palette.grey[400]
    },


}))

const Error = styled('div')(({ theme }) => ({
    color: theme.palette.error.main,
    textAlign: 'Left'
}))

export const Input = ({ onChange, value, disabled, select, placeholder, error, items, id, required, label, ...props }) => {

    const [field, meta] = useField(props)


    return (
        <>
            <InputLabel htmlFor={props.name} sx={{ textAlign: 'left' }}>
                <Typography variant="subtitle">{label}</Typography>
                {required ? <span style={{ color: 'red' }}>*</span> : ""}
            </InputLabel>
            <MyTextField
                id={id}
                variant="filled"
                size='small'
                placeholder={placeholder}
                fullWidth
                onChange={onChange}
                select={select ? true : false}
                value={value}
                autoComplete="off"
                disabled={disabled}
                data-testid={`textbox-${id}`}
                error={error}
                {...field}
                {...props}

            >{select && items.map((name, index) => (
                <MenuItem key={index} value={name}>
                    {name}
                </MenuItem>
            ))}</MyTextField>
            <Error>{meta.touched && meta.error ? <div >{meta.error}</div> : null}</Error>
        </>

    )
}
export default Input;
