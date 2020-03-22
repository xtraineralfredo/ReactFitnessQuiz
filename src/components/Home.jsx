import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

function Home({ history }) {

    return(
        <div>
            <h1>Home Page</h1>
            <Link to='/fitnessQuiz'>go to quiz</Link>
            <br/>
            <button className='btn btn-primary' onClick={() => { history.push('/fitnessQuiz') }}>Button to Quiz</button>
        </div>
    );
}

export default Home;