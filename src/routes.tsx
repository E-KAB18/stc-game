import { createBrowserRouter } from "react-router-dom";
import DetailsPage from "./pages/DetailsPage/DetailsPage";
import HomePage from "./pages/HomePage/HomePage";
import Layout from "./pages/Layout/Layout";
import LoginForm from "./pages/Login/Login";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{ index: true, element: <HomePage /> },
			{ path: "/games/:id", element: <DetailsPage /> },
		],
	},
	{ path: "/login", element: <LoginForm /> },
]);

export default router;
