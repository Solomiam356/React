import React, {useState} from 'react'

import MyButton from './UI/button/MyButton'
import MyInput from './UI/button/input/MyInput';

const PostForm = ({create}) => {
    const [post, setPost] = useState({title: '', body: ''});
    const addNewPost = (e) => {
  e.preventDefault();

const newPost = {
    ...post, id: Date.now()
}
create(newPost)
setPost({title: '', body: ''})
}
  return (
   <form>
        {/*Управляемий компонент*/ }
      <MyInput  value ={post.title} onChange={e => setPost({...post, title: e.target.value})} type="text" placeholder="post title"/>
        {/*Неуправляемий/Неконтролируемий компонент*/ }
     <MyInput value ={post.body} onChange={e => setPost({...post, body: e.target.value})} type="text" placeholder="post description"/>
      <MyButton onClick={addNewPost}>Create the post</MyButton>
      </form>
  )
}

export default PostForm
