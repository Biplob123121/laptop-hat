import React from 'react';
import './Faq.css'

const Faq = () => {
    return (
        <div className='faq-container'>
            <h2 style={{textAlign : 'center'}}>KEY QUESTION : </h2>
            <div className='faqs'>
                <div className='faq'>
                    <h3>How React Works?</h3>
                    <p>React is a javascript library. It creates user interfaces in a predictable and efficient way using declarative code. It helps to create folder structure and indivisual components. It creates virtual dom and user interface in difference. When we change a small part of your website then it makes change in virtual dom and find out the appropriate node of user interface and make the secific change of the target node. So that, we get a better performane of our Website.</p>
                </div>
                <div className='faq'>
                    <h3>Difference Between Props and State?</h3>
                    <p>State : State is defined as components or website layout. When a viewer visits a website, he can change the state or not.
                    </p>
                    <p>Props : When we send a state with various components or function parent to child then it is called Props. Props makes easier to send state from parent to child.</p>
                </div>
                <div className='faq'>
                    <h3>How useState Works?</h3>
                    <p>State is a plain Javascript objects used by React to represent an information about the component's current situation.We can consider that raw data is made out of state objects and translate raw data into Html. So that, it can be said that state converts the javascript raw data into HTML and make a component.</p>
                </div>
            </div>
        </div>
    );
};

export default Faq;