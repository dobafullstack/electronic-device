import React from 'react'
import { Link } from 'react-router-dom'

interface BreadcrumbProps {
    prev: string,
    current: string,
}

function Breadcrumb({ prev, current }: BreadcrumbProps) {
    return (
        <div className="breadcrumb-area bg-gray">
            <div className="container">
                <div className="breadcrumb-content text-center">
                    <ul>
                        <li>
                            <Link to={`/`}>{prev}</Link>
                        </li>
                        <li className="active">{current}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Breadcrumb
