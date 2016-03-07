import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {Typeahead, Tokenizer} from 'react-typeahead';
import style from './style.css';

function getEmails() {
  return [
      'andy@protonmail.com',
      'jason@protonmail.com',
      'richard@protonmail.com',
      'nick@protonmail.com',
      'nicole@protonmail.com',
      'charlie@protonmail.com',
      'tango@protonmail.com',
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
    super()
    this.state = { badges: [] };
  }

  select(value) {
    // TODO: This part should be handled by flux actions.
    console.log(this.state);
    var oldBadges = this.state.badges;
    var nextBadges = oldBadges.push(value);
    this.setState({badges: nextBadges});
  }

  render() {
    // this.state.badges.map(function(badge, index) {
    //   console.log("badge!!!!" + badge);
    //   console.log("index!!!!" + index);
    // });
    return (
      <div className={style.autocomplete}>
        <span>to:</span>
          <Tokenizer
            className={style.typeahead}
            options={getEmails()}
            onTokenAdd={function(token) {
              console.log('token added: ', token);
            }}
            allowCustomValues={1}
            displayOption={function(option, index) {
              return option;
            }}
          />

      </div>
    );
  }
}
