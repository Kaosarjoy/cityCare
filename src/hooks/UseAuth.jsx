import React, { use } from 'react';
import { AuthContexts } from '../Content/AuthContexts';


const useAuth = () => {
    const authInformation =use(AuthContexts)
    return authInformation;
};

export default useAuth;