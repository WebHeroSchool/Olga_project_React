import React from 'react';

const ItemList = () => (<ul>
  <li>play with me</li>
  <li>feed me</li>
</ul>);

const App = () => (<div>
  <h1 style={{
    color: 'crimson'
    }}>Hello, Olga!
  </h1>
  <ItemList />
</div>);

export default App;
