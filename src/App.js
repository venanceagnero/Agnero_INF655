import './App.css';

function App() {
    const myName = 'Tony';
    const toDoList = [{
            id: 1,
            className: 'random',
            title: 'Preparation',
            description: 'Prepare for the game',
            location: 'Play field',
        },

        {
            id: 2,
            className: 'random',
            title: 'Planning',
            desciption: 'Plan the trip',
            location: 'Main lobby',
        },

        {
            id: 3,
            className: 'random',
            title: 'Informing',
            description: 'Inform family and friends',
            location: 'Anywhere',
        },
    ];

    const tasktitle = () => {
        const Tle = Math.floor(Math.random() * 3);
        return toDoList[Tle].title;
    };

    return ( <
        div className = "App" >
        <
        h2 > Tasks < /h2>{' '} <
        p > { ' ' } <
        em > { ' ' }
        Hello < b > { myName } < /b>, please your task of <b> {tasktitle()} </b >
        needs to be started!
        <
        /em>{' '} <
        /p>{' '} <
        /div>
    );
}

export default App;