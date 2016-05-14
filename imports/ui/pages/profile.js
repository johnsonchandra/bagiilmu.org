import React from 'react';
import { Jumbotron } from 'react-bootstrap';

export const Profile = () => (
  <Jumbotron className="text-center">
    <h2>Profile User</h2>
    <p>Education for Everyone</p>
    <p><a className="btn btn-success" href="/blog" role="button">Read the Blog</a></p>
    <p style={ { fontSize: '16px', color: '#aaa' } }>Currently at Alpha.20160514</p>
  </Jumbotron>
);
