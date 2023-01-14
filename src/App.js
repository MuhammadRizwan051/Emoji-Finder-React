import React, { useEffect, useState } from 'react'
import { Grid, TextField, Typography, Box, Tooltip } from '@mui/material'
import emoji_data from './Emoji_Data';

function App() {
  let [data, setData] = useState([])
  let [data1, setData1] = useState([])


  let search = (val) => {
    let filter = data.filter((e, i) => (
      e.description.toLowerCase().includes(val.toLowerCase())
    ))
    setData1([...filter])
  }
  // console.log(data)


  useEffect(() => {
    setData([...emoji_data])
    setData1([...emoji_data])
  }, [])

  return (
    <>
      <Box sx={{ marginBottom: 4, paddingTop: 2, position: 'fixed', top: 0, left: 0, right: 0, bgcolor: 'lightblue' }}>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <TextField variant='standard' label='Search Emoji...' onChange={(e) => search(e.target.value)} sx={{ width: '70%', bgcolor: 'white' }} />
        </Box>
      </Box>


      <Box sx={{ bgcolor: 'lightblue', height: '100%', paddingTop: 10 }}>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>

          <Grid container columnSpacing={1} rowGap={1} sx={{ width: '70%', bgcolor: '#579BB1', padding: 1 }}>
            {data1.map((e, i) => (
              <Grid item xl={1} lg={2} md={2} sm={2} xs={3} key={i} >
                <Box sx={{ bgcolor: 'white', height: '100%', width: '100%' }}>
                  <Typography sx={{ fontSize: 22, textAlign: 'center', paddingTop: 2 }}>{e.emoji}</Typography>
                  <Tooltip title={e.description}>
                    <Typography sx={{ fontSize: 12, textAlign: 'center', paddingTop: 1, paddingBottom: 2 }}>{e.description.slice(0, 1).toUpperCase() + e.description.slice(1, 10) + (e.description.length > 10 ? "..." : "")}</Typography>
                  </Tooltip>
                </Box>
              </Grid>
            ))}
          </Grid>

        </Box>
      </Box>
    </>
  )
}

export default App