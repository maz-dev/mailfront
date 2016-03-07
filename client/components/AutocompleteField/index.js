import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Autocomplete from 'react-autocomplete';

import style from './style.css';

function matchStateToTerm (email, value) {
  return (
    email.value.toLowerCase().indexOf(value.toLowerCase()) !== -1 ||
    email.label.toLowerCase().indexOf(value.toLowerCase()) !== -1
  );
}

function sortStates (a, b, value) {
  return (
    a.value.toLowerCase().indexOf(value.toLowerCase()) >
    b.value.toLowerCase().indexOf(value.toLowerCase()) ? 1 : -1
  );
}

function getEmails() {
  return [
      {label: 'Andy', value: 'andy@protonmail.com'},
      {label: 'Jason', value: 'jason@protonmail.com'},
      {label: 'Richard', value: 'richard@protonmail.com'}
  ];
}

let styles = {
  item: {
    padding: '6px 10px',
    cursor: 'default'
  },

  highlightedItem: {
    color: 'white',
    background: 'hsl(200, 50%, 50%)',
    padding: '6px 10px',
    cursor: 'default'
  },

  menu: {
    border: 'solid 1px #ccc'
  }
};
export default class AutocompleteField extends Component {
  constructor() {
  }
  select(value) {
    console.log(this.state);
    var oldState = this.state.badges;
    var nextState = oldState.push(value);
    this.setState({badges: nextstate});
    console.log(this.state.badges);
  }
  render() {
    return (
      <div className={style.autocomplete}>
        <span>to:</span>
          <Autocomplete
          initialValue=""
          items={getEmails()}
          getItemValue={(item) => item.value}
          shouldItemRender={matchStateToTerm}
          sortItems={sortStates}
          onSelect={this.select}
          renderItem={(item, isHighlighted) => (
            <div
              style={isHighlighted ? styles.highlightedItem : styles.item}
              key={item.label}
            >{item.value}</div>
          )}
        />
      </div>
    );
  }
}
