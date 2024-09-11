import { createBrowserRouter } from "react-router-dom";
import Home from "../screens/Home";
import PlayingVideo from "../screens/PlayingVideo";
import Search from "../screens/Search";

export const routes= createBrowserRouter([
    {  index: true , element: <Home/> },
    {  path:"/search/:searchQuery" ,element:<Search/> },
    {  path:"/video/:id" , element: <PlayingVideo/> }
]) 