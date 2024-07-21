<template>
    <div class="note-publish">
        <div class="editor">
            <QuillEditor theme="snow" 
            placeholder="请输入日记内容"
            v-model:content="state.content"
            contentType="html"
            />
        </div>

        <div class="note-wrap">
            <div class="note-cell">
                <van-field v-model="state.title" label="标题" placeholder="请输入标题" />
            </div>
            <div class="note-cell">
                <van-field label="上传图片">
                    <template #input>
                        <van-uploader :after-read="afterRead" 
                        v-model="state.img"
                        max-count="1"/>
                    </template>
                </van-field>
            </div>
            <div class="note-cell">
                <div class="sort" @click="state.sortShow = true">
                    <span>选择分类</span>
                    <span>{{ state.note_type }}<van-icon name="arrow" /></span>
                </div>
                <van-action-sheet 
                v-model:show="state.sortShow" 
                :actions="actions"
                @select="onSelect" />
            </div>
        </div>

        <div class="btn">
            <van-button type="primary" block @click="notePublish">发布日记</van-button></div>
    </div>
</template>

<script setup>
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import { reactive } from 'vue';
import axios from '@/api';

const state = reactive({
    content: '',
    title: '',
    img: [],
    sortShow: false,
    note_type: '美食'
})

const actions = [
      { name: '美食' },
      { name: '旅游' },
      { name: '恋爱' },
      { name: '学习' },
      { name: '吵架' }
    ];

const afterRead = () => {
    console.log('图片读取到了', state.img);
}

const onSelect = (item) => {
    state.sortShow = false;
    state.note_type = item.name;
}

const notePublish = () => {
    axios.post('/note-publish', {
        title: state.title,
        note_type: state.note_type,
        head_img: state.img.length ? state.img[0].content : '',
        note_content: state.content,
        nickname: JSON.parse(localStorage.getItem('userInfo')).nickname
    }).then(res => {
        console.log(res);
})
}
</script>

<style lang="less" scoped>
.note-publish {
    min-height: 100vh;
    :deep(.ql-container){
        height: 200px;
    }
    .note-cell {
        border-bottom: 1px solid #d1d5db;
        .sort {
            display: flex;
            justify-content: space-between;
            line-height: 3;
            padding: 10px 16px;
            font-size: 14px;
            color: #323233;
        }
    }
    .btn {
        width: 80%;
        margin: 0 auto;
        margin-top: 2rem;
        border-radius: 20px;
    }
}
</style>