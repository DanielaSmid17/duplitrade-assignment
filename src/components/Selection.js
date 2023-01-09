import React, {useState} from 'react'
import { Button, Grid, Typography, CircularProgress, Switch} from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Check from './ui/icons/Check';

import {styled} from '@mui/material/styles';

const AlertSwitch = styled((props) => (
    <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
  ))(({ theme }) => ({
    width: 49,
    height: 22.5,
    padding: 0,
    paddingLeft: '-10px',
    borderRadius: 40,
    '& .MuiSwitch-switchBase': {
      padding: 0,
      margin: 2,
      transitionDuration: '300ms',
      '&.Mui-checked': {
        transform: 'translateX(28px)',
        color: '#fff',
        '& + .MuiSwitch-track': {
          backgroundColor: '#31A060',
          opacity: 1,
          border: 0,
        },
        '&.Mui-disabled + .MuiSwitch-track': {
          opacity: 0.5,
        },
      },
      '&.Mui-focusVisible .MuiSwitch-thumb': {
        color: '#33cf4d',
        border: '6px solid #fff',
      },
      '&.Mui-disabled .MuiSwitch-thumb': {
        color:'#DFDFDF'
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
      },
    },
    '& .MuiSwitch-thumb': {
      boxSizing: 'border-box',
      width: 16.79,
      height: 16.79,
      marginTop: '1px'
    },
    '& .MuiSwitch-track': {
      borderRadius: 26 / 2,
      backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#DFDFDF',
      opacity: 1,
      transition: theme.transitions.create(['background-color'], {
        duration: 1000,
      }),
    },
  }));



export default function Selection({setSelectedRow, setisSelectedRowTraded, isSelectedRowTraded, isMobile=false}) {
    const [size, setSize] = useState(0.02) 
    const [isLoading, setIsLoading] = useState(false)


    const handleBuyClick = () => {
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false);
            setisSelectedRowTraded(true)
        }, 3000);
        
    }

    const loading = (
       <Grid item alignItems='center' container sx={{backgroundColor: '#FFF6E6', height: '50px', }}>
        <Grid item xs={3}>
            <CircularProgress size={20} sx={{color: '#FFA800'}} />
        </Grid>
        <Grid item>
            <Typography sx={{fontFamily: 'Open Sans', fontSize: '16px', fontWeight: 600}}>Sending to Broker</Typography>
        </Grid>

       </Grid>
    )

    const handleAddToSize = () => {
        setSize(size + 0.01)
    }
    const handleRemoveToSize = () => {
        if (size >= 0.02)
            setSize(size - 0.01)
    }
  return (
    <Grid container sx={{marginTop: '10px', padding: isMobile ? '0 16px' : 0}}>
        <Grid item container justifyContent='center'>
            <Grid item>
                <Typography sx={{fontFamily: 'Open Sans', fontSize: '14px', fontWeight: 600}}>Select Lot Size</Typography>
            </Grid>
            <Grid item container alignItems='center' sx={{border: '2px solid #98CFAF', borderRadius: '3px', height: '42px', padding: 0}}>
                <Grid item sx={{width: '10%'}}>
                    <Button onClick={()=>handleRemoveToSize()} sx={{backgroundColor:'#C1E3CF', "&:hover": {backgroundColor:'#C1E3CF', opacity: .9}, borderRadius: '1px 3px 3px 1px', height: '38px' }}><RemoveIcon sx={{color: '#98CFAF'}} /></Button>
                </Grid>
                <Grid item sx={{width: '68%'}}>
                    <Typography sx={{marginLeft:'25px', fontFamily: 'Open Sans', fontSize: '12px', fontWeight: 400}}>{Math.round(size * 100) / 100}</Typography>
                </Grid>
                <Grid item sx={{width: '10%'}}>
                    <Button onClick={()=>handleAddToSize()} sx={{backgroundColor:'#C1E3CF', "&:hover": {backgroundColor:'#C1E3CF', opacity: .9}, borderRadius: '3px 1px 1px 3px', height: '38px', marginLeft: isMobile ? '10px' : '-1px'}}><AddIcon sx={{color: '#98CFAF'}} /></Button>
                </Grid>
            </Grid>
            <Grid item container sx={{marginTop: '10px'}}>
                
                {(!isLoading && !isSelectedRowTraded) && <Button onClick={()=> handleBuyClick()} sx={{borderRadius: 0, backgroundColor: '#E9ECEF', "&:hover": {backgroundColor:'#E9ECEF', opacity: .9}, textTransform: 'none', width: '100%' }}>
                    <Grid item container direction='column'>
                        <Typography sx={{fontFamily: 'Open Sans', color: '#858585'}}>Market Execution</Typography>
                        <Typography sx={{fontFamily: 'Open Sans', color: '#858585', fontWeight: 600}}>BUY {Math.round(size * 100) / 100}</Typography>
                    </Grid>
                </Button>}
                {isLoading && loading}
                {(isLoading || isSelectedRowTraded) && 
                    <Grid item container alignItems='flex-start' justifyContent='space-around'>
                        <Grid item xs={9}>
                            <Typography align='left' sx={{fontFamily: 'Open Sans', fontSize: '14px', fontWeight: 400, color: "#5C5C5C"}}>The trade will be opened on my account</Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <AlertSwitch defaultChecked />
                        </Grid>
                    </Grid>
                }
                {isSelectedRowTraded &&
                    <Grid item container sx={{backgroundColor: '#EAF6EF', height: '96px', marginTop: '10px'}}>
                        <Grid item container justifyContent='center' sx={{marginTop: '5px'}}>
                            <Check />
                            <Typography sx={{fontFamily: 'Open Sans', fontSize: '16px', fontWeight: 600, marginLeft: "5px"}}>
                                Trade generated
                            </Typography>
                        </Grid>
                        <Grid item container justifyContent='center' direction='column'>
                            <Typography sx={{fontFamily: 'Open Sans', fontSize: '12px', fontWeight: 400}}>
                                TicketID #5544555
                            </Typography>
                            <Typography sx={{fontFamily: 'Open Sans', fontSize: '12px', fontWeight: 400}}>
                                Buy 0.01 AUDUSD
                            </Typography>
                            <Typography sx={{fontFamily: 'Open Sans', fontSize: '12px', fontWeight: 400}}>
                                P/L $72.35
                            </Typography>
                        </Grid>
                    </Grid>
                }

                
            </Grid>
            {(!isLoading && !isSelectedRowTraded) && <Grid item container justifyContent='center' sx={{marginTop: '10px'}}>
                <Button onClick={()=> setSelectedRow(null)} sx={{textTransform: 'none', color: '#000', "&:hover": {backgroundColor:'#fff', color: '#858585' }}}>
                    Cancel
                </Button>
            </Grid>}
        </Grid>
    </Grid>
  )
}
