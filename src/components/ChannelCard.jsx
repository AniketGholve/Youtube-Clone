import { Box, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { demoProfilePicture } from '../utils/constants'
import { CheckCircle } from '@mui/icons-material'

const ChannelCard = ({ ChannelDetail, marginTop, videos }) => {
    return (
        <Box sx={{ boxShadow: 'none', borderRadius: '20px', width: '320px', height: '320px', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 'auto', marginTop: marginTop }}>
            <Link to={`/channel/${ChannelDetail?.id?.channelId}`}>
                <CardContent style={{ textAlign: 'center', color: '#fff' }}>
                    <CardMedia
                        image={ChannelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
                        alt={ChannelDetail?.snippet?.title}
                        sx={{ height: '180px', width: '180px', borderRadius: '50%', mb: 2, margin: 'auto' }}
                    />
                    <Typography variant='h6' color={"#fff"} textAlign={'center'} style={{alignItems:'center',display:'flex'}}>
                        {ChannelDetail?.snippet?.title}
                        <CheckCircle style={{marginLeft:'5px' ,color:'gray',fontSize:'18px'}}/>
                    </Typography>
                    {videos && 
                    <Typography variant='h6' color={"#fff"} textAlign={'center'}>
                        {ChannelDetail?.statistics?.subscriberCount} Subscribers
                    </Typography>}
                </CardContent>
            </Link>
        </Box>
    )
}

export default ChannelCard