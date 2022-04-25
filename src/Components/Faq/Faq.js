import React from 'react';
import "./Faq.css"

const Faq = () => {
    return (
        <div className='faq-container'>
            <h1>Frequently Asked Questions</h1>
            <div className='questions'>
                <div className="faq">
                    <h2 className='question'>How React Works?</h2>
                    <p className="answer">React is a JavaScript-based UI development library.  We can write HTML code in js. React create a virtual DOM. When data is changed or removed, react compare the data with virtual DOM. Then react pass the updated data to the browser DOM. Then the user can see the result in UI.</p>
                </div>

                <div className="faq">
                    <h2 className='question'>What is the difference between Props and State?</h2>
                    <p className="answer"><strong>State : </strong>
                        is an updatable structure that is used to contain data or information about the component and can change over time. The change in state can happen as a response to user action or system event. <br />
                        <strong>Props : </strong>
                        are read-only components. It is an object which stores the value of attributes of a tag and work similar to the HTML attributes. Props are immutable so we cannot modify the props from inside the component.
                    </p>
                </div>

                <div className="faq">
                    <h2 className='question'>How does useState Works?</h2>
                    <p className="answer">useState is a hook of React. It allows you to have state variables in functional components. You can pass an initial value to the function. It will give you the result by doing some functional work. </p>
                </div>
            </div>
        </div>
    );
};

export default Faq;