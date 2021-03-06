import React from 'react';
import ReactDOM from 'react-dom';

import { Link } from 'react-router';
import { FormGroup, FormControl, ButtonGroup, Button } from 'react-bootstrap';
import { blogValidate } from '../../../modules/blog/blog_modules';

import { Editor, EditorState, RichUtils, convertToRaw, convertFromRaw } from 'draft-js';

export class BlogForm extends React.Component {
  constructor(props) {
    super(props);
    if(this.props.blog){
      this.state = {
        editorState: EditorState.createWithContent(convertFromRaw(JSON.parse(this.props.blog.article))),
        status: this.props.blog.status,
      };
    }else{
      this.state = {
        editorState: EditorState.createEmpty(),
        status: 'Draft',
      };
    };

    this.focus = () => this.refs.editor.focus();
    this.onChange = (editorState) => this.setState({editorState});

    this.handleKeyCommand = (command) => this._handleKeyCommand(command);
    this.toggleBlockType = (type) => this._toggleBlockType(type);
    this.toggleInlineStyle = (style) => this._toggleInlineStyle(style);

    this.saveBlog = () => ReactDOM.findDOMNode(this.refs.blog).dispatchEvent(new Event('submit'));

    this._onStatusChange = (status) => {
      this.state.status = status;
      this.focus();
    };
  }

  _handleKeyCommand(command) {
    const {editorState} = this.state;
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      this.onChange(newState);
      return true;
    }
    return false;
  }

  _toggleBlockType(blockType) {
    this.onChange(
      RichUtils.toggleBlockType(
        this.state.editorState,
        blockType
      )
    );
  }

  _toggleInlineStyle(inlineStyle) {
    this.onChange(
      RichUtils.toggleInlineStyle(
        this.state.editorState,
        inlineStyle
      )
    );
  }

  componentDidMount() {
    blogValidate({ component: this });
    if(this.props.blog)
      ReactDOM.findDOMNode(this.refs.blogTitle).value = this.props.blog.title;
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    
    const {editorState} = this.state;
    // If the user changes block type before entering any text, we can
    // either style the placeholder or hide it. Let's just hide it now.
    let className = 'RichEditor-editor';
    var contentState = editorState.getCurrentContent();
    
    if (!contentState.hasText()) {
      if (contentState.getBlockMap().first().getType() !== 'unstyled') {
        className += ' RichEditor-hidePlaceholder';
      }
    }

    return (
      <div>
        <form ref="blog" name="blog" className="blog" onSubmit={ this.handleSubmit }>
          <FormGroup>
            <FormControl
              type="text"
              ref="blogTitle"
              name="blogTitle"
              placeholder="type the title of the blog here..."
            />
          </FormGroup>
        </form>

        <hr/>

        <div className="RichEditor-root">
          <BlockStyleControls
            editorState={editorState}
            onToggle={this.toggleBlockType}
          />
          <InlineStyleControls
            editorState={editorState}
            onToggle={this.toggleInlineStyle}
          />
          <div className={className} onClick={this.focus}>
            <Editor
              blockStyleFn={getBlockStyle}
              customStyleMap={styleMap}
              editorState={editorState}
              handleKeyCommand={this.handleKeyCommand}
              onChange={this.onChange}
              ref="editor"
              spellCheck={true}
            />
          </div>
        </div>

        <hr/>
        
        <ButtonGroup>
          <Button onClick={this._onStatusChange.bind(this, 'Draft')} active={this.state.status === 'Draft'}>Draft</Button>
          <Button onClick={this._onStatusChange.bind(this, 'Active')} active={this.state.status === 'Active'}>Active</Button>
          <Button onClick={this._onStatusChange.bind(this, 'Expired')} active={this.state.status === 'Expired'}>Expired</Button>
        </ButtonGroup>

        <br/>

        <Button ref="saveBlog" name="saveBlog" bsStyle="success" onClick={ this.saveBlog }>Save Blog</Button>

        <br/>
        <br/>
        <br/>
      </div>
    );
  }
}

// Custom overrides for "code" style.
const styleMap = {
  CODE: {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
    fontSize: 16,
    padding: 2,
  },
};

function getBlockStyle(block) {
  switch (block.getType()) {
    case 'blockquote': return 'RichEditor-blockquote';
    default: return null;
  }
}


class StyleButton extends React.Component {
  constructor() {
    super();
    this.onToggle = (e) => {
      e.preventDefault();
      this.props.onToggle(this.props.style);
    };
  }

  render() {
    let className = 'RichEditor-styleButton';
    if (this.props.active) {
      className += ' RichEditor-activeButton';
    }

    return (
      <span className={className} onMouseDown={this.onToggle}>
        {this.props.label}
      </span>
    );
  }
}

const BLOCK_TYPES = [
  {label: 'H1', style: 'header-one'},
  {label: 'H2', style: 'header-two'},
  {label: 'H3', style: 'header-three'},
  {label: 'H4', style: 'header-four'},
  {label: 'H5', style: 'header-five'},
  {label: 'H6', style: 'header-six'},
  {label: 'Blockquote', style: 'blockquote'},
  {label: 'UL', style: 'unordered-list-item'},
  {label: 'OL', style: 'ordered-list-item'},
  {label: 'Code Block', style: 'code-block'},
];


const BlockStyleControls = (props) => {
  const {editorState} = props;
  const selection = editorState.getSelection();
  const blockType = editorState
    .getCurrentContent()
    .getBlockForKey(selection.getStartKey())
    .getType();

  return (
    <div className="RichEditor-controls">
      {BLOCK_TYPES.map((type) =>
        <StyleButton
          key={type.label}
          active={type.style === blockType}
          label={type.label}
          onToggle={props.onToggle}
          style={type.style}
        />
      )}
    </div>
  );
};

var INLINE_STYLES = [
  {label: 'Bold', style: 'BOLD'},
  {label: 'Italic', style: 'ITALIC'},
  {label: 'Underline', style: 'UNDERLINE'},
  {label: 'Monospace', style: 'CODE'},
];

const InlineStyleControls = (props) => {
  var currentStyle = props.editorState.getCurrentInlineStyle();
  return (
    <div className="RichEditor-controls">
      {INLINE_STYLES.map(type =>
        <StyleButton
          key={type.label}
          active={currentStyle.has(type.style)}
          label={type.label}
          onToggle={props.onToggle}
          style={type.style}
        />
      )}
    </div>
  );
};



BlogForm.propTypes = {
  blog: React.PropTypes.object
};
