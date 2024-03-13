import { Box, Heading } from '@chakra-ui/react';
import React from 'react';
import { useSelector } from 'react-redux';
import CardComponent from './CardComponent';
import ChartComponent from './ChartComponentOne';
import ChartComponentTwo from './ChartComponentTwo';

const Dashboard = () => {
	const globalState = useSelector(
		(state) => state?.theme || { darkMode: false }
	);
	const isDarkMode = globalState?.darkMode || false;
	return (
		<Box color={isDarkMode ? 'white' : 'mainBlue'}>
			<Box>
				<Heading as='h1' fontSize='18px' marginBottom='5px'>
					Good Morning, Srijan!
				</Heading>
				<Box as='p' fontSize='15px'>
					Here's what's happening with your store today.
				</Box>
			</Box>
			<CardComponent />
			<Box
				width='100%'
				display='flex'
				flexWrap='wrap'
				gap='15px'
				marginTop='24px'
				justifyContent='space-between'>
				<Box
					width={{ base: '100%', lg: '49%' }}
					bg={
						isDarkMode
							? 'mainDarkModeDeepBackgroundColor'
							: 'mainLightModeDeepBackgroundColor'
					}
					p='15px 15px'
					borderRadius='10px'
					boxShadow='rgba(0, 0, 0, 0.24) 0px 3px 8px'>
					<ChartComponent />
				</Box>
				<Box
					width={{ base: '100%', lg: '49%' }}
					bg={
						isDarkMode
							? 'mainDarkModeDeepBackgroundColor'
							: 'mainLightModeDeepBackgroundColor'
					}
					p='15px 15px'
					borderRadius='10px'
					boxShadow='rgba(0, 0, 0, 0.24) 0px 3px 8px'>
					<ChartComponentTwo />
				</Box>
			</Box>
		</Box>
	);
};

export default Dashboard;
