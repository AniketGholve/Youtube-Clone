import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Paper, IconButton } from '@mui/material';
import  Search  from '@mui/icons-material/Search'
const SearchBar = () => {
    let [searchKey,setSearchKey]=useState("");
    let navigate=useNavigate();
    const searchDataFunction=(e)=>{
        e.preventDefault()
        if(searchKey!=="" && searchKey!==null){
        navigate(`/search/${searchKey}`)
        setSearchKey('')
        }
    }
    return (
        <Paper component={"form"} onSubmit={(e) => {searchDataFunction(e)}} sx={{
            borderRadius: 20,
            border: '1px solid #e3e3e3',
            pl: 2,
            boxShadow: 'none',
            mr: { sm: 5 }
        }}>
            <input className='search-bar' placeholder='Search...' defaultValue={""} onChange={(e) => setSearchKey(e.target.value)} />
            <IconButton type='submit' sx={{p:'10px',color:'red'}}>
                <Search />
            </IconButton>
        </Paper>
    )
}

export default SearchBar