import { h, app } from "hyperapp";

fetch("/api/topics/hot.json")
  .then(res => {
    return res.json();
  })
  .then(re => {
    console.log(re);
  });

const state = {
  count: 0
};

const actions = {
 
};

const view = (state, actions) => (
  <div>
      <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>         
          <li></li>          
          <li></li>
          <li></li>         
          <li></li>          
          <li></li>
      </ul>
  </div>
);

app(state, actions, view, document.body);

import { h, app } from "hyperapp";

fetch("/api/topics/hot.json")
  .then(res => {
    return res.json();
  })
  .then(re => {
    console.log(re[2].title)
  });

const state = {
  count: 0
};

const actions = {
  down: value => state => ({ count: state.count - value }),
  up: value => state => ({ count: state.count + value })
};

const view = (state, actions) => (
  <div>
    <h1>{state.count}</h1>
    <button onclick={() => actions.down(1)}>-</button>
    <button onclick={() => actions.up(1)}>+</button>
  </div>
);

app(state, actions, view, document.body);
