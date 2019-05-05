import xs from 'xstream';
import { run } from '@cycle/run';
import { makeDOMDriver, div, input, p, h1 } from '@cycle/dom';

function toggle(sources) {
  const sinks = {
    DOM: sources.DOM.select('input')
      .events('click')
      .map(ev => ev.target.checked)
      .startWith(false)
      .map(toggled =>
        div([
          input({ attrs: { type: 'checkbox' } }),
          'Toogle me',
          p(toggled ? 'ON' : 'off')
        ])
      )
  };
  return sinks;
}

function counter() {
  const sinks = {
    DOM: xs.periodic(1000).map(i => h1(`${i} seconds elapsed`))
  };
  return sinks;
}

const drivers = {
  DOM: makeDOMDriver('#app')
};

run(counter, drivers);
// run(toggle, drivers);
