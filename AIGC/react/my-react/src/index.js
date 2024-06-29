// console.log('原生js');
import ReactDOM from 'react-dom'
import React from 'react'
import App from './App'
// 根节点 VUE/React功能的挂载点
// react 在哪个范围生效
const root = ReactDOM.createRoot(
  document.getElementById('root')
)

// const App = <h1>吃大餐</h1>
// const App = React.createElement('h1',
//   { id: 'title',className:'tit' },
//   '吃大餐'
// )

// const App = React.createElement('div', 
//   { className: 'container' },
//   React.createElement('h1', { className: 'title' }, '吃大餐')
// )

// react JSX 在js里直接填写xml(html)
// const App = (
//   <div className='container'>
//     <h1 className='title'>
//       吃大餐
//     </h1>
//   </div>
// )

root.render(<App name="zzm" />)