import React from 'react';
import { useParams } from 'react-router-dom';
import Card from '../Shared/Card';

export default function Users() {
    const params = useParams();
    return ( <
        Card >
        <
        p > { ' ' }
        Hello { params.name }
        welcome to task manager your ID is { params.id } { ' ' } <
        /p>{' '} <
        /Card>
    );
}