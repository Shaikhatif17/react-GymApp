import React from 'react';
import { Box } from '@mui/material';
import Bodypart from './Bodypart';
const HorizontalScrollbar = ({data,bodypart,setBodypart}) => {
  return (
    <div>
     {data.map((item)=>(
      <Box 
      key={item.id ||item}
      itemId={item.id ||item}
      title={item.id ||item}
     m='0 40px'
      >
<Bodypart item={item} bodypart={bodypart} setBodypart={setBodypart}/>
      </Box>
))}
    </div>
  )
}

export default HorizontalScrollbar;
