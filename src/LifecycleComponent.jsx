import React from 'react';

class LifecycleComponent extends React.Component {
  
  constructor (props) {
    super(props)
    this.state = {count:0}
    this.increment = this.increment.bind(this)
    
    
  }
  increment () {
    this.setState((state)=>({count:state.count+1}))
  }
  // компонент перерисовывался только при изменении 
  // значения count на четное число
  shouldComponentUpdate (nextProps, nextState) {
    return nextState.count % 2 === 0 && this.state.count
  }
//выполнение сетевого запроса
  componentDidMount () {
    console.log('Компонент был смонтирован!')
    async function getImage () {
      let response = await fetch ('https://dog.ceo/api/breeds/image/random')
      let result = await response.json()
      console.log(result)
      
    }
    getImage()

  }
  componentDidUpdate () {
    console.log("Компонент обновлен!")  
    
  }
  componentWillUnmount () {
    console.log("Компонент удален!")  
    
  }
  render () {
    console.log('--render--')
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={this.increment}>Click</button>
      </div>
    )
  }           
  
}
export default LifecycleComponent;