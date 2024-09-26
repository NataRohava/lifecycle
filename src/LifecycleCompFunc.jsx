import React, {useState, useEffect} from 'react';

const LifecycleCompFunc = ()=> {
  //useState возвращает массив,деструкт.массива
  const [count, setCount] = useState(0)

  const incrementFunc = () => {
    setCount((count)=> count+1)
  }

  //componentDidMount
  // Первым параметром useEffect() принимает функцию. Эта функция 
  // должна либо ничего не возвращать, 
  // либо возвращать функцию для сброса эффекта
  // Если использовать async, то функция 
  // уже возвращает промис — это нарушает правило.
  // обернуть асинхронный вызов в функцию 
  // и вызвать эту функцию внутри useEffect
  useEffect (()=> {
    //console.log('componentDidMount')
    const getImage = async()=>{
        let response = await fetch ('https://dog.ceo/api/breeds/image/random')
        let result = await response.json()
    }
    getImage ()
  },[])

  //componentWillUnmount
  // useEffect (()=> {
  //   console.log('componentDidMount')
  //   return ()=>{
  //      console.log('componentWillUnmount')
  //    }
  // },[])

  //componentDidUpdate
  // useEffect (()=> {
  //   console.log('componentDidUpdate')
  // },[count])
  return <div>
        {
          count
        }
        <p>
          <button onClick = {incrementFunc}>
            Click1
          </button>
        </p>
        
    </div>
  
}
export default LifecycleCompFunc;