import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ChannelCard from './ChannelCard'
import Videos from './Videos'
import { fetchFromAPI } from '../utils/fetchDataApi'

const ChannelDetails = () => {
  let { id } = useParams()
  let [channelData, setChannelData] = useState(null)
  let [videos, setVideos] = useState(null)
  useEffect(() => {
    fetchFromAPI(`channels?parts=snippet&id=${id}`).then((data) => setChannelData(data?.items[0]))
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then((data) => setVideos(data?.items))
  }, [id])

  console.log(videos)
  return (
    <Box>
      <Box>
        <div style={{ background: "linear-gradient(0deg, rgba(145,142,101,1) 0%, rgba(167,51,145,1) 44%, rgba(0,15,18,1) 100%)", height: '300px' ,display:'flex',justifyContent:'center'}}></div>
        <ChannelCard ChannelDetail={channelData} marginTop="-120px" videos={videos}/>
      </Box>
      <Box display={'flex'} p='2' sx={{justifyContent:'center'}}>
        <Box sx={{mr:{sm:'100px'}}}/>
          {videos&&<Videos videos={videos}/>}
      </Box>
    </Box>
  )
}

export default ChannelDetails