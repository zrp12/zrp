// useEffect onMounted onUpdated onUnmounted
// useRef 标注节点或对象
import { useState, useEffect,useRef } from 'react'
import LanguageSelector from './components/LanguageSelector';
import './App.css'
// react 组件 = 函数 + JSX 
// JSX ? 
function App() {
  // vue ref 
  const [sourceLanguage, setSourceLanguage] = useState('zho_Hans');
  const [targetLanguage, setTargetLanguage] = useState('eng_Latn');
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [disabled,setDisabled] = useState(false);
  // 创建一个web worker 的对象
  const worker = useRef(null);

  useEffect(() => {
    // 相对于 vue onMounted
    console.log('life cycle');
    // 耗时性任务交给worker 子线程
    // JS 有多线程机制 html5 web worker，js 是单线程语言
    // ref null -> worker JS 新线程，不是从语言层面解决的
    // 浏览器层面解决，js仍然是单线程 
    // 特别复杂 (AI，加密，压缩)
    // html5
    // 由work.js 去负责 专门做AI任务
    if(!worker.current) {
      worker.current = new Worker(new URL('./worker.js',import.meta.url,{
        type: 'module'
      }));
    }
    

    const onMessageReceived = (event) => {
      // console.log(event);
      if(event.data.status === 'update') {
        console.log(event.data);
        setOutput(event.data.output);
      }
    }

    worker.current.addEventListener('message',onMessageReceived)
    // worker.current.postMessage({
    //   text: '有一个AI任务交给你哦'
    // })
  })

  const translate = () => {
    setDisabled(true);
    // 前端做AI 的缺点？Transformers.js 浏览器运行大模型 
    // 浏览器运行大模型性能差
    // 交给Web Worker ，交给独立线程机制
    worker.current.postMessage({
      sourceLanguage,
      targetLanguage,
      text: input
    })
  }
 
    // ref reactive Model 
    // useState hooks 思想直接内置到框架
  const headerEle = (
    <h1>首页</h1>
  )
  return (
    // template  view 
    <>
    <h1>Transforms.js</h1>
    <h2>ML-powered multiligual translation in React</h2>
    <div className='container'>
      
      <div className = "language-container">
        <LanguageSelector 
          type={"原语言"} 
          defaultLanguage={sourceLanguage}
          onChange={x => setSourceLanguage(x.target.value)}   
        />
        <LanguageSelector 
          type={"目标语言"} 
          defaultLanguage={targetLanguage}
          onChange={x => setTargetLanguage(x.target.value)}   
        />
      </div>
      <div className='textbox-container'>
        <textarea 
          value={input}
          rows={3}
          onChange={x => setInput(x.target.value)}
        />

        <textarea 
          value={output}
          rows={3}
          readOnly
        />
      </div>
      <button disabled={disabled} onClick={translate}>Translate</button>
      </div>
    </>
  )
}

export default App
