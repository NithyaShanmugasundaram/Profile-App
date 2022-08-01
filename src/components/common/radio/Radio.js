import * as React from 'react';
import { Radio, RadioGroup, FormControl, FormControlLabel, Typography, FormLabel } from '@mui/material';
import { useField } from 'formik';
export default function RadioButtonComponent({ id, onChange, value, label, labelItems, ...props }) {
    const [field, meta] = useField(props)

    return (
        <FormControl>
            <FormLabel htmlFor={props.name} id={id} sx={{ textAlign: 'left', '&.Mui-focused': { color: (theme) => theme.palette.grey[600] } }}><Typography variant="subtitle">{label}</Typography></FormLabel>
            <RadioGroup
                aria-labelledby={props.name}
                name="radio-buttons-group"
                row
                {...field}{...props}
                aria-rowcount={3}
                value={field.value}
                onChange={onChange}
            >
                {labelItems.map((label, index) => {
                    return (
                        <FormControlLabel key={index} sx={{ "&.MuiFormControlLabel-label": { color: (theme) => theme.palette.grey[600] } }} value={label} control={<Radio sx={{
                            color: (theme) => theme.palette.grey[600],
                            '&.Mui-checked': {
                                color: (theme) => theme.palette.grey[600],
                            },
                        }} />} label={<Typography variant="subtitle" >{label}</Typography>}></FormControlLabel>
                    )
                })}

            </RadioGroup>
        </FormControl>
    );
}
