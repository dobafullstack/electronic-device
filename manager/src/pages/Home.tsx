import React from 'react'
import { RouteProps, useLocation, useParams } from 'react-router-dom'

interface Props {
    match: any;
    animate: boolean;
}

export function Home() {
    const location = useLocation()
    const params = useParams()
    console.log({
        location,
        params
    })
    return <div>
        test
    </div>;
}
