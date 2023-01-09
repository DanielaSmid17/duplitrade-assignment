import React from 'react'
import { Grid } from '@mui/material'
import Info from './Info'
import Graph from './Graph'
import DataTable from './DataTable'
import SelectedRow from './SelectedRow'
import Selection from './Selection'

export default function MobileDashboard({selectedRow, setSelectedRow, isSelectedRowTraded, setisSelectedRowTraded}) {
  return (
    <Grid item container sx={{backgroundColor: "#F8F9FA"}}>
        <Grid item >
            <Info isMobile />
        </Grid>
        <Grid item container justifyContent='center'>
            <Graph isMobile />
        </Grid>
        {selectedRow && 
        <Grid item>
                <SelectedRow isMobile data={selectedRow} />
                <Selection isMobile setSelectedRow={setSelectedRow} setisSelectedRowTraded={setisSelectedRowTraded} isSelectedRowTraded={isSelectedRowTraded}/>
        </Grid>
            }
        <Grid item container sx={{width: '100%'}}>
            <DataTable isMobile setSelectedRow={setSelectedRow} selectedRow={selectedRow} isSelectedRowTraded={isSelectedRowTraded} />
        </Grid>
    </Grid>
  )
}
