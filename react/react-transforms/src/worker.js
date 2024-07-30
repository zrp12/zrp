// NLP 任务中 pipeline 派出一个 xx NLP任务 translate任务
import { pipeline } from "@xenova/transformers"
class MyTranslationPipeline  {
    // es6 静态属性
    static task = 'translation'
    static model = 'Xenova/nllb-distilled-600M'
    static instance = null;

    // 单例
    static async getInstance(progress_callback = null) {
        if (this.instance === null) {
            this.instance = await pipeline(this.task, this.model),{
                progress_callback
            }
        }
        return this.instance
    }
}
// this 不能用 
self.addEventListener('message', async function(e) {
    // 可能会做多次翻译任务
    let translator = await MyTranslationPipeline.getInstance(x => {
        self.postMessage(x)
    })
    console.log(e.data);
    let output = await translator(e.data.text, {
        source_language: e.data.sourceLanguage,
        target_language: e.data.targetLanguage,
        callback_function: x => {
            self.postMessage({
                status: 'update',
                output: translator.tokenizer.decode(x[0].output_token_ids, { skip_special_tokens: true })
            })
        }
    })
})