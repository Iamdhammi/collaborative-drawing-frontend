import React from 'react';
import { Route } from 'react-router-dom';

type PageRouteProps = {
	component: any;
	layout: any;
	path: string;
	exact: boolean
}

const PageRoute = ({ component: Component, layout: Layout, ...rest }: PageRouteProps) => {
	return (
		<Route
			{...rest}
			render={(props) => {
                return (
                    <Layout>
                        <Component {...props} />
                    </Layout>
                );
			}}
		/>
	);
};

export default PageRoute;
