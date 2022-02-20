import React from 'react';
import ReactDOM from 'react-dom';


const name = "Jessica";

function Profile() {
   if (name) {
    return <main id="content" role="main" class="base">
            <h1>{name}'s React Page</h1>
              <p>I love to travel!</p>
            </main>
   }
   else {
     return <main id="content" role="main" class="base">
       <h1>Just a React Page</h1>
       <p>Nothing to see here!</p>
     </main>  
   }
};

Profile(name);

ReactDOM.render(Profile(),document.getElementById('root'));