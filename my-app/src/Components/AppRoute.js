import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import { useAuthState } from '../Context';

const AppRoutes = ({ component: Component, path, isPrivate, ...rest }) => {
	const userDetails = useAuthState();
	return (
		<Route
			path={path}
			render={(props) =>
				{
					console.log(path)
					return(
						isPrivate && !Boolean(userDetails.token) ? (
							<Redirect to={{ pathname: '/' }} />
						) : (
							<Component {...props} />
						)
					)
				}
			}
			{...rest}
		/>
		
		// <Route exact path={path} component={Component}/>
	);
};

export default AppRoutes;
