import { Component } from 'react'
import './App.css'
import Child from './components/Child'

// function App() {
//   return (
//     <>
//       <h1>React Component Lifecycle</h1>
//     </>
//   )
// }

class App extends Component {
  constructor() {
    super()
    this.state = {
      count: 0,
      showChild: false
    }
  }

  componentDidMount() {
    console.log('[App component] MOUNTED')
  }

  componentDidUpdate() {
    console.log('[App component] UPDATED')
  }

  render() {
    return (
      <div className="App">
        <h1>React Component Lifecycle</h1>
        <p>Count: {this.state.count}</p>
        <button
          onClick={() => this.setState({
            count: this.state.count + 1
          })}
        >Increment</button>
        <br /><br />
        <button
          onClick={() => this.setState({
            showChild: !this.state.showChild
          })}
        >
          {this.state.showChild ? 'Hide' : 'Show'} Child Component
        </button>
        {this.state.showChild && <Child />}
      </div>
    )
  }
}

export default App

/*
  # Component Lifecycle
    - Phases
      - Mounting Phase: (Birth)
        - When the component is injected in the DOM for the first time
      - Updating Phase: (Milestones/Update)
        - Whenever the component re-renders (due to the change in it's state or prop)
      - Unmounting Phase (Death)
        - When the component is removed from the DOM
    - Methods (Class)
      - Mounting Phase: 
        - componentDidMount(): (Child's first cry)
          - This method is invoked right after the component is mounted
          - Use cases: Making external API calls (fetch/axios), initializing data, etc. 
      - Updating Phase: 
        - componentDidUpdate(): (Share milestone with others)
          This method is invoked right after the component is updated
          - Use cases: Updating other dependent states/variables based on specific state/prop changes
      - Unmounting Phase: 
        - componentWillUnmount(): (Last words)
          This method is invoked right before the component is unmounted
          - Use cases: Clear/reset form/state data, etc.
       - Methods (Function)


  # Additional notes:
    - Component lifecycle
      - Reference for phase: Human lifecycle phases
        - Birth
        - Milestones/Update (Matriculation, Graduation, Marriage, etc.)
        - Death
      - Reference for methods: Human lifecycle phases
        - After birth phase: Child's first cry
        - After milestones/update phase: Share milestone with others
        - Before death phase: Last words


  # References:
    - Lifecycle phases and methods: https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/ogimage.png

  # Future:
    - useEffect ***
*/