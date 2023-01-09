import React from 'react'
import { Grid, Button, Typography, Collapse, Box } from '@mui/material'
import Activate from './ui/icons/Activate'
import Notify from './ui/icons/Notify'
import DirectCopy from './ui/icons/DirectCopy'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Selected from './ui/icons/Selected'
import SelectedRow from './SelectedRow'
import Selection from './Selection'


const ButtonStyle = {
    textTransform: "none", 
    backgroundColor: "#fff", 
    color: "#000", 
    height: 50, 
    width: 309, 
    borderRadius: 0,
    boxShadow: 1
}
const buttons = [{id: 'activate', icon: <Activate />, legend: "Activate"}, {id: 'notify', icon: <Notify />, legend: "Notify"} ]

export default function Menu({selectedRow, setSelectedRow, setisSelectedRowTraded, isSelectedRowTraded}) {

  return (
    <>
    <Grid item container justifyContent='center' sx={{maxHeight: "315px", padding: "10px 0"}}>
        <Grid item>
            <Button sx={{textTransform: "none", backgroundColor: "#31A060", color: "#fff", height: 50, width: 309, borderRadius: 0, "&:hover": {backgroundColor: "#31A060"}}}>Sign up</Button>
        </Grid>
        {buttons.map(button => (
            <Grid item key={button.id}>
            <Button sx={ButtonStyle}>
                <Grid item container justifyContent='space-between' alignItems='center' sx={{width: '309px'}}>
                    <Grid item container alignItems='center' sx={{width: '90%'}}>
                        {button.icon}  <Typography sx={{marginLeft: '10px'}}>{button.legend}</Typography>
                    </Grid>
                    <Grid item>
                        <KeyboardArrowDownIcon sx={{color: button.id === 'copy' ? selectedRow ? "#FFA800" : "#568CF3" : "#568CF3", transform: button.id === 'copy' ? selectedRow ? 'rotate(180deg)' : null : null  }} />
                    </Grid>
                </Grid>
            </Button>
        </Grid>
        ))}
        <Grid item>
            <Box sx={{ 
            backgroundColor: "#fff", 
            color: "#000", 
            height: selectedRow ? isSelectedRowTraded ? 550 : 500 : 30, 
            width: 289, 
            borderRadius: 0,
            boxShadow: 1,
            padding: '10px'}}>
            <Grid item container justifyContent='space-between' alignItems='center' sx={{width: '289px'}}>
                    <Grid item container alignItems='center' sx={{width: '90%'}}>
                   { selectedRow ? <Selected /> : <DirectCopy />}  <Typography sx={{marginLeft: '10px'}}>Direct copy</Typography>
                    </Grid>
                    <Grid item>
                        <KeyboardArrowDownIcon sx={{color: selectedRow ? "#FFA800" : "#568CF3", transform: selectedRow ? 'rotate(180deg)' : null }} />
                    </Grid>
                </Grid>
                {selectedRow && 
                <>
                <SelectedRow data={selectedRow} />
                <Selection setSelectedRow={setSelectedRow} setisSelectedRowTraded={setisSelectedRowTraded} isSelectedRowTraded={isSelectedRowTraded}/>
                </>
                }
            </Box>
        </Grid>
    </Grid>
</>
  )
}
