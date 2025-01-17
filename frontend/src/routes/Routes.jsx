import Add from "../pages/Add"
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
            }
        ]
    }
]

export default Routes