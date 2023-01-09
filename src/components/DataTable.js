import React, {useState, useEffect} from 'react'
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import table from '../data/table.json'
import UnSelected from './ui/icons/Unselected';
import Selected from './ui/icons/Selected';
import Copied from './ui/icons/Copied';
import { IconButton } from '@mui/material';
import Card from './Card';

const columns = [
  { id: 'strategy', label: 'Strategy', minWidth: 60 },
  { id: 'ticket', label: 'Ticket', minWidth: 70 },
  { id: 'symbol', label: 'Symbol', minWidth: 81},
  { id: 'buy_sell', label: 'Buy/Cell', minWidth: 60},
  { id: 'size', label: 'Size', minWidth: 50},
  { id: 'open', label: 'Open', minWidth: 52},
  { id: 'stop', label: 'Stop', minWidth: 40},
  { id: 'limit', label: 'Limit', minWidth: 56},
  { id: 'current', label: 'Current', minWidth: 52},
  { id: 'net_pl', label: 'Net P/L', minWidth: 62},
  { id: 'open_time', label: 'Open Time (GMT)', minWidth: 62},
  { id: 'status', label: 'Copy', minWidth: 62},
  
];

export default function DataTable({setSelectedRow, selectedRow, isSelectedRowTraded, isMobile = false}) {

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [rows, setRows] = useState([]);

  useEffect(() => {
    createRows(table)
    
  }, []);
  
  useEffect(() => {
    if(!selectedRow)
      createRows(table)
  }, [selectedRow])

  useEffect(() => {
    if (selectedRow)
    handleCopied(selectedRow)
  }, [isSelectedRowTraded])

  const handleCopied = (row) => {
    const rowsCopy = [...rows]
    const i = rowsCopy.indexOf(row)
    rowsCopy[i].status = 'copied'
    setRows(rowsCopy)

  }


  

  const createRows = table => {
    for (const row of table) {
      row.status = "unselected"
    }

    setRows(table)

  }

  const statusRender = (status) => {
    switch(status) {
      case "unselected":
        return <UnSelected />;
      case "selected":
        return <Selected />;
      case "copied": 
        return <Copied />;
      default: 
        break; 
    }

  }
  

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };



  const isNegative = (net) => {
    const firstChar = net.charAt(0)
    if (firstChar === "-")
      return true
    else
      return false 
  }

  const handleSelect = (row) => {
    const rowsCopy = [...rows]
    const i = rowsCopy.indexOf(row)
    if (rowsCopy[i].status === 'unselected') {
      rowsCopy[i].status = 'selected'
      setSelectedRow(row)
    }
    else{
      rowsCopy[i].status = 'unselected'
      setSelectedRow(null)
    } 
    setRows(rowsCopy)

  }

  return (
    isMobile ? 
    rows.map(row => (
      <Card key={row.ticket} row={row} isNegative={isNegative} handleSelect={handleSelect} />
    )) :

    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table aria-label="sticky table">
            <TableHead>
              <TableRow>
                    {columns.map((column) => (
                      <TableCell
                        key={column.id}
                        align="left"
                        style={{ minWidth: column.minWidth, fontWeight: 600 }}
                      >
                        {column.label}
                      </TableCell>
                    ))}
              </TableRow>
            </TableHead>
            <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, i) => {
                return (
                  <TableRow role="checkbox" tabIndex={-1} key={row.code} sx={{backgroundColor: row.status === 'selected' ? "#FDF5E6" : "#fff"}}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          <Typography sx={{fontSize: "Open Sans", fontSize: "14px", color: column.id === 'net_pl' ? isNegative(value) ? "#F53F3F" : "#31A060" : "#000000" }}>
                            {column.id === 'status' ? <IconButton onClick={()=> handleSelect(row)} disabled={selectedRow && selectedRow.ticket != row.ticket}  sx={{'&:hover': {backgroundColor: "transparent"}}}>{statusRender(value)}</IconButton>  :  value}
                          </Typography>
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      </Paper>

  )
}
