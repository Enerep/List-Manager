import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


// Vajno
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



function PeopleLi(props){
    const arr = props.data;
    const listItems = arr.map((val, index) => <li key={index}> {val} </li>);
    return (<ul> {listItems} </ul>);
}

function Form(props){
    const [ person, setPerson ] = useState("");
    
    function handleChange(e){
        setPerson(e.target.value);
    }
    
    function handleSubmit(e){
        props.submit(person);
        setPerson("");
        e.preventDefault();
    }
    return (
            <form onSubmit = {handleSubmit}>
            <input type="text" placeholder="Add New Item" onChange = {handleChange} value={person} required />
                <button type="submit"> Add </button>
            </form>);
}

function ContactManager(props){
    const [contacts, setContacts] = useState(props.data);
    
    function addPerson(name) {
        setContacts([...contacts,name]);
    }
    
    return (
            <div>
            <Form submit={addPerson}/>
            <PeopleLi data = {contacts} />
            </div>
            );
}

const contacts = ["Bat-Ochir", "Learn R"];
const css = ".my-p{ font-size: 4.5vmax; margin: 7vh;} div{font-size: 2.4vmax;} input { width: 45% ; padding: 10px 0px 10px 10px; margin: 55px 0px 50px 60px;} button{padding:1vh; padding: 10px 0px 10px 10px; width: 50px;} li {list-style-type:none; padding: 10px; margin: 20px; margin-right:50px; text-align: center; background-color:rgba(161,10,175,0.411); border-radius: 10px;}";

const el = (<div>
            <p class="my-p"> <style> {css} </style>
            This is appending items using React
            </p>
            <ContactManager data = {contacts} />
            </div>);

root.render(el, document.getElementById('root'));


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
