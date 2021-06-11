import React, {useState} from 'react';

const Home = () => {
    const [showResults, setShowResults] = useState(true);
    const onClick1 = () => setShowResults(true)
    const onClick2 = () => setShowResults(false)
    
    return (
        <div>
        { showResults ? <div class="alert alert-dark" role="alert">
            This is a dark alert—check it out!
        </div> : null }

    <button className="btn btn-secondary btn-sm" onClick={onClick1}>Pokaz</button>
    <button className="btn btn-secondary btn-sm" onClick={onClick2}>Ukryj</button>
    </div>
    
    )
};

export default Home;