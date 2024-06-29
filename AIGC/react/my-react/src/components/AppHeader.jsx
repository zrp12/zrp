import { Component } from 'react'
// const AppHeader = (props) => {
//     // 外部数据
//     const { name } = props;
//     return (
//         <header className="app-header">
//             <h1 className="title">{name}</h1>
//         </header>
//   
// }
class AppHeader extends Component {
    constructor(props) {
        super(props)
        // 自有状态
        this.state = {
            emoji: '😊'
        }

        setInterval(() => {
            this.setState({
                emoji: this.state.emoji === '😊' ? '😂' : '😍'
            })
        }, 1000)
    }
    render() {
        const { name } = this.props;
        const { emoji } = this.state;
        return (
            <header className="app-header">
                <h1 className="title">类式组件{name} {emoji}</h1>
            </header>
        )
    }
}


export default AppHeader