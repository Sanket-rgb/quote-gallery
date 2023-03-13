import React, { useState } from "react"

import { AiFillHeart } from "react-icons/ai"
import classes from "./ListOfQuotes.module.css"
const ListOfQuotes = (props) => {
  // const [isOpen, setOpen] = useState(false)

  return (
    <div className={classes.wrapper}>
      {props.likedQuotes.map((quote) => (
        <div
          key={Math.random().toString()}
          className={classes["quote-item-container"]}
        >
          <div className={classes["quote-content"]}>{quote.quote}</div>
          <div className={classes["author-likeicon"]}>
            <h5>{"~ " + quote.authorName}</h5>
            <AiFillHeart size={30} color="#D2042D"></AiFillHeart>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ListOfQuotes
