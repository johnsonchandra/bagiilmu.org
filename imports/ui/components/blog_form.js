import React from 'react';
import { Link } from 'react-router';
import { Row, Col, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import { handleBlog } from '../../modules/handleBlog';

export class BlogForm extends React.Component {
  componentDidMount() {
    handleBlog({ component: this });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return <Row>
        <Col xs={ 12 } sm={ 6 } md={ 4 }>
          <h4 className="page-header">Create new Blog</h4>
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
            <FormGroup>
              <ControlLabel>Blog Article</ControlLabel>
              <FormControl
                componentClass="textarea"
                ref="blogArticle"
                name="blogArticle"
                placeholder="type your article here..."
              />
            </FormGroup>
            <Button type="submit" bsStyle="success">Submit</Button>
          </form>
        </Col>
      </Row>;
  }
}
