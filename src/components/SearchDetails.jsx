import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchFromAPI } from '../utils/fetchDataApi'
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import Videos from './Videos';

const SearchDetails = () => {
  let { searchTerm } = useParams();
  let [searchData, setSearchData] = useState([]);
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then(data => setSearchData(data.items))
  }, [searchTerm])
  return (
    <Box sx={{ p: 2, overflowY: 'auto', height: '90vh', flex: 2 }}>
      <Typography variant='h4' fontWeight={'bold'} mb={2} sx={{ color: 'white' }}>Search Results For <span style={{ color: "#f31503" }}>{searchTerm.toUpperCase()}</span> Videos</Typography>
      {searchData &&<Videos videos={searchData} />}
    </Box>
  )
}

export default SearchDetails