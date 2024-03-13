import { extendTheme } from '@chakra-ui/react';

// Checkout the explanation and code sample in https://chakra-ui.com/docs/theming/customize-theme

const ExtendedTheme = extendTheme({
	// style object for base or default style
	baseStyle: {
		fonts: {
			heading: '"Montserrat", sans-serif',
			body: '"Montserrat", sans-serif',
		},
	},
	breakpoints: {
		smallDevice: '560px',
		mediumDevice: '768px',
		lg: '1023px',
		xl: '1368px',
		'2xl': '1536px',
	},
	// styles for different sizes ("sm", "md", "lg")
	sizes: {},
	// styles for different visual variants ("outline", "solid")
	variants: {},
	// default values for `size` and `variant`
	defaultProps: {
		size: '',
		variant: '',
	},

	styles: {
		global: {
			html: {
				fontSize: '62.5%',
				fontFamily: 'Montserrat, sans-serif',
			},
			body: {
				fontSize: '1.5rem',
				fontFamily: 'Montserrat, sans-serif',
				lineHeight: '2.1rem',
				fontWeight: '400',
				marginRight: '0 !important',
			},
			p: {
				fontSize: '1.5rem',
				lineHeight: '2.1rem',
				fontWeight: '400',
				fontFamily: 'Montserrat, sans-serif',
			},
			img: {
				maxWidth: '100%',
				height: 'auto',
			},
			a: {
				transition: 'all 0.4s ease-in-out',
				_hover: {
					transition: 'all 0.4s ease-in-out',
				},
			},
			h1: {
				fontSize: '2rem',
			},
			h2: {
				fontSize: '1.5rem',
			},
		},
	},
	colors: {
		mainBlue: 'rgba(0,48,96,1)',
		mainLightModeBackgroundColor: 'rgba(255,255,255,1)',
		veryLightBlueColor: 'rgba(226,232,240,1)',
		navDropdownBgColor: 'rgba(232, 241, 251, 1)',
		mainLightModeDeepBackgroundColor: 'rgba(233, 233, 233, 1)',
		mainSucessGreen: 'rgba(10,179,156,1)',
		mainErrorRed: 'rgba(240,101,72,1)',
		inputplaceholderColor: 'rgba(114,126,151,1)',
		// DarkMode color palette
		mainDarkModeBackgroundColor: 'rgba(34,36,51,1)',
		mainDarkModeDeepBackgroundColor: 'rgba(26, 28, 41, 1)',
		darkModeBoxBackgroundColor: 'rgba(42, 43, 61, 1)',
		mainDarkModeLightBackgroundColor: 'rgba(55, 56, 74, 1)',
		darkModeBordercolor: 'rgba(55, 56, 74, 1)',
		breadcamDarkModeBgColor: 'rgba(33, 33, 44, 1)',
	},
	textStyles: {
		h1: {
			// you can also use responsive styles
			fontSize: '2rem',
			fontWeight: 'bold',
		},
		h2: {
			fontSize: '1.5rem',
			fontWeight: 'semibold',
		},
		button: {
			fontFamily: 'Montserrat, sans-serif',
			fontSize: '1.5rem',
			transition: 'all 0.4s ease-in-out',
			border: '1px solid transparent',
			_hover: {
				transition: 'all 0.4s ease-in-out',
			},
		},
		input: {
			fontSize: '1.3rem',
		},
		label: {
			fontSize: '1.3rem',
		},
	},
});

export default ExtendedTheme;
