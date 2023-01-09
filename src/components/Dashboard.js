import React from 'react'
import { Grid, Tab} from '@mui/material'
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import Info from './Info';
import Graph from './Graph'
import Menu from './Menu';
import { TabContext } from '@mui/lab';
import data from '../data/table.json'
import DataTable from './DataTable';


export default function Dashboard({selectedRow, setSelectedRow, isSelectedRowTraded, setisSelectedRowTraded}) {

  return (
    <Grid container direction='row' sx={{padding: '10px'}}>
        <Grid item container xs={9}>
                <Grid item>
                    <Info />
                </Grid>
                <Grid item container alignItems='center' direction='column'>
                    <TabContext value={"1"}>
                        <Grid item>
                            <TabList aria-label="lab API tabs example">
                                <Tab label="Profit" value="1" />
                                <Tab label="Balance" value="2" />
                                <Tab label="DD" value="3" />
                                <Tab label="Monthly P/L" value="4" />
                                <Tab label="Providers P/L" value="5" />
                                <Tab label="Symbols" value="6" />
                            </TabList>
                        </Grid>
                        <Grid item>
                            <TabPanel value="1">
                                <Graph data={data} />
                            </TabPanel>
                        </Grid>
                    </TabContext>

                </Grid>
                <Grid item container justifyContent='center'>
                    <DataTable setSelectedRow={setSelectedRow} selectedRow={selectedRow} isSelectedRowTraded={isSelectedRowTraded} />
                </Grid>
        
        </Grid>
        <Grid item container xs={3}>
            <Menu selectedRow={selectedRow} setSelectedRow={setSelectedRow} setisSelectedRowTraded={setisSelectedRowTraded} isSelectedRowTraded={isSelectedRowTraded} />
        </Grid>

    </Grid>
  )
}
