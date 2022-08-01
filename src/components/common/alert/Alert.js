import React from 'react'
import Alert from '@mui/material/Alert';
import { connect } from 'react-redux';

const AlertComponent = ({ alerts }) => {
    return (
        <>
            {alerts && alerts.map((alert) => {
                return (
                    <Alert key={alert.id} severity={alert.alertType}>{alert.msg}</Alert>
                )
            })
            }
        </>
    )
}
const mapStateToProps = (state) => {
    return {
        alerts: state.alertReducer
    }
};
export default connect(mapStateToProps, {})(AlertComponent);
