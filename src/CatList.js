import React from 'react';

export default function catList({catPics}) {
  // console.log(cats)
  return (
    <div>
      {catPics.map((cat)=> <img key={cat.id} alt={cat.id} src={cat.url}></img>)}
    </div>
  )
}