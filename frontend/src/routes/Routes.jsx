import Add from "../pages/Add"
import Favorites from "../pages/favorites"
import Furniture from "../pages/furniture"
import Home from "../pages/home"
import UserRoot from "../pages/UserRoot"


const Routes=[
    {
        path:"/",
        element: <UserRoot/>,
        children:[
            {
                path:"",
                element:<Home/>
            },
            {
                path:"/furniture",
                element:<Furniture/>
            },
            {
                path:"/add",
                element:<Add/>
            },
            {
                path:"/favorites",
                element:<Favorites/>
            }
        ]
    }
]

export default Routes