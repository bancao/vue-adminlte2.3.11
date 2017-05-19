<template>
	<div class="login-box">
  <div class="login-logo">
   <b>Admin</b>LTE
  </div>
  <!-- /.login-logo -->
  <div class="login-box-body">
    <p class="login-box-msg">Sign in to start your session</p>

    
      <div class="form-group has-feedback">
        <input v-model="email" type="email" @keyup.enter="login" class="form-control" placeholder="Email">
        <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
      </div>
      <div class="form-group has-feedback">
        <input v-model="password" type="password" @keyup.enter="login" class="form-control" placeholder="Password">
        <span class="glyphicon glyphicon-lock form-control-feedback"></span>
      </div>
      <div class="row">
        <div class="col-xs-8">
          <div class="checkbox icheck">
            <label>
              <input type="checkbox" v-model="rememberMe"> Remember Me
            </label>
          </div>
        </div>
        <!-- /.col -->
        <div class="col-xs-4">
          <button type="submit" v-on:click="login" class="btn btn-primary btn-block btn-flat">Sign In</button>
        </div>
        <!-- /.col -->
      </div>
   

    <div class="social-auth-links text-center">
      <p>- OR -</p>
      <a href="#" class="btn btn-block btn-social btn-facebook btn-flat"><i class="fa fa-facebook"></i> Sign in using
        Facebook</a>
      <a href="#" class="btn btn-block btn-social btn-google btn-flat"><i class="fa fa-google-plus"></i> Sign in using
        Google+</a>
    </div>
    <!-- /.social-auth-links -->

    <a href="#">I forgot my password</a><br>
    <a href="register.html" class="text-center">Register a new membership</a>

  </div>
  <!-- /.login-box-body -->
</div>
	
</template>

<script>
export default {
  name: 'login',
  data: function() {
    return {
      email: '',
      password: '',
      rememberMe: false
    }
  },
  methods: {
  	login: function() {
      var vm = this;
      vm.$http.post('/api/user/app/login', {
            userName: this.$data.email,
            password: this.$data.password,
            rememberMe: this.$data.rememberMe
      }).then(function(response){
        console.log(response.headers.access_token)
        $.cookie("access_token", response.headers.access_token);
        vm.$router.push({ path: '/' });
      }).catch(function(error) {
        console.log(error);
      });
    }
  }
}
</script>