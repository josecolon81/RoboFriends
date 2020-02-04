import React from 'react';

const Card = (props) => {
    // props here is the parameter
    return (
        <div className= 'tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img src={`https://robohash.org/test${props.id}?200x200`} alt="robots"/>
            <div>
                <h2>{props.name}</h2>
                <p>{props.email}</p>
            </div>
        </div>
    );
}
// note props.name(javascript expressions) must have brackets just like JSX.
export default Card;

// note that we can replace Card = (props) with ({id, name, email}) erase every single props. This is called destructuring and it will make code cleaner