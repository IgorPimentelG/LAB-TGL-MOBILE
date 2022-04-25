import React, { useEffect } from 'react';
import { useAuth } from '@hooks/useAuth';
import { RootState } from '@store/index';
import { useSelector } from 'react-redux';
import { PublicRoutes } from './public.routes';
import { PrivateRoutes } from './private.routes';

const Routes = () => {

    const { verifyToken } = useAuth();
    const isAuthenticated = useSelector<RootState>((state) => state.auth.isAuthenticated);

    useEffect(() => {
        verifyToken();
    });

    return(
        <React.Fragment>
            {!isAuthenticated && <PublicRoutes/>}
            {isAuthenticated && <PrivateRoutes/>}
       </React.Fragment>
    );
}

export default Routes;