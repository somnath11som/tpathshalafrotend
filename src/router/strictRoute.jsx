import React, { useState } from 'react';
import { useLocation, Navigate } from 'react-router-dom';

import ConditionalRouting from './conditionalRouting';

const StrictRoute = ({ children, redirectTo }) => {
	const isLoggedIn = true;

	const [redirect] = useState(redirectTo || '/dashboard');

	const location = useLocation();

	return isLoggedIn ? (
		<Navigate to={redirect} replace state={{ from: location }} />
	) : (
		<ConditionalRouting>{children}</ConditionalRouting>
	);
};

StrictRoute.defaultProps = {
	redirectTo: '/dashboard',
};

export default StrictRoute;
