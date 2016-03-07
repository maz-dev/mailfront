import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {Typeahead, Tokenizer} from 'react-typeahead';
import style from './style.css';

var emailsList = [
     {label: 'andy', value:'andy@protonmail.com'},
     {label: 'jason', value:'jason@protonmail.com'},
     {label: 'richard', value:'richard@protonmail.com'},
     {label: 'nick', value:'nick@protonmail.com'},
     {label: 'nicole', value:'nicole@protonmail.com'},
     {label: 'charlie', value:'charlie@protonmail.com'},
     {label: 'tango', value:'tango@protonmail.com'}
 ];


function extractMail(mail) {
  var EmailRegex = /(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/gi;
  //"""
  return EmailRegex.exec(mail)[0];
}
export default class AutocompleteField extends Component {
  constructor() {
    super()
    this.state = { badges: [] };
  }

  // TODO: This part should be handled by flux actions.
  render() {
    return (
      <div className={style.autocomplete}>
        <span className="span-autocomplete">to </span>
          <Tokenizer
            className={style.typeahead}
            options={emailsList}
            onTokenAdd={function(token) {
              emailList.push({label: "", value: token});
              console.log('token added: ', token);
            }}
            allowCustomValues={1}
            displayOption={function(option) {
              if(option.label) {
                return option.label + ' <' + option.value + '>';
              } else {
                return option;
              }

            }}
            filterOption={function(options) {
              return {label: "", value: options};
            }}
          />

      </div>
    );
  }
}
