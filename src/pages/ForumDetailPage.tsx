import React from 'react'
import { useParams } from 'react-router-dom'
import ErrorPage from './ErrorPage';

export default function ForumDetailPage() {
  const id = useParams().id;
  console.log(id);

  // if (!id not found) {
  //   return (<ErrorPage/>)
  // }
  return (
    <div>
      {`ForumDetailPage With ID : ${id}` } 
    </div>
  )
}
