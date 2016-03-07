import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {Typeahead, Tokenizer} from 'react-typeahead';
import style from './style.css';

function extractMail(mail) {
  var EmailRegex = /(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/gi;
  //"""
  return EmailRegex.exec(mail)[0];
}
var emailsList = [
     {label: 'andy', value:'andy@protonmail.com'},
     {label: 'jason', value:'<jason@protonmail.com>'},
     {label: 'richard', value:'richard <richard@protonmail.com>'},
     {label: 'nick', value:'nick@protonmail.com'},
     {label: 'nicole', value:'nicole@protonmail.com--'},
     {label: 'charlie', value:'charlie@protonmail.com'},
     {label: 'tango', value:'tango@protonmail.com'}
 ].map(function(mail) {
    mail.cleanedMail = extractMail(mail.value);
    return mail;
 });



export default class AutocompleteField extends Component {
  constructor() {
    super()
    this.state = { badges: [] };
  }

  // TODO: This part should be handled by flux actions. Validation of emails inputs is clumsy with local state.
  render() {
    return (
      <div className={style.autocomplete}>
        <span className="span-autocomplete">to </span>
          <Tokenizer
            className={style.typeahead}
            options={emailsList}
            onTokenAdd={function(token) {
              console.log('token added: ', token);
            }}
            allowCustomValues={1}
            displayOption={function(option) {
              if(option.label) {
                return option.label + ' <' + option.cleanedMail + '>';
              } else {
                return option;
              }

            }}
            filterOption='cleanedMail'
          />

      </div>
    );
  }
}
