import { BrowserRouter, Routes ,Route } from "react-router-dom"
import { Box } from "@mui/material"
import { ChannelDetail, Feed, Navbar, SearchFeed, VideoDetails } from "./components"


const App = () =>(
    <BrowserRouter>
        <Box sx={{backgroundColor:'#000'}}>
            <Navbar />
            <Routes>
                <Route path="/" element={<Feed />}/>
                <Route path='/video/:id' element={<VideoDetails />} />
                <Route path='/channel/:id' element={<ChannelDetail />} />
                <Route path='/search/:searchTerm' element={<SearchFeed />} />
            </Routes>
        </Box>
    </BrowserRouter>
)

export default App