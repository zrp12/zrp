// /**
//  * @func 根据用户输入，输出胜或赢
//  * @return  win/lose
//  */ 

// const game = (action) => { // 定义游戏函数，接受用户输入的动作
//     const arr = ['rock','scissors','paper']; // 定义游戏可选的动作数组
    
//     // 输入的校验
//     if(arr.indexOf(action) == -1){ // 检查用户输入是否有效
//         throw new Error('用户输入错误'); // 若输入无效，抛出错误
//     }

//     let computerAction; // 电脑选择的动作
//     let random = Math.floor(Math.random()*3);//向下取整，生成0到2之间的随机数
//     computerAction = arr[random]; // 在动作数组中随机选择一个动作作为电脑的选择
//     console.log('电脑出了'+computerAction); // 打印电脑选择的动作
    
//     if(computerAction == action){ // 如果电脑和用户选择一样，平局
//         console.log('平局');
//         return 0;//平局
//     } else if (
//         (computerAction == 'rock' && action == 'scissors') || // 电脑胜利的条件：电脑出石头，用户出剪刀；电脑出剪刀，用户出布；电脑出布，用户出石头
//         (computerAction == 'scissors' && action == 'paper') ||
//         (computerAction == 'paper' && action == 'rock') 
//     ){
//         console.log('你输了'); // 用户输了
//         return -1;
//     } else { // 其他情况，用户胜利
//         console.log('你赢了');
//         return 1;
//     }
// }

// let winCount = 0; // 用户胜利次数
// let loseCount = 0; // 用户失败次数

// process.stdin.on('data', (buffer) => { // 监听用户输入事件
//     const action = buffer.toString().trim(); // 将用户输入转换成字符串并去除首尾空格
//     const result = game(action); // 调用游戏函数，传入用户输入的动作

//     if (result == 1){ // 如果用户胜利
//         winCount++; // 胜利次数加一
//         if (winCount == 2){ // 如果胜利次数达到2次（两局胜利）
//             console.log('你赢得了比赛！'); // 打印用户赢得比赛的信息
//             process.exit(); // 结束游戏
//         }
//     } else if (result == -1) { // 如果用户失败
//         loseCount++; // 失败次数加一
//         if (loseCount == 2){ // 如果失败次数达到2次（两局失败）
//             console.log('你输了比赛！'); // 打印用户输掉比赛的信息
//             process.exit(); // 结束游戏
//         }
//     }
// })



// /**
//  * 这个函数实现了一个简单的猜拳游戏，根据用户输入的动作与电脑随机生成的动作进行比较，
//  * 并输出游戏结果（胜利、失败或平局）。
//  * 
//  * @param {string} userAction 用户输入的动作，应为 'rock', 'scissors' 或 'paper'
//  * @return {string} 游戏结果，可能为 'win'、'lose' 或 'draw'
//  */
// const game = (userAction) => { // 根据用户输入进行游戏
//     const actions = ['rock', 'scissors', 'paper']; // 定义游戏的动作
    
//     // 校验用户输入的动作是否有效
//     if (actions.indexOf(userAction) === -1) { // 如果用户输入不在动作列表中
//         console.log('请输入有效的动作：rock, scissors 或 paper'); // 提示用户输入有效动作
//         return null; // 返回空值，表示输入无效
//     }

//     // 随机生成电脑的动作
//     const computerAction = actions[Math.floor(Math.random() * 3)]; // 生成随机数来模拟电脑的动作选择

//     console.log('电脑出了' + computerAction); // 显示电脑的动作
    
//     // 判断游戏结果
//     if (computerAction === userAction) { // 如果电脑和用户选择相同
//         console.log('平局'); // 显示平局结果
//         return 'draw'; // 返回平局结果，使用字符串表示
//     } else if (
//         (computerAction === 'rock' && userAction === 'scissors') || // 如果电脑出石头而用户出剪刀
//         (computerAction === 'scissors' && userAction === 'paper') || // 如果电脑出剪刀而用户出布
//         (computerAction === 'paper' && userAction === 'rock') // 如果电脑出布而用户出石头
//     ){
//         console.log('你输了'); // 显示用户输了
//         return 'lose'; // 返回输了的结果，使用字符串表示
//     } else {
//         console.log('你赢了'); // 显示用户赢了
//         return 'win'; // 返回赢了的结果，使用字符串表示
//     }
// }

// let winCounter = 0; // 初始化胜利次数计数器
// let loseCounter = 0; // 初始化失败次数计数器

// // 监听用户输入事件
// process.stdin.on('data', (buffer) => { // 监听用户输入
//     const userAction = buffer.toString().trim(); // 获取用户输入并去除首尾空格
//     const result = game(userAction); // 调用游戏函数并传入用户输入作为参数，获取游戏结果

//     // 根据游戏结果更新胜利或失败次数并判断游戏是否结束
//     if (result === 'win') { // 如果用户赢了
//         winCounter++; // 胜利次数加一
//         if (winCounter === 2) { // 如果胜利次数达到2次（两局胜利）
//             console.log('你赢得了比赛！'); // 提示用户赢得比赛
//             process.exit(); // 结束游戏
//         }
//     } else if (result === 'lose') { // 如果用户输了
//         loseCounter++; // 失败次数加一
//         if (loseCounter === 2) { // 如果失败次数达到2次（两局失败）
//             console.log('你输了比赛！'); // 提示用户输掉比赛
//             process.exit(); // 结束游戏
//         }
//     }
// })


const game = (userAction) => { 
    const actions = ['rock', 'scissors', 'paper']; 
    
    if (actions.indexOf(userAction) === -1) {
        console.log('请输入有效的动作：rock, scissors 或 paper'); 
        return null; 
    }

    const computerAction = actions[Math.floor(Math.random() * 3)]; 

    console.log('电脑出了' + computerAction); 
    
    if (computerAction === userAction) {
        console.log('平局'); 
        return 'draw'; 
    } else if (
        (computerAction === 'rock' && userAction === 'scissors') || 
        (computerAction === 'scissors' && userAction === 'paper') || 
        (computerAction === 'paper' && userAction === 'rock') 
    ){
        console.log('你输了'); 
        return 'lose'; 
    } else {
        console.log('你赢了'); 
        return 'win'; 
    }
}

let winCounter = 0; 
let loseCounter = 0; 

// 监听用户输入事件
process.stdin.on('data', (buffer) => { 
    const userAction = buffer.toString().trim(); 
    const result = game(userAction); 

    if (result === 'win') { 
        winCounter++;
        if (winCounter === 2) {
            console.log('你赢得了比赛！'); 
            process.exit(); 
        }
    } else if (result === 'lose') { 
        loseCounter++; 
        if (loseCounter === 2) { 
            console.log('你输了比赛！');
            process.exit(); 
        }
    }
})