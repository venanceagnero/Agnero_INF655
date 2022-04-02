import React from 'react';
import Card from '../Shared/Card';

export default function SearchTask({ search, setSearch }) {
    return ( <
        Card className = "card" > { ' ' } <
        form className = "inputForm "
        onSubmit = {
            (elmt) => elmt.preventDefault() } > { ' ' } <
        h5 className = "Title" > Searching task from task list < /h5>{' '} <
        div className = "inputField" > { ' ' } <
        input className = "searchform "
        id = "search"
        type = "text"
        role = "searchbox"
        placeholder = "search task"
        onChange = {
            (elmt) => setSearch(elmt.target.value) }
        />{' '} <
        /div>{' '} <
        /form>{' '} <
        /Card>
    );
}