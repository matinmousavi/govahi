import Home from "./pages/Home"
import UserCertificates from "./pages/UserCertificates"


const routes = [
    {path: '/' , element: <Home />},
    {path: '/usercertificates/:userId' , element: <UserCertificates />},
]

export default routes