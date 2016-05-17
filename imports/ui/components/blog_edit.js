import React from 'react';
import ReactDOM from 'react-dom';

import { Link } from 'react-router';
import { Row, Col, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import { blogValidate } from '../../modules/blogModules';

export class BlogEdit extends React.Component {
  componentDidMount() {
    blogValidate({ component: this });
    if(this.props.blog)
      ReactDOM.findDOMNode(this.refs.blogTitle).value = this.props.blog.title;
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return <Row>
        <Col xs={ 12 } sm={ 6 } md={ 4 }>
          <form ref="blog" className="blog" onSubmit={ this.handleSubmit }>
            <FormGroup>
              <ControlLabel>Blog Title</ControlLabel>
              <FormControl
                type="text"
                ref="blogTitle"
                name="blogTitle"
                placeholder="type the title of the blog here..."
              />
            </FormGroup>
            <Button type="submit" bsStyle="success">Submit</Button>
          </form>
        </Col>
      </Row>;
  }
}


BlogEdit.propTypes = {
  blog: React.PropTypes.object
};
