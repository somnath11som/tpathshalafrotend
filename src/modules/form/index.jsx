import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import YoutubeFormOptimization from './YoutubeFormOptimization';

const MyForm = () => {
	const globalState = useSelector(
		(state) => state?.theme || { darkMode: false }
	);
	const isDarkMode = globalState?.darkMode || false;

	return (
		<Box
			sx={{
				'& .chakra-form__label': {
					color: ` ${isDarkMode ? 'white' : 'mainBlue'}`,
					fontSize: '13px',
					fontWeight: 'bold',
					marginBottom: '2px',
				},
				'& .chakra-form-control input': {
					bgColor: ` ${
						isDarkMode
							? 'mainDarkModeDeepBackgroundColor'
							: 'mainLightModeBackgroundColor'
					}`,
					height: '35px',
					border: `${`1px solid ${
						isDarkMode
							? 'var(--chakra-colors-darkModeBordercolor)'
							: 'var(--chakra-colors-veryLightBlueColor)'
					}`}`,
					color: 'inputplaceholderColor',
					fontSize: '15px',
					borderRadius: '5px',
					width: '100%',
					padding: '10px',
				},
				'& .chakra-form-control textarea': {
					bgColor: ` ${
						isDarkMode
							? 'mainDarkModeDeepBackgroundColor'
							: 'mainLightModeBackgroundColor'
					}`,
					height: '35px',
					border: `${`1px solid ${
						isDarkMode
							? 'var(--chakra-colors-darkModeBordercolor)'
							: 'var(--chakra-colors-veryLightBlueColor)'
					}`}`,
					color: 'inputplaceholderColor',
					fontSize: '15px',
					borderRadius: '5px',
					width: '100%',
				},
				'& .chakra-form-control': {
					marginBottom: '5px',
				},
				'& form': {
					width: '100%',
				},
				'& .error': {
					color: 'mainErrorRed',
				},
			}}>
			<Box marginBottom='15px' color={isDarkMode ? 'white' : 'mainBlue'}>
				<Heading>User Details Form</Heading>
			</Box>
			<Box width='100%' display='flex' gap='15px'>
				<YoutubeFormOptimization />
			</Box>
		</Box>
	);
};

export default MyForm;
