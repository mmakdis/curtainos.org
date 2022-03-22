import React from "react";
export function Main({
  logo
}) {
  return <><img src={logo} className="App-logo" alt="logo" />
            <h1 className="header">CurtainOS</h1>
            <p className="text">a free and open source operating system, built from scratch.</p>
            <p className="rules">We follow three principles:</p>
            <ol className="rules">
              <li>An operating system should serve its user</li>
              <li>The user knows whats best</li>
              <li>freedom is achieved through choice</li>
            </ol>
            </>;
}
  