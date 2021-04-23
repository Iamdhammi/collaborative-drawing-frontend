import React, { lazy, Suspense } from 'react';
import { PageLoader } from '../components/Loader';
import {BrowserRouter as Router, Switch } from 'react-router-dom';
import PageRoute from './route.routes';
import HomePageLayout from '../layout/HomePage.layout';

const Home = lazy(() => import('../pages/Home'));

const Routes: React.FC = () => {
    return (
        <Router>
            <Suspense fallback={ <PageLoader /> }>
                <Switch>
                    <PageRoute exact={true} path="/" component={Home} layout={HomePageLayout} />
                </Switch>
            </Suspense>
        </Router>
    )
}

export default Routes;