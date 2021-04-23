import React from 'react';
import Loader from 'react-loader-spinner';
import styled from 'styled-components';
// import { themeColor } from '../utilis/constants';

const PageLoaderBlock = styled.div`
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	width: 100%;
	top: 0;
	left: 0;
	svg {
		height: 40px !important;
		width: 40px !important;
	}
`;

export const PageLoader = () => (
	<PageLoaderBlock>
		<Loader type='TailSpin' color={'#000'} width='40' height='40' />
	</PageLoaderBlock>
);