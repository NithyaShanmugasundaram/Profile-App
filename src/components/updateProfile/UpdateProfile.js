import React from 'react'
import { connect } from 'react-redux';
import TableComponent from '../common/table/Table';
import { Grid, Typography } from '@mui/material'
import { NavLink } from 'react-router-dom'
import { update_profile, save_profile } from '../../actions/profile';
import { header } from '../../definitions';

const UpdateProfile = ({ profiles, update_profile }) => {
    const [profile, setProfile] = React.useState()
    const [editIdx, setEditIdx] = React.useState(-1)

    const handleRemove = i => {
        let profileList = [...profile]
        const filter_profiles = profileList.filter((item, index) => {
            return (
                index !== i
            )
        })
        setProfile(filter_profiles)
        update_profile(filter_profiles)

    };

    const startEditing = i => {
        setEditIdx(i);
    };

    const stopEditing = () => {
        setEditIdx(-1);
        update_profile(profile)
    };

    const handleChange = (e, name, i) => {
        const { value } = e.target;
        let profileList = [...profile]
        const updated_profiles = profileList.map((item, index) => {
            return (
                index === i ? { ...item, [name]: value } : item
            )
        }
        )
        setProfile(updated_profiles)
    };
    React.useEffect(() => {
        if (profiles) {
            setProfile(profiles)
        }

    }, [profiles]);
    return (
        <>
            <Grid container spacing={2} sx={{ pb: 2 }}>
                <Grid item xs={12} md={12}>
                    <Typography variant="h5">Update/Delete Profile</Typography>
                </Grid>
                <Grid item xs={12}>
                    {profile && profile.length > 0 ?
                        <TableComponent profiles={profile}
                            header={header}
                            handleRemove={handleRemove}
                            startEditing={startEditing}
                            editIdx={editIdx}
                            stopEditing={stopEditing}
                            handleChange={handleChange}
                        /> : <Typography variant="body2">
                            There is no profiles available. Please add a profile by clicking this
                            <NavLink to="/">  link</NavLink>
                        </Typography>}
                </Grid>

                <Grid item xs={12}>
                    {profile && profile.length > 0 &&
                        <Typography variant="subtitle"> Please click this  <NavLink to="/">  link</NavLink> to see the updated Profile list details</Typography>
                    }
                </Grid>
            </Grid>
        </>)

}
const mapStateToProps = state => {
    return {
        profiles: state.profileReducer
    }
}

export default connect(mapStateToProps, { save_profile, update_profile })(UpdateProfile)