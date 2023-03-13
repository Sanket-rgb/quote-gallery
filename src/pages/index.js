import React, { useState, useEffect } from "react"
import { AiFillHeart } from "react-icons/ai"
import { FaGreaterThan } from "react-icons/fa"

import classes from "../styles/Home.module.css"
import ListOfQuotes from "./QuotesList/ListOfQuotes"

const url = "https://api.quotable.io/random"
let likedQuotes = []

const Home = () => {
  const [quotes, setQuotes] = useState([])
  const [like, setLike] = useState(false)
  const [openList, setOpenList] = useState(false)

  //Fetch Quotes from API
  const getQuote = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setQuotes(data))
  }

  useEffect(() => {
    getQuote()
  }, [])

  const getNewQuote = () => {
    getQuote()
    if (like) {
      setLike(!like)
    }
  }

  // const tweetQuote = () => {
  //   const twitterUrl = `https://twitter.com/intent/tweet?text=${quotes.content} - ${quotes.author}`
  //   window.open(twitterUrl, "_blank")
  // }

  const likeQuote = () => {
    setLike(true)
    likedQuotes.push({ quote: content, authorName: author })
    console.log(likedQuotes)
  }

  const unlikeQuote = () => {
    setLike(false)
    likedQuotes.pop(likedQuotes.indexOf(likedQuotes.quote))
    // likedQuotes.indexOf(likedQuotes.quote)
    console.log(likedQuotes)
  }

  const { content, author } = quotes
  return (
    <div className={classes.card}>
      {openList ? (
        <div className={classes["top-bar"]}>
          <h5 className={classes.counter} onClick={() => setOpenList(false)}>
            X
          </h5>
        </div>
      ) : (
        <div className={classes["top-bar"]}>
          <h5 className={classes.counter} onClick={() => setOpenList(true)}>
            {likedQuotes.length}
          </h5>
        </div>
      )}
      {!openList && (
        <>
          <div className={classes.content}>
            <p>{content}</p>
            <div className={classes.author}>
              <h5>{"~ " + author}</h5>
            </div>
          </div>
          <div className={classes["bottom-bar"]}>
            <div>
              <AiFillHeart
                className={classes["heart-icon"]}
                onClick={like ? unlikeQuote : likeQuote}
                size={32}
                color={like ? "#D2042D" : "white"}
              />
            </div>
            <FaGreaterThan
              className={classes["new-Quote-Button"]}
              size={32}
              onClick={getNewQuote}
            />
          </div>
        </>
      )}

      {openList && <ListOfQuotes likedQuotes={likedQuotes} />}
    </div>
  )
}

export default Home
