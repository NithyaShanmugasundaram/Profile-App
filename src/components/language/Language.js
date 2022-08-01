import React from 'react'
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'
import ButtonComponent from '../common/button/Button'
import { Grid, Typography } from '@mui/material'
import { languages } from '../../definitions'

const Language = () => {

    const { t } = useTranslation()

    return (
        <>
            <Grid container direction="column" >
                <Typography variant="h5" color="initial"> Language</Typography>
                <Typography variant="subtitle" color="initial" sx={{ mt: 1 }}>Please click these below buttons to see the language change!!</Typography>

            </Grid>
            <Grid container direction="row" justifyContent="flex-start" spacing={6} sx={{ pt: 2 }}>

                {languages.map(({ code, title, country_code }) => (
                    <Grid item xs={12} sm={2} key={country_code}>
                        <ButtonComponent
                            onClick={() => {
                                i18next.changeLanguage(code)
                            }}
                            title={title}
                            fullWidth
                        >
                        </ButtonComponent>
                    </Grid>
                ))}

            </Grid>
            <Grid container direction="column" justifyContent="center" sx={{ mt: 4 }}>
                <Typography variant="h6" color="initial"> {`Message: ${t('welcome_message')}`}</Typography>
                <Typography variant="subtitle" color="initial" sx={{ mt: 3 }}>{`Language: ${t('language')}`}</Typography>

            </Grid>

        </>
    )
}
export default Language



