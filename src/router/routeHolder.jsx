import React, { useState, lazy, Suspense, useRef } from 'react';
import { Provider } from 'react-redux';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	useLocation,
} from 'react-router-dom';
import HashLoader from 'react-spinners/HashLoader';
import Store from '../store/store';
import GlobalCss from '../modules/global/css';
import { Center, Container } from '@chakra-ui/react';
import DetectOffline from '../modules/global/components/ofline';
import Layout from '../modules/global/components/layout';
import Rootpage from '../modules/authentication/rootpage';
import PortalForLayout from '../modules/global/components/PortalForLayout';
import StrictRoute from './strictRoute';
import Form from '../modules/form';
import DataTable from '../modules/DataTable';
const Dashboard = lazy(() => import('../modules/dashboard/components'));

const AllRoutes = () => {
	const locate = useLocation();
	const [globalStaticFragmennt, setGlobalStaticFragmennt] = useState(
		() => true
	);

	const commonPortalRef = useRef();

	return (
		<>
			{globalStaticFragmennt ? <Layout portalId={commonPortalRef} /> : ''}
			<Suspense
				fallback={
					<Center h='100vh'>
						<HashLoader
							color='#105380'
							size={20}
							speedMultiplier={1}
						/>
					</Center>
				}>
				<Routes location={locate} key={locate.key}>
					<Route
						path='/'
						key={1}
						element={
							<StrictRoute redirectTo='/dashboard'>
								<PortalForLayout
									globalLayout={globalStaticFragmennt}
									portalId={commonPortalRef}>
									<Rootpage
										globalLayout={setGlobalStaticFragmennt}
									/>
								</PortalForLayout>
							</StrictRoute>
						}
					/>
					<Route
						path='/dashboard'
						element={
							<PortalForLayout
								globalLayout={globalStaticFragmennt}
								portalId={commonPortalRef}>
								<Dashboard
									globalLayout={setGlobalStaticFragmennt}
								/>
							</PortalForLayout>
						}
					/>
					<Route
						path='/demo-one'
						element={
							<PortalForLayout
								globalLayout={globalStaticFragmennt}
								portalId={commonPortalRef}>
								<Form globalLayout={setGlobalStaticFragmennt} />
							</PortalForLayout>
						}
					/>
					<Route
						path='/demo-two'
						element={
							<PortalForLayout
								globalLayout={globalStaticFragmennt}
								portalId={commonPortalRef}>
								<DataTable
									globalLayout={setGlobalStaticFragmennt}
								/>
							</PortalForLayout>
						}
					/>
				</Routes>
			</Suspense>
		</>
	);
};

const RouteHolder = () => {
	return (
		<Provider store={Store}>
			<GlobalCss />
			<Container
				display='flex'
				flexDirection='row'
				justifyContent='center'
				className='wrapper'
				p={0}
				maxW='100vw'
				minH='100vh'
				color='grey.100'>
				<DetectOffline showOverlay={false} showToast />
				<Router>
					<AllRoutes />
				</Router>
			</Container>
		</Provider>
	);
};

export default RouteHolder;
