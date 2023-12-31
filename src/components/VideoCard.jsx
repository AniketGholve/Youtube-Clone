import React from 'react'
import { Link } from 'react-router-dom'
import { Typography, Card, CardContent, CardMedia } from '@mui/material'
import { demoChannelTitle, demoChannelUrl, demoVideoTitle, demoVideoUrl } from '../utils/constants'
import { CheckCircle } from '@mui/icons-material'
const VideoCard = ({ video: { id: { videoId }, snippet } }) => {
    return (
        <Card sx={{ width: { md: '320px', xs: '320px',borderRadius: '0px' ,boxShadow:'none',backgroundColor:'#000'} }}>
            <Link to={videoId ? `video/${videoId}` : demoVideoUrl}>
                <CardMedia
                    image={snippet?.thumbnails?.high?.url}
                    alt={snippet?.title}
                    sx={{ width: 320, height: 180, borderRadius: '20px', backgroundColor: '#000' }}
                    className="thumbnail"
                    position='relative'
                />
            </Link>
            <CardContent sx={{ backgroundColor: '#000', height: 106}}>
                <Link to={videoId ? `video/${videoId}` : demoVideoUrl}>
                    <Typography variant='subtitle1' fontWeight={'bold'} color={'#fff'}>{snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}</Typography>
                </Link>
                <Link to={snippet?.channelId ? `channel/${snippet?.channelId}` : demoChannelUrl}>
                    <Typography variant='subtitle2'fontWeight={'bold'} color={'gray'} display={'flex'} alignItems={'center'}>{snippet?.channelTitle.slice(0, 60) || demoChannelTitle.slice(0, 60)}<CheckCircle  sx={{ fontSize: 15, color: 'gray',marginLeft:'5px' }} /></Typography>
                </Link>
            </CardContent>
        </Card>
    )
}

export default VideoCard