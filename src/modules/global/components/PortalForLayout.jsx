import React from 'react';
import { Portal } from '@chakra-ui/react';

const PortalForLayout = (props) => {
	const { portalId, globalLayout, children } = props;

	if (globalLayout) {
		return <Portal containerRef={portalId}>{children}</Portal>;
	}
	return <div className='hasNoGlobalLayout'>{children}</div>;
};

export default PortalForLayout;
