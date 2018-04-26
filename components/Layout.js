import React from 'react'

export default ({ children }) => (
  <React.Fragment>
    { /* language=CSS */ }
    <style jsx>{`
      div {
        font-family: Roboto, Helvetica, Arial, sans-serif;
        margin: 0 auto;
        padding: 1rem;
        max-width: 50rem;
        min-width: 25rem;
      }
    `}</style>
    <div>
      { children }
    </div>
  </React.Fragment>
)
