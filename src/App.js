import { Box } from '@mui/material'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Feeds from './components/Feeds'
import VideoDetails from './components/VideoDetails'
import ChannelDetails from './components/ChannelDetails'
import SearchDetails from './components/SearchDetails'

const App = () =>  (
    <BrowserRouter>
        <Box sx={{backgroundColor:"#000"}}>
            <Navbar/>
            <Routes>
                <Route path='/'element={<Feeds/>}/>
                <Route path='/video/:id' element={<VideoDetails/>} />
                <Route path='/channel/:id' element={<ChannelDetails/>} />
                <Route path='/search/:searchTerm' element={<SearchDetails/>} />
            </Routes>
        </Box>
    </BrowserRouter>
  )

export default App