import Admin from "../Admin/Admin"
import Login from "../Pages/Login"

const routes = [
	{
		path: '/fn/admin/*',
		component: Admin,
		isPrivate: true,
	},
	{
		path: '/',
		component: Login,
		isPrivate: false,
	},
	// {
	// 	path: '/*',
	// 	component: NotFound,
	// 	isPrivate: true,
	// },
];

export default routes;
