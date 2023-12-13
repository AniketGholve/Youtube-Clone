import { Box, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import Videos from './Videos'
import { fetchFromAPI } from '../utils/fetchDataApi'

const Feeds = () => {
  let [videos,setVideos]=useState([]);
  let [selectedCategory,setSelectedCategory]=useState("New");
  useEffect(()=>{
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data)=>setVideos(data.items))
  },[selectedCategory])
  return (
    <Stack sx={{flexDirection:{sx:"column",md:"row"}}}>
      <Box sx={{height:{sx:'auto',md:'92vh'},borderRight:'1px solid #3d3d3d',px:{sx:0,md:2}}}>
        <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
        <Typography className='copyright' varient="body2" sx={{mt:1.5,color:"#fff"}}>
          Ccpyright 2023 JSM Media
        </Typography>
      </Box>
      <Box sx={{p:2,overflowY:'auto',height:'90vh',flex:2}}>
        <Typography variant='h4' fontWeight={'bold'} mb={2} sx={{color:'white'}}>{selectedCategory} <span style={{color:"#f31503"}}>videos</span></Typography>
        <Videos videos={videos}/>
      </Box>
    </Stack>
  )
}

export default Feeds