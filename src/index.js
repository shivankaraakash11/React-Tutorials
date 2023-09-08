// Import Area

// import default import,{named import} from 'somelibrary';
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';



// let's create our first component

function myFun(){
 const x=10; // store data in variable. this is normal js function
}

// 1.RFC 
function MyComponent(){   // Always use PascalCase for component name
  // 1. state/variable ( state is nothing but a variable.)
    const [salary, setsalary] = useState(2000)  // hooks variable

  // 2. Function / Method
  let incr =()=>{  // inner function
    setsalary(salary + 1000)
  }

  // 3. Return Statement
  return (
        <div>
          <button onClick={()=>{incr();}}>Increment</button>
          <h2>My salary is {salary}</h2>
        </div>
        )
}              


const root = ReactDOM.createRoot(document.getElementById('root2'));
root.render(
  <React.StrictMode>
    <h1>Hello <MyComponent /></h1>
  </React.StrictMode>
);

