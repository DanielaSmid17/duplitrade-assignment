import React from 'react'
import { Button, Grid, Typography } from '@mui/material'
import Copied from './ui/icons/Copied'
import Selected from './ui/icons/Selected'
import UnSelected from './ui/icons/Unselected'

const AttributeStyle = {
    fontFamily: 'Open Sans',
    fontSize: '14px',
    fontWeight: 600
}
const ValueStyle = {
    fontFamily: 'Open Sans',
    fontSize: '14px',
    fontWeight: 400,
    color: '#5C5C5C'
}

const RowStyle = {
    borderBottom: "1px solid #E9ECEF", 
    padding: '5px 0'

}

export default function Card({row, isNegative, handleSelect}) {

    const statusRender = (status) => {
        switch(status) {
          case "unselected":
            return {icon: <UnSelected />, backgroundColor: '#E9ECEF', color: '#858585', legend: 'Copy'};
          case "selected":
            return {icon: <Selected />, backgroundColor: '#FDF5E6', color: '#FFA800', legend: 'Direct Copy in Progress'};
          case "copied": 
            return {icon: <Copied />, backgroundColor: '#C1E3CF', color: '#31A060', legend: 'Copied'} ;
          default: 
            break; 
        }
    
      }

  return (
    <Grid container sx={{padding: '16px', backgroundColor: '#fff', width: '100%', borderRadius: '5px', marginBottom: '10px'}}>
       
        <Grid item container alignItems='center' justifyContent='space-between' sx={RowStyle}>
            <Grid item>
                <Typography sx={AttributeStyle}>
            
                    <span style={{color: '#568CF3', marginRight: '5px'}}>ACE</span> NZD/USD
                </Typography>
            </Grid>
            <Grid item>
                <Typography sx={ValueStyle} style={{fontWeight: 600, color: '#000000'}}>
                    {row.buy_sell.toUpperCase()}
                </Typography>
            </Grid>
        </Grid>
        <Grid item container justifyContent='space-between' sx={RowStyle}>
            <Grid item>
                <Typography sx={AttributeStyle}>
                    Ticket
                </Typography>
            </Grid>
            <Grid item>
                <Typography sx={ValueStyle}>
                    {row.ticket}
                </Typography>
            </Grid>
        </Grid>
        <Grid item container justifyContent='space-between' sx={RowStyle}>
            <Grid item>
                <Typography sx={AttributeStyle}>
                    Size
                </Typography>
            </Grid>
            <Grid item>
                <Typography sx={ValueStyle}>
                    {row.size}
                </Typography>
            </Grid>
        </Grid>
        <Grid item container justifyContent='space-between' sx={RowStyle}>
            <Grid item>
                <Typography sx={AttributeStyle}>
                    Open
                </Typography>
            </Grid>
            <Grid item>
                <Typography sx={ValueStyle}>
                    {row.open}
                </Typography>
            </Grid>
        </Grid>
        <Grid item container justifyContent='space-between' sx={RowStyle}>
            <Grid item>
                <Typography sx={AttributeStyle}>
                    Stop
                </Typography>
            </Grid>
            <Grid item>
                <Typography sx={ValueStyle}>
                    {row.stop}
                </Typography>
            </Grid>
        </Grid>
        <Grid item container justifyContent='space-between' sx={RowStyle}>
            <Grid item>
                <Typography sx={AttributeStyle}>
                    Limit
                </Typography>
            </Grid>
            <Grid item>
                <Typography sx={ValueStyle}>
                    {row.limit}
                </Typography>
            </Grid>
        </Grid>
        <Grid item container justifyContent='space-between' sx={RowStyle}>
            <Grid item>
                <Typography sx={AttributeStyle}>
                    Limit
                </Typography>
            </Grid>
            <Grid item>
                <Typography sx={ValueStyle}>
                    {row.limit}
                </Typography>
            </Grid>
        </Grid>
        <Grid item container justifyContent='space-between' sx={RowStyle}>
            <Grid item>
                <Typography sx={AttributeStyle}>
                    Current
                </Typography>
            </Grid>
            <Grid item>
                <Typography sx={ValueStyle}>
                    {row.current}
                </Typography>
            </Grid>
        </Grid>
        <Grid item container justifyContent='space-between' sx={RowStyle}>
            <Grid item>
                <Typography sx={AttributeStyle}>
                    Net P/L
                </Typography>
            </Grid>
            <Grid item>
                <Typography sx={ValueStyle} style={{color: isNegative(row.net_pl) ? "#F53F3F" : "#31A060", fontWeight: 600}}>
                    {row.net_pl}
                </Typography>
            </Grid>
        </Grid>
        <Grid item container alignItems='flex-end' justifyContent='space-between' sx={RowStyle}>
            <Grid item>
                <Typography align='left' sx={AttributeStyle}>
                    Open Time <br/> (GTM):
                </Typography>
            </Grid>
            <Grid item>
                <Typography sx={ValueStyle}>
                    {row.open_time}
                </Typography>
            </Grid>
        </Grid>
        <Grid item container justifyContent='center' sx={{padding: '5px 0'}}>
            <Button onClick={()=> handleSelect(row)} sx={{width: '250px', height: '40px', textTransform: 'none', backgroundColor: statusRender(row.status).backgroundColor, color: statusRender(row.status).color  }}>
                 {statusRender(row.status).icon} <span style={{marginLeft: "10px"}}>{statusRender(row.status).legend}</span>
            </Button>
        </Grid>

    </Grid> 
  )
}
