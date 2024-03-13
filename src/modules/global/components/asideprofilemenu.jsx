// import { Box } from '@chakra-ui/react';
// import React from 'react';
// import { useSelector } from 'react-redux';

// const AsideProfileMenu = () => {
// 	const globalState = useSelector(
// 		(state) => state?.theme || { darkMode: false }
// 	);
// 	const isDarkMode = globalState?.darkMode || false;
// 	return (
// 		<Box color={isDarkMode ? 'white' : 'mainBlue'}>AsideProfileMenu</Box>
// 	);
// };

// export default AsideProfileMenu;

import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
	Wrap,
	WrapItem,
	Text,
	Box,
	Avatar,
	Popover,
	PopoverTrigger,
	PopoverContent,
	PopoverBody,
	Button,
	useDisclosure,
	Link as Anchor,
} from '@chakra-ui/react';
import imgSrc from '../../../asset/images/admin-profile-image.jpg';

const CssWrapper = styled.div`
	.nav-collapse .bottom-menu {
		visibility: hidden;
		display: none;
	}
	.logout_pop ul {
		display: block;
	}
	.logout_pop li {
		height: 38px;
		line-height: 38px;
		display: block;
	}
	.logout_pop li a {
		padding: 0 18px;
		font-size: 1.3rem;
		color: ${(props) =>
			props.color === 'true'
				? 'white !important'
				: 'var(--chakra-colors-menuElipseDropdownFontColor) !important'};
		font-weight: 600;
		display: block;
	}
	.logout_pop li:hover a {
		background: ${(props) =>
			props.color === 'true'
				? 'var(--chakra-colors-darkModeBoxBackgroundColor)'
				: 'var(--chakra-colors-lfgBlueGreyColor)'};
	}
	.logout_pop li:hover a {
		color: var(--chakra-colors-lfgMainBlue);
		text-decoration: none;
	}
	.nav-collapse li.nav-item a[aria-current='page'] {
		border-radius: 0px 8px 8px 0px;
	}
`;

const AsideProfileMenu = () => {
	const { isOpen, onToggle, onClose } = useDisclosure();
	const globalState = useSelector(
		(state) => state?.theme || { darkMode: false }
	);
	const isDarkMode = globalState?.darkMode || false;

	return (
		<CssWrapper color={isDarkMode.toString()}>
			<Popover
				placement='top-start'
				closeOnBlur
				isOpen={isOpen}
				onClose={onClose}>
				<PopoverTrigger>
					<Button
						bg='transparent'
						_hover={{ outline: 'none' }}
						_focus={{ outline: 'none' }}
						_active={{
							outline: 'none',
							bg: 'none',
						}}
						p='0'
						sx={{
							'& > *': {
								textTransform: 'capitalize',
								textAlign: 'left',
							},
						}}
						onClick={onToggle}>
						<Box
							display='flex'
							flex-direction='row'
							alignItems='center'
							alignSelf='flex-end'>
							<Box>
								<Avatar
									name='Srijan Das'
									src={imgSrc}
									alignSelf='center'
									borderRadius='100%'
									w={{ base: '35px', lg: '45px' }}
									h={{ base: '35px', lg: '45px' }}
									border='5px solid'
									borderColor='profileImageStrokeColor'
									transition='all 0.2s ease-in-out'
									_hover={{
										border: '2px solid',
										borderColor: 'profileImageStrokeColor',
									}}
									color='profileImageStrokeColor'
									fontWeight='600'
								/>
							</Box>
							<Box
								display={{ base: 'none', md: 'block' }}
								as='span'
								fontSize='1.6rem'
								p='10px'
								lineHeight='1.3rem'
								className='bottom-menu'
								pos='absolute'
								left='45px'
								w='200px'
								opacity='1'
								transition='opacity 0.4s ease'
								title='Srijan Das'>
								<Text
									as='strong'
									display='block'
									color={isDarkMode ? 'white' : 'MainBlue'}
									fontWeight='700'
									fontSize='1.5rem'
									lineHeight='1.3rem'
									white-space='nowrap'
									width='160px'
									height='15px'
									overflow='hidden'
									textOverflow='ellipsis'>
									Srijan Das
								</Text>
								<Text
									as='span'
									color={
										!isDarkMode
											? 'veryDarkBlueColor'
											: 'white'
									}
									fontSize='1rem'
									lineHeight='1.3rem'
									textTransform='capitalize'
									fontWeight='400'>
									Vitwo Administrator
								</Text>
							</Box>
						</Box>
					</Button>
				</PopoverTrigger>
				<PopoverContent
					bg={
						isDarkMode
							? 'var(--chakra-colors-mainDarkModeBackgroundColor)'
							: 'white'
					}
					border={`1px solid ${
						isDarkMode
							? 'var(--chakra-colors-mainDarkModeLightBackgroundColor) !important'
							: 'var(--chakra-colors-topFilterSecBorderColor) !important'
					}`}
					borderRadius='5px'
					_focus={{ outline: 'none' }}>
					<PopoverBody p='0'>
						<Wrap
							className='logout_pop'
							flexDirection='column'
							display='block'
							sx={{
								'& > li > a': {
									padding: '0 18px',
									fontSize: '1.3rem',
									display: 'block',
									color: 'menuElipseDropdownFontColor',
									fontWeight: '600',
								},
								'& > li:hover > a': {
									bg: 'profileMenuHoverColor',
									textDecoration: 'none',
									color: 'lfgMainBlue',
								},
							}}>
							<WrapItem
								height='38px'
								lineHeight='3.8rem'
								display='block'>
								<Link to='/profile'>Profile</Link>
							</WrapItem>
							<WrapItem
								height='38px'
								lineHeight='3.8rem'
								display='block'>
								<Link to='/'>Manage Notification</Link>
							</WrapItem>
							<WrapItem
								height='38px'
								lineHeight='3.8rem'
								display='block'>
								<Anchor>Logout</Anchor>
							</WrapItem>
						</Wrap>
					</PopoverBody>
				</PopoverContent>
			</Popover>
		</CssWrapper>
	);
};

export default AsideProfileMenu;
