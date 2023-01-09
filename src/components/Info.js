import React from 'react'
import { Grid, Typography, Box, Button } from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import neptune from '../data/neptune.json'



export default function Info({isMobile = false}) {

    
const TextStyle = {
    fontFamily: "Open Sans",
    fontWeight: 600
}

const BoxStyle = {
    backgroundColor: "#fff",
    borderRadius: "5px",
    width: isMobile ? "48%" : "140px",
    height: isMobile ? "56px" : "78px",
    margin: isMobile ? "2px" : "0 12.5px",
    alignItems: "center",
    paddingTop: "18px",
    boxShadow: 1
}

const TotalStyle = {
    fontFamily: "Open Sans",
    fontWeight: 600,
    color: "#568CF3",
    fontSize: "20px",

}
  return (
    <Grid item container sx={{ borderRadius: "20px", height: !isMobile && "303px", padding: isMobile ? "16px" : "30px 40px", width: '100%'}}>
        <Grid item container alignItems='center' sx={{width: isMobile ? '100%' : "500px"}}>
            <Grid item xs={4}>
                <Typography sx={TextStyle} style={{fontSize: isMobile ? "24px" : "40px"}}>Neptune</Typography>
            </Grid>
            {!isMobile && <Grid item xs={4}>
                <Typography sx={TextStyle} style={{fontSize: "30px", color: "#31A060"}} >402.70%</Typography>
            </Grid>}
            {!isMobile && <Grid item align="left" xs={2}>
                <Typography sx={TextStyle} style={{fontSize: "16px",  color: "#5C5C5C"}}>0.84771</Typography>
                <Typography sx={TextStyle} style={{fontSize: "12px", fontWeight: 400, color: "#5C5C5C", opacity: 0.6}}>Win %</Typography>
            </Grid>}
            {!isMobile && <Grid item align="left" xs={2}>
                <Typography sx={TextStyle} style={{fontSize: "16px", color: "#5C5C5C"}}>103</Typography>
                <Typography sx={TextStyle} style={{fontSize: "12px", fontWeight: 400, color: "#5C5C5C", opacity: 0.6}}>Age (weeks)</Typography>
            </Grid>}
        </Grid>
        <Grid item container>
            <Typography sx={TextStyle} align='left' style={{fontSize: isMobile ? "14px" : "16px", color: "#5C5C5C", fontWeight: 400, marginLeft: isMobile ? '10px' : '5px'}} >
                Neptune is semi-automated and follows both fundamental and technical analysis. 
            </Typography>
        </Grid>
        <Grid item container={isMobile} justifyContent={isMobile ? 'center' : 'left'}>
            <Button sx={{textTransform: "none", fontSize: "18px", color: "#31A060", fontWeight: 600}}>Read more <KeyboardArrowDownIcon /></Button>
        </Grid>
        <Grid item container>
        {Object.keys(neptune).map((key, index) => {
        return (
            <Box sx={BoxStyle} style={{width: isMobile ? key === "Margin" && "97%" : key === "Margin" && "320px"}} key={index}>
                <Typography sx={TotalStyle}>
                    ${neptune[key]}  
                </Typography>
                <Typography sx={TextStyle} style={{fontSize: "12px", color: "#5C5C5C", fontWeight: 400}}>
                    {key}
                </Typography>
            </Box>
        );
      })}
        </Grid>
    </Grid>
  )
}
