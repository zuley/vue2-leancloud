<template lang="html">
  <div>
    上传组件
    <div class="header">
      <h2>选择图片</h2>
      <div class="upBtn" @click="addPic">添加图片</div>
      <input ref="flieInput" type="file" @change="onFileChange" multiple style="display: none;">
    </div>
    <div v-if="images.length > 0">
      <ul>
        <li v-for="(key, image) in images">
          <img :src="image" />
          <span @click="delImage(key)">删除</span>
        </li>
        <button @click="removeAllImage">移除全部图片</button>
        <button @click="uploadImage">上传图片</button>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      images: []
    }
  },
  methods: {
    addPic (e) {
      this.$emit('change', this.$refs.flieInput)
      console.log('添加图片')
    },
    onFileChange (e) {
      console.log('文件改变')
    },
    createImage (file) {
      console.log('创建图片')
    },
    delImage (index) {
      console.log('删除图片')
    },
    removeAllImage () {
      console.log('移除全部图片')
    },
    uploadImage () {
      console.log('上传照片')
    }
  }
}
</script>

<style lang="css">
</style>
