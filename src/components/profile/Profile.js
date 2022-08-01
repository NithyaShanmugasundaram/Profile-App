import * as Yup from 'yup'
import { Form, Formik } from 'formik'
import Input from '../common/Input/Input'
import React from 'react'
import { Container, Grid, Typography, Stack } from '@mui/material';
import ButtonComponent from '../common/button/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import RadioButtonComponent from '../common/radio/Radio';
import { connect } from 'react-redux';
import { save_profile } from '../../actions/profile';
import AlertComponent from '../common/alert/Alert';

const phoneRegExp = /^([+\d].*)?\d$/
const validationSchema = Yup.object({
    first_name: Yup.string().required('Firstname is required'),
    last_name: Yup.string().required('Lastname is required'),
    phone: Yup.string().matches(phoneRegExp, 'Phone number must be a number.'),
    email: Yup.string()
        .required('Email is Required.')
        .email('Invalid email address.'),

})
const Profile = ({ countryList, save_profile }) => {
    const handleSubmit = async (values) => {
        
        save_profile(values)
    }

    return (
        <Container>
            <Grid container spacing={4} sx={{ pb: 2 }}>
                <Grid item xs={12} md={12}>
                    <Typography variant="h5">Profile Information</Typography>
                </Grid>
            </Grid>
            <Formik
                initialValues={{
                    first_name: '',
                    last_name: '',
                    gender: '',
                    id: '',
                    address: "",
                    country: '',
                    occupation: '',
                    email: '',
                    phone: '',
                    fax: '',
                }}
                validationSchema={validationSchema}
                enableReinitialize
                onSubmit={handleSubmit}

            >
                {({ setFieldValue, handleSubmit, resetForm, dirty }) => (
                    <Form>
                        <Grid container justifyContent="space-between" alignItems="center" spacing={2} sx={{ pb: { sm: 2 } }}>
                            <Grid item xs={12} sm={6}>
                                <Input label="First Name" name="first_name" id="first_name" required />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Input label="Last Name" name="last_name" id="last_name" required />
                            </Grid>
                        </Grid>
                        <Grid container justifyContent="flex-start" alignItems="flex-start" spacing={2} sx={{ pb: { sm: 2 } }}>
                            <Grid item xs={12} sm={6}  >
                                <RadioButtonComponent label="Gender" name="gender" labelItems={["Female", "Male", "Other"]}
                                    onChange={(e, value) => {
                                        console.log('Radiovalue', e.target.value)
                                        setFieldValue("gender", value)
                                    }}
                                    id="gender" />
                            </Grid>
                            <Grid item xs={12} sm={6}  >
                                <Input label="Email" name="email" id="email" required />
                            </Grid>
                        </Grid>
                        <Grid container justifyContent="space-between" alignItems="center" spacing={2} sx={{ pb: { sm: 2 } }}>
                            <Grid item xs={12} sm={6}>
                                <Input label="Photo ID" name="id" id="id" />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Input label="Occupation" id="occupation" name="occupation" select items={['Software Developer', 'Tester', 'Scrum Master']} />
                            </Grid>
                        </Grid>
                        <Grid container justifyContent="space-between" alignItems="center" spacing={2} sx={{ pb: { sm: 2 } }}>
                            <Grid item xs={12} sm={6}>
                                <Input label="Phone Number" name="phone" id="phone" />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Input label="Address" name="address" id="address" />
                            </Grid>
                        </Grid>
                        <Grid container justifyContent="space-between" alignItems="center" spacing={2} sx={{ pb: { sm: 2 } }}>
                            <Grid item xs={12} sm={6}>
                                <Input select name="country" id="country" label="Country" items={countryList && countryList}
                                    onChange={(e, value) => {
                                        setFieldValue("country", value);
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Input label="Fax Number" name="fax" id="fax" />
                            </Grid>
                        </Grid>
                        <Stack direction="row" justifyContent="flex-end" spacing={3} sx={{ pt: { xs: 3 } }} alignItems="flex-end">
                            <ButtonComponent title="reset" variant="outlined" startIcon={<DeleteIcon />} onClick={resetForm}></ButtonComponent>
                            <ButtonComponent type="submit" title="Add Profile" variant="contained" endIcon={<SendIcon />} disabled={!dirty} onClick={handleSubmit} id="submit" ></ButtonComponent>
                        </Stack>
                    </Form>
                )}
            </Formik>
            <AlertComponent />
        </Container >
    )
}
const mapStateToProps = state => {
    return {
        countryList: state.countryReducer.countries
    }
}
export default connect(mapStateToProps, { save_profile })(Profile)
