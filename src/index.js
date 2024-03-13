import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import RouteHolder from './router/routeHolder';
import ExtendedTheme from './modules/global/css/chakraExtendTheme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<ChakraProvider theme={ExtendedTheme} resetCSS>
		<React.StrictMode>
			<RouteHolder />
		</React.StrictMode>
	</ChakraProvider>
);
