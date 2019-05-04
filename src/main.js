import Vue from 'vue'
import App from './App'
import router from './router'
import Slick from 'vue-slick'

Vue.config.productionTip = false

Vue.component('my-border', {
  template: `<div class="border"></div>`
})

Vue.component('my-owl', {
  props: ['links'],
  template: `<div class="row">
            <div class="span12">
                <div class="owl-carousel owl-theme">
                    <div class="item" v-for="link in links" :key="link.index">
                        <router-link :to="'/' + link.route" v-bind:title="link.message">
                                <img :src="'./src/assets/thumbnails/adam-' + link.thumbnail + '.jpg'" :alt="'Adam at ' + link.alt">
                                <h1 class="lazyTitle">{{link.index}}</h1>
                        </router-link>
                    </div>
                </div>
            </div>
          </div>`
})

Vue.component('my-title', {
  props: ['message'],
  template: '<div class="cover-heading"><h1>{{ message }}</h1></div>'
})

Vue.component('my-slick', {
  props: ['photos'],
  components: { Slick },
  data: function () {
    return {
      slickOptions: {
        dots: true,
        arrows: true,
        infinite: true,
        speed: 1000,
        fade: true,
        cssEase: 'linear'
      }
    }
  },
  template: `
  <slick ref="slick" :options="this.slickOptions" class='carousel-class'> 
    <div v-for="photo in photos" :key="photo.index">
      <div>
        <img :src="'./src/assets/images/' + photo.name + '.jpg'">
          <h2>{{photo.title}}</h2>
      </div>
    </div>
    </slick>`
})

Vue.component('my-video', {
  props: ['title'],
  template: `
    <div class="easyhtml5video" style="position:relative;max-width:1280px;">
      <video controls="controls" v-bind:poster="'/src/assets/videos/' + title + '.jpg'" style="width:100%" :title="title">
        <source v-bind:src="'/src/assets/videos/' + title +'.m4v'" type="video/mp4">
        <source v-bind:src="'/src/assets/videos/' + title +'.webm'" type="video/webm">
        <source v-bind:src="'/src/assets/videos/' + title +'.ogv'" type="video/ogg">
      </video>
    </div>`
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
