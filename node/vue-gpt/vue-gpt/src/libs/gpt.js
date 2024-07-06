// messageList [{role:'admin', content:'你是一位秀场专家...'}, 
// {role:'user', content:''}]
export async function chat(messageList, apiKey) {
    // console.log('chat')
    try{
        const result = await fetch('https://api.302.ai/v1/chat/completions', {
            method:'post',
            headers: {
                'Content-Type': "application/json",
                // 授权
                'Authorization': `Bearer ${apiKey}`
            },
            body:JSON.stringify({
                model: 'gpt-3.5-turbo',
                messages:messageList
            })
        })
        const data = await result.json()
        return data;
    } catch(error) {
        console.log(error)
        throw(error)
    }
}

// export default {
//     say: () => {
//         console.log('say')
//     }
// }
