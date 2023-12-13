import { Box, Stack } from '@mui/material'
import React from 'react'
import VideoCard from './VideoCard'
/* import ChannelCard from './ChannelCard' */


const Videos = ({videos,direction}) => {
  return (
    <Stack direction={direction || 'row'} flexWrap={'wrap'} justifyContent={'space-evenly'} gap={'3px'}>
      {
        videos.map((item,idx)=>(
          <Box key={idx}>
            {item.id.videoId && <VideoCard video={item}/>}
            {/* {item.id.channelId && <ChannelCard ChannelDetail={item}/>} */}
          </Box>
        ))
      }
    </Stack>
  )
}

export default Videos