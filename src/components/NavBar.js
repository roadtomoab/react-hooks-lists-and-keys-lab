import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return (
  <nav>
    <a key={links[0]} href={links[0]}>home</a>
    <a key={links[1]} href={links[1]}>about</a>
    <a key={links[2]} href={links[2]}>projects</a>
  </nav>

  )
}

export default NavBar;
