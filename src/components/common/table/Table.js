import * as React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Paper } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';
import DeleteIcon from '@mui/icons-material/Delete';
import styled from '@emotion/styled';
const MyTextField = styled(TextField)(({ theme }) => ({
  '& .MuiFilledInput-underline:after': {
    borderBottomColor: theme.palette.grey[600],
    '& .Mui-focused': {
      backgroundColor: theme.palette.grey[400],
      borderBottomColor: theme.palette.grey[600]
    },
  },

}))

const StyledRow = styled(TableRow)(({ theme }) => ({
  backgroundColor: theme.palette.grey[400]

}))

const row = (
  profile,
  i,
  header,
  handleRemove,
  startEditing,
  editIdx,
  handleChange,
  stopEditing
) => {
  const currentlyEditing = editIdx === i;
  return (
    <TableRow key={`tr-${i}`}>
      {header.map((item, index) => {
        return (
          <TableCell key={`trc-${index}`}>
            {currentlyEditing ? (
              <MyTextField
                name={item.prop}
                onChange={e => handleChange(e, item.prop, i)}
                value={profile[item.prop]}
                variant="filled"
                size="small"
              />
            ) : (
              profile[item.prop]
            )}
          </TableCell>
        )
      })}
      <TableCell>
        {currentlyEditing ? (
          <CheckIcon onClick={() => stopEditing()} />
        ) : (
          <EditIcon onClick={() => startEditing(i)} />
        )}
      </TableCell>
      <TableCell>
        <DeleteIcon onClick={() => handleRemove(i)} />
      </TableCell>
    </TableRow>
  );
};

export default function TableComponent({ profiles,
  handleRemove,
  startEditing,
  editIdx,
  header,
  handleChange,
  stopEditing }) {
  return (

    <TableContainer component={Paper} sx={{

      minWidth: 400,
      "&::-webkit-scrollbar": {
        width: 20
      },
      "&::-webkit-scrollbar-track": {
        backgroundColor: '#424242'
      },
      "&::-webkit-scrollbar-thumb": {
        backgroundColor: '#E4E5E8',
        borderRadius: 2
      },
      overflowX: "scroll"
    }} >
      <Table sx={{
        // tableLayout: "auto",
        width: "100%"

      }} aria-label="simple table">
        <TableHead>
          <StyledRow>
            {header.map((title, i) => (
              <TableCell key={`tc-${i}`} sx={{ fontSize: 20, fontWeight: 300 }}>{title.name}</TableCell>
            ))}
            <TableCell />
            <TableCell />
          </StyledRow>
        </TableHead>
        <TableBody>
          {profiles && profiles.map((profile, i) =>
            row(
              profile,
              i,
              header,
              handleRemove,
              startEditing,
              editIdx,
              handleChange,
              stopEditing
            )
          )}
        </TableBody>
      </Table>
    </TableContainer>


  );
}
