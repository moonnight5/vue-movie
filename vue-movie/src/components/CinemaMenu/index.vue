<template>
  <div id="content">
    <div class="cinema_menu">
				<router-link to="/cinema/quancheng" class="city_switch">
					全城 <i class="iconfont icon-lower-triangle"></i>
				</router-link>
				<router-link to="/cinema/pinpai" class="brand_swtich">
					品牌 <i class="iconfont icon-lower-triangle"></i>
				</router-link>
				<router-link to="/cinema/tese" class="feature_switch">
					特色 <i class="iconfont icon-lower-triangle"></i>
				</router-link>
			</div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
#content .cinema_menu{ width: 100%; height: 45px; border-bottom:1px solid #e6e6e6; display: flex; justify-content:space-around; align-items:center; background:white;}
</style>
