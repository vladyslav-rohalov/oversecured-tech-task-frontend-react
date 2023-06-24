import { useState, useEffect } from 'react';
import { AiFillEdit } from 'react-icons/ai';
import { RiDeleteBin5Line } from 'react-icons/ri';
import formatDate from 'utils/formatDate';
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
} from '@mui/material';
import {
  sortByName,
  sortByNameReverse,
  sortBySurname,
  sortBySurnameReverse,
  sortByDate,
  sortByDateReverse,
} from '../../utils/sort';

export default function TableVisitors({
  visitors,
  isLogin,
  onEditClick,
  onDeleteClick,
}) {
  const [sortedVisitors, setSortedVisitors] = useState(visitors);
  const [sortNameAZ, setSortNameAZ] = useState(true);
  const [sortSurnameAZ, setSortSurnameAZ] = useState(true);
  const [sortDateAZ, setSortDateAZ] = useState(true);

  const handleNameSort = () => {
    setSortNameAZ(!sortNameAZ);
    setSortDateAZ(true);
    setSortSurnameAZ(true);
    let sorted = null;
    if (sortNameAZ) {
      sorted = [...visitors].sort(sortByName);
    } else {
      sorted = [...visitors].sort(sortByNameReverse);
    }
    setSortedVisitors(sorted);
  };

  const handleSurnameSort = () => {
    setSortSurnameAZ(!sortSurnameAZ);
    setSortNameAZ(true);
    setSortDateAZ(true);
    let sorted = null;
    if (sortSurnameAZ) {
      sorted = [...visitors].sort(sortBySurname);
    } else {
      sorted = [...visitors].sort(sortBySurnameReverse);
    }
    setSortedVisitors(sorted);
  };

  const handleDateSort = () => {
    setSortDateAZ(!sortDateAZ);
    setSortNameAZ(true);
    setSortSurnameAZ(true);
    let sorted = null;
    if (sortDateAZ) {
      sorted = [...visitors].sort(sortByDate);
    } else {
      sorted = [...visitors].sort(sortByDateReverse);
    }
    setSortedVisitors(sorted);
  };

  useEffect(() => {
    setSortedVisitors(visitors);
  }, [visitors]);

  return (
    <>
      {isLogin && (
        <Container
          maxWidth="xl"
          style={{
            marginTop: '64px',
            marginBottom: '64px',
          }}
        >
          <TableContainer component={Paper}>
            <Table
              sx={{ minWidth: 650, width: '100%' }}
              aria-label="simple table"
            >
              <TableHead>
                <TableRow>
                  <TableCell
                    onClick={handleNameSort}
                    style={{ cursor: 'pointer' }}
                  >
                    First name
                  </TableCell>
                  <TableCell
                    align="justify"
                    onClick={handleSurnameSort}
                    style={{ cursor: 'pointer' }}
                  >
                    Last Name
                  </TableCell>
                  <TableCell
                    align="justify"
                    onClick={handleDateSort}
                    style={{ cursor: 'pointer' }}
                  >
                    Entry date
                  </TableCell>
                  <TableCell align="justify" style={{ cursor: 'pointer' }}>
                    Edit
                  </TableCell>
                  <TableCell align="justify" style={{ cursor: 'pointer' }}>
                    Delete
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {sortedVisitors?.map(visitor => (
                  <TableRow
                    key={visitor.visitorID}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {visitor.firstName}
                    </TableCell>
                    <TableCell align="justify">{visitor.lastName}</TableCell>
                    <TableCell align="justify">
                      {formatDate(visitor.createdAt)}
                    </TableCell>
                    <TableCell align="justify">
                      <IconButton
                        id={visitor.visitorID}
                        onClick={e => onEditClick(e.currentTarget.id)}
                      >
                        <AiFillEdit />
                      </IconButton>
                    </TableCell>
                    <TableCell align="justify">
                      <IconButton
                        id={visitor.visitorID}
                        onClick={e => onDeleteClick(e.currentTarget.id)}
                      >
                        <RiDeleteBin5Line />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      )}
    </>
  );
}
