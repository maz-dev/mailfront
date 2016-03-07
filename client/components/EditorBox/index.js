import React, { Component } from 'react';
import AutocompleteField from '../AutocompleteField';
import Editor from '../ProtonEditor';

import style from './style.css';

export default class EditorBox extends Component {
  render() {
    return(
      <div className="editorbox">
        <AutocompleteField />
        <Editor content={this.props.content}/>
      </div>
    );
  }
}
