import React from "react"
import { navigateTo } from "gatsby"

const BackToHomepage = () => (
  <div style={{ display: "flex", justifyContent: "center" }}>
    <button
      style={{
        display: "block",
        background: "turquoise",
        border: "2px solid darkblue",
        borderRadius: "10px",
        padding: "5px 15px",
        cursor: "pointer",
      }}
      onClick={() => navigateTo("/")}
    >
      Go back to the homepage
    </button>
  </div>
)

export default BackToHomepage
