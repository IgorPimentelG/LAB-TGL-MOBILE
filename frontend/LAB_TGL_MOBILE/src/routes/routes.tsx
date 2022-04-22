import React from 'react';
import { RootState } from '@store/index';
import { useSelector } from 'react-redux';
import { PublicRoutes } from './public.routes';
import { PrivateRoutes } from './private.routes';

const Routes = () => {

    const isAuthenticated = useSelector<RootState>((state) => state.auth.isAuthenticated);

    return(
        <React.Fragment>
            {!isAuthenticated && <PublicRoutes/>}
            {isAuthenticated && <PrivateRoutes/>}
       </React.Fragment>
    );
}

export default Routes;