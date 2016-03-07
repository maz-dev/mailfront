import React, { Component } from 'react';
import Autocomplete from '../autocomplete';
import Editor from '../ProtonEditor';

import style from './style.css';

export default class EditorBox extends Component {
  render() {
    return(
      <div className={style.editorbox}>
        <Autocomplete />
        <Editor content={this.props.content}/>
      </div>
    );
  }
}
