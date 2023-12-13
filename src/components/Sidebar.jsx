import { Stack } from '@mui/material'
import { categories } from '../utils/constants'
const Sidebar = ({selectedCategory,setSelectedCategory}) => {
  return (
    <Stack direction={"row"} sx={{
      overflowY:'auto',
      height:{sx:'auto',md:'95%'},
      flexDirection:{md:'column'}
    }}>
      {categories.map((categorie,idx)=>(
        <button key={idx} className='category-btn' style={{
          background:categorie.name===selectedCategory && '#FC1503',
          color:"white"
        }} onClick={()=>setSelectedCategory(categorie.name)}>
          <span style={{color:categorie.name===selectedCategory?"white":"red",marginRight:'15px'}}>{categorie.icon}</span>
          <span>{categorie.name}</span>
        </button>
      ))}
    </Stack>
  )
}

export default Sidebar