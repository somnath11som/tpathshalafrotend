import { Box, Heading } from '@chakra-ui/react';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const CardComponent = () => {
	const globalState = useSelector(
		(state) => state?.theme || { darkMode: false }
	);
	const isDarkMode = globalState?.darkMode || false;
	const cardData = [
		{
			id: '1',
			name: 'TOTAL EARNINGS',
			ammount: '$559.25k',
			growth: '+16.24',
			link: '/',
		},
		{
			id: '2',
			name: 'ORDERS',
			ammount: '36,894',
			growth: '-3.57',
			link: '/',
		},
		{
			id: '3',
			name: 'CUSTOMERS',
			ammount: '183.35M',
			growth: '29.08',
			link: '/',
		},
		{
			id: '4',
			name: 'MY BALANCE',
			ammount: '$165.89k',
			growth: '0.00',
			link: '/',
		},
	];
	return (
		<Box
			width='100%'
			display='flex'
			flexWrap='wrap'
			gap='15px'
			marginTop='24px'
			justifyContent='space-between'>
			{cardData.map((data) => {
				return (
					<Box
						width={{ base: '100%', lg: '23%' }}
						bg={
							isDarkMode
								? 'mainDarkModeDeepBackgroundColor'
								: 'mainLightModeDeepBackgroundColor'
						}
						p='15px 15px'
						borderRadius='10px'
						boxShadow='rgba(0, 0, 0, 0.24) 0px 3px 8px'
						key={data.id}>
						<Box
							display='flex'
							justifyContent='space-between'
							marginBottom='10px'>
							<Heading fontSize='16px' fontWeight='500'>
								{data.name}
							</Heading>
							<Heading
								fontSize='14px'
								color={
									data.growth.includes('-')
										? 'mainErrorRed'
										: 'mainSucessGreen'
								}>
								{data.growth}%
							</Heading>
						</Box>
						<Box marginBottom='10px'>
							<Heading>{data.ammount}</Heading>
						</Box>
						<Box fontSize='12px' className='viewMoreBtn'>
							<Link to={data.link}>View More</Link>
						</Box>
					</Box>
				);
			})}
		</Box>
	);
};

export default CardComponent;
