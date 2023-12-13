import { Box, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import { Link, useParams } from 'react-router-dom'
import { fetchFromAPI } from '../utils/fetchDataApi'
import { CheckCircle } from '@mui/icons-material'
import Videos from './Videos'
const VideoDetails = () => {
  let { id } = useParams();
  let [videoDetails, setVideoDetails] = useState([]);
  let [relatedVideos, setRelatedVideos] = useState([]);
  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then(data => setVideoDetails(data.items[0]))
    fetchFromAPI(`search?part=snippet&id,relatedToVideoId=${id}&type=videos`).then(data => setRelatedVideos(data.items))
  }, [id])
  if (!videoDetails?.snippet) return 'loading...';
  const { snippet: { title, channelTitle, channelId }, statistics: { viewCount, likeCount } } = videoDetails;
  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: 'column', md: 'row' }}>
        <Box flex={1}>
          <Box sx={{ width: '100%', position: 'sticky', top: '86px' }}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls />
            <Box>
              <Typography varient="h1" color='white' fontWeight={'bold'} p={2} fontSize={'20px'}>{title}</Typography>
              <Stack direction={'row'} justifyContent={'space-between'}>
                <Link to={`/channel/${channelId}`} style={{ display: "flex", alignItems: 'center' }}>
                  <Typography varient={{ sm: 'subtitle1', md: 'h6' }} color={'#fff'} pl={2} pr={1}>{channelTitle}</Typography>
                  <CheckCircle style={{ color: 'gray', fontSize: '18px', mx: 2 }} />
                </Link>
                <Stack direction={'row'} alignItems={'center'} gap={'20px'}>
                  <Typography varient="body1" sx={{ opacity: 0.7, color: '#fff' }}>{parseInt(viewCount).toLocaleString()} Views</Typography>
                  <Typography varient="body1" sx={{ opacity: 0.7, color: '#fff' }}>{parseInt(likeCount).toLocaleString()} Likes</Typography>
                </Stack>
              </Stack>
            </Box>
          </Box>
        </Box>
        <Box px={2} py={{ md: 1, xs: 5 }} justifyContent={'center'} alignItems={'center'}>
          {relatedVideos && <Videos videos={relatedVideos} direction={{ xs: 'row',md:'column'}} />}
        </Box>
      </Stack>
    </Box>
  )
}

export default VideoDetails