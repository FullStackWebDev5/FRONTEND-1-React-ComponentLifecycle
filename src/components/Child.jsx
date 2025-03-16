import { Component } from 'react'

export class Child extends Component {
  componentDidMount() {
    console.log('[Child component] MOUNTED')
  }

  componentDidUpdate() {
    console.log('[Child component] UPDATED')
  }

  componentWillUnmount() {
    console.log('[Child component] UNMOUNTED')
  }

  render() {
    return (
      <div>
        <h1>Child</h1>
      </div>
    )
  }
}

export default Child