import React from 'react'
import { Grid, Typography, Box, Tooltip, IconButton } from '@mui/material'
import InfoIcon from './ui/icons/InfoIcon'

export default function SelectedRow({data, isMobile = false}) {
    
    const barWidth = (percentage) => {
        return (percentage * 12) / 100
    }

  return (
    <Grid container sx={{marginTop: "10px", padding: isMobile ? '0 16px' : 0}}>
        <Grid item container justifyContent='center' sx={{backgroundColor: '#F8F9FA', borderRadius: '4px', padding: '5px'}}>
            <Grid item>
                <Typography sx={{fontSize: '16px', fontFamily: 'Open Sans', fontWeight: 600}}>{data.strategy} Strategy</Typography>
            </Grid>
            <Grid item container justifyContent="space-between" sx={{padding: '3px', marginTop: '7px', borderBottom: '1px solid #E9ECEF'}}>
                <Grid item>
                    <Typography sx={{fontSize: '14px', fontFamily: 'Open Sans', fontWeight: 600}}>Symbol</Typography>
                </Grid>
                <Grid item>
                    <Typography sx={{fontSize: '14px', fontFamily: 'Open Sans', fontWeight: 400}}>{data.symbol}</Typography>
                </Grid>
            </Grid>
            <Grid item container justifyContent="space-between" sx={{padding: '3px', marginTop: '7px', borderBottom: '1px solid #E9ECEF'}}>
                <Grid item>
                    <Typography sx={{fontSize: '14px', fontFamily: 'Open Sans', fontWeight: 600}}>Size</Typography>
                </Grid>
                <Grid item>
                    <Typography sx={{fontSize: '14px', fontFamily: 'Open Sans', fontWeight: 400}}>{data.size}</Typography>
                </Grid>
            </Grid>
            <Grid item container justifyContent="space-between" sx={{padding: '3px', marginTop: '7px'}}>
                <Grid item xs={barWidth(56)} sx={{padding: '0 1px'}}>
                    <Box sx={{height: '5px', width: '100%', backgroundColor: '#31A060'}}/>
                </Grid>
                <Grid item xs={barWidth(44)}>
                    <Box sx={{height: '5px', width: '100%', backgroundColor: '#F53F3F'}}/>
                </Grid>
            </Grid>
            <Grid item container justifyContent="space-between" sx={{padding: '3px', marginTop: '7px'}}>
                <Grid item>
                    <Typography sx={{fontSize: '14px', fontFamily: 'Open Sans', fontWeight: 600, color: "#31A060"}}>Win 56%</Typography>
                </Grid>
                <Grid item>
                    <Typography sx={{fontSize: '14px', fontFamily: 'Open Sans', fontWeight: 600, color: '#F53F3F'}}>Loss 44%</Typography>
                </Grid>
            </Grid>
            <Grid item container justifyContent="space-between" sx={{padding: '0 3px', borderBottom: '1px solid #E9ECEF'}}>
                <Grid item>
                    <Typography sx={{fontSize: '14px', fontFamily: 'Open Sans', fontWeight: 400, color: '#5C5C5C'}}>440 Trades</Typography>
                </Grid>
                <Grid item>
                    <Typography sx={{fontSize: '14px', fontFamily: 'Open Sans', fontWeight: 400, color: '#5C5C5C'}}>560 Trades</Typography>
                </Grid>
            </Grid>
            <Grid item container justifyContent='center' sx={{backgroundColor: '#E9EFF9', padding: '5px', borderRadius: '5px', marginTop: '15px' }}>
                <Grid item xs={1}>
                    <Tooltip title="See more" sx={{backgroundColor: 'transparent'}}>
                        <IconButton sx={{backgroundColor: 'transparent'}}>
                            <InfoIcon />
                        </IconButton>
                    </Tooltip>
                </Grid>
                <Grid item xs={11} sx={{marginTop: '5px', padding: '0 7px'}}>
                    <Typography align='left' paragraph sx={{fontSize: '12px', fontFamily: 'Open Sans', fontWeight: 400, color: '#5C5C5C'}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                    </Typography>
                </Grid>
            </Grid>
        </Grid>

    </Grid>
  )
}
