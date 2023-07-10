import axios from "axios";
import React from 'react'
import { useState, useEffect } from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';

const LinkResult = ({inputValue}) => {

const [shortenLink, setshortenLink] = useState("");
const [copied, setCopied] = useState(false)
const [loading, setLoading] = useState(false);
const [error, setError] = useState(false);


const fetchData = async () => {
  try {
    setLoading(true);
    const res = await axios(`https://api.shrtco.de/v2/shorten?url=${inputValue}`);
    setshortenLink(res.data.result.full_short_link);
  } catch (err) {
    setError(err);
  } finally {
    setLoading(false);
  }
}

useEffect(() => {
  if(inputValue.length) {
    fetchData();
  }
}, [inputValue])

useEffect(() => {
    const timer = setTimeout(() => {
        setCopied(false);
    }, 200000)

    return () =>  clearTimeout;
}, [copied])


if (loading) {
  return <p className="nodata">Loading...</p>
}

if (error) {
  return <p className="nodata">Something went wrong :( </p>
}
  return (
    <>
    {shortenLink && (
      <div className='result'>
        <a href={shortenLink} target="_blank"><p>{shortenLink}</p></a>

        <CopyToClipboard 
            text={shortenLink}
            onCopy={() => setCopied(true)}
        >
        <button className={copied ? "copied" : ""}>{copied ? "copied": "copy" }</button>
        </CopyToClipboard>
          
      </div>
    )}
    </>
    
  )
}

export default LinkResult