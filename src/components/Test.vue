<template>
<section class="content">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    
    <div v-on:click="testLogin">test login</div>
    <ul>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
    
</section>
</template>

<script>
export default {
  name: 'test',
  data: function() {
    return {
      msg: 'Test Vue.js App'
    }
  },
  methods: {
    testLogin: function() {
      this.$http.get("/api/user/test").then(function(response){
        
      }).catch(function(error) {
          console.log(error);
      });
    }
  }

//   mounted () {
// 　　 let w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
// 　　 let h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
//      this.$refs.contentWrapper.style.height = h +'px';
// 　}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>


