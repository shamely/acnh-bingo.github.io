import React from 'react';
import { useSearchParams } from 'react-router-dom';

export const withRouter = WrappedComponent => props => {
    let [searchParams, setSearchParams] = useSearchParams()
    
    return(
        <WrappedComponent {...props} searchParams={searchParams} setSearchParams={setSearchParams} />
    )
}