import React, { useState } from 'react';
import Album from './Album';
import Comment from './Comment';
import Photos from './Photos';
import Post from './Post';
import Todos from './Todos';
import User from './User';

function JsonPlaceHolder() {
  const [flag, setFlag] = useState('')
  // console.log(flag);

  return (
    <>
      <center>
        <h1>Fetch API from jsonplaceholder:-</h1>

        <button className='btn btn-primary m-2' onClick={() => setFlag('post')}>Post</button>
        <button className='btn btn-success m-2' onClick={() => setFlag('comment')}>Comment</button>
        <button className='btn btn-warning m-2' onClick={() => setFlag('album')}>Album</button>
        <button className='btn btn-danger m-2' onClick={() => setFlag('photos')}>Photos</button>
        <button className='btn btn-secondary m-2' onClick={() => setFlag('todos')}>Todos</button>
        <button className='btn btn-success m-2' onClick={() => setFlag('user')}>User</button>
        <button className='btn btn-dark m-2' onClick={() => setFlag('')}>Clear</button>
      </center>

      {flag === 'comment' ? <Comment /> : ''}
      {flag === 'post' ? <Post /> : ''}
      {flag === 'album' ? <Album /> : ''}
      {flag === 'photos' ? <Photos /> : ''}
      {flag === 'todos' ? <Todos /> : ''}
      {flag === 'user' ? <User /> : ''}

    </>
  )
}

export default JsonPlaceHolder;
