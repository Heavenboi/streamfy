import React, { Component } from 'react'
export default class Player extends Components {
constructor(props) {
this.state = {
videoId: this.props.match.parans.id,
videoData: {} 
}
}
async componentDidMount () {
try {
const res = await fetch('http://localhost:4000/video/$(this.state.videoId)/data');
const data = await res.json();
this.setState({ videoData: data });
} catch (error) {
console.log(error);
}
}
render() {
return (
<div className="App"
<header className="App-header"
<video controls muted autoPlay>
<source src={'http://localhost:4000/video/$(this.state.videoId}'} type="video/mp4"></source>
</video>
</header>
</div>
)

export default App
