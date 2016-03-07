import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ReactDOM from 'react-dom';
import {convertFromRaw,
        convertToRaw,
        CompositeDecorator,
        ContentState,
        Editor,
        EditorState,
        Entity} from 'draft-js';
import style from './style.css';


export default class ProtonEditor extends Component {
  constructor(props) {
    super(props);
    const blocks = convertFromRaw(this.props.content);
    this.state = {editorState: EditorState.createWithContent(
                      ContentState.createFromBlockArray(blocks)
    )};

    this.onChange = (editorState) => this.setState({editorState});
  }
  render() {
    const {editorState} = this.state;
    return <Editor editorState={editorState} onChange={this.onChange} />;
  }
}
