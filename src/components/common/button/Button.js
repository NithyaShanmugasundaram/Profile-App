import { Button } from '@mui/material'
import styled from '@emotion/styled'
import React from 'react'

const MyButton = styled(Button)(({ theme }) => ({
    '&.MuiButton-root': {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
    },
    '&.Mui-disabled': {
        color: theme.palette.grey[700],
        backgroundColor: theme.palette.grey[400],
        border: 'none',
    },
}))
const ButtonComponent = ({ id, onClick, title, startIcon, endIcon, disabled, type, variant, fullWidth, size }) => {

    return (
        <MyButton
            id={id}
            onClick={onClick}
            type={type}
            fullWidth={fullWidth ? true : false}
            disableFocusRipple
            disableRipple
            disableTouchRipple
            startIcon={startIcon}
            endIcon={endIcon}
            disabled={disabled}
            variant={variant}
            size={size}
        >
            {title}
        </MyButton>
    )
}

export default ButtonComponent
