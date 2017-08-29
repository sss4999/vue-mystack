<style>
	.el-carousel {
		margin-top: 66px;
		margin-left: 14%;
		margin-right: 14%;
		border-radius: 0 0 8px 8px;
	}
	.el-carousel__item h3 {
	    color: #475669;
	    font-size: 14px;
	    opacity: 0.75;
	    line-height: 300px;
	    margin: 0;
	}
	  
	.el-carousel__item:nth-child(2n) {
	    background-color: #99a9bf;
	}
	  
	.el-carousel__item:nth-child(2n+1) {
	    background-color: #d3dce6;
	}
	.el-menu {
		width: 100%;
		height: 65px;
        background: white;
        text-align: center;
        position: fixed;
        z-index: 99999;
        border-bottom: 1px solid #D3DCE6
    }
    .el-menu .el-menu-item {
    	height: 65px;
    	line-height: 65px;
    	font-size: 18px
    }
    .el-menu--horizontal .el-submenu .el-menu-item {
		height: 50px;
		line-height: 50px;
		font-size: 14px
	}
	.nav-logo {
		position: relative;
		float: left;
		width: 14%;
		padding-top: 7.5px
	}
	.nav-logo img{
		height: 50px
	}
	.select-container {
		position: relative;
		float: left;
		padding-top: 14.5px;
		padding-left: 20px;
	}
	.select-container .el-input .el-input__inner{
		border-radius: 18px
	}
	.right-container {
		position: relative;
		float: right;
		height: 65px
	}
	.el-dropdown {
		position: relative;
		float: right;
		height: 65px;
	}
	.user {
		line-height: 65px;
		width: 100px;
		height: 65px;
	}
	.user:hover {
		background: #eef1f6
	}
	.user img{
		position: relative;
		height: 50px;
		border-radius: 25px;
		margin-top: 7.5px;
		margin-right: 1px
	}
	.write-btn {
		border-radius: 20px;
		margin: 12px 20px 0 20px;
		height: 40px;
		font-size: 15px;
		margin-left: 20px
	}
	.el-menu--horizontal .el-submenu .el-submenu__title {
		height: 65px;
		line-height: 65px;
		font-size: 18px
	}
	.el-submenu__icon-arrow{
    	display: none
    }
    .el-input__inner{
		border-radius: 18px;
		padding-left: 18px;
		width: 150px;
		border: 1.3px solid #D3DCE6;
		-webkit-transition: all .3s;
		-moz-transition: all .3s;
		-o-transition: all .3s;
	}
	.el-input__inner:focus {
		width: 240px;
		border: 1.3px solid #20A0FF
	}
	.el-input__icon {
		font-size: 16px
	}
	.el-dropdown-menu__item {
		line-height: 45px;
		padding-left: 20px;
		padding-right: 20px;
		font-size: 14px
	}
	.my {
		margin-right: 10px;
		color: #20A0FF
	}
	.index-content {
		margin-left: 14%;
		margin-right: 14%;
		padding-top: 40px
	}
	.index-content .left-content{
		width: 66%;
		float: left;
	}
	.index-content .right-content{
		height: 300px;
		width: 30%;
		background: red;
		float: right;
	}
	.left-content .tag-container{
		text-align: left;
		margin-bottom: 20px
	}
	.left-content .article-container{
		text-align: left
	}
	.tag {
		display: inline-block;
	    margin: 0 18px 18px 0;
	    min-height: 30px;
	    background-color: #f7f7f7;
	    border: 1px solid #dcdcdc;
	    border-radius: 4px;
	    vertical-align: top;
	    overflow: hidden
	}
	.tag img {
		height: 32px;
		vertical-align: middle;
	}
	.tag-content {
		display: inline-block;
    	padding: 0 11px 0 6px;
    	font-size: 14px;
	}
	.more-type {
		display: inline-block;
	    margin-top: 7px;
	    font-size: 14px;
	    color: #787878;
	}
	.article-content {
		position: relative;
		border-top: 1px solid #D3DCE6;
		padding-top: 15px;
		width: 100%;
		height: 180px
	}
	.art-content-left {
		float: left;
		width: 70%;
	}
	.art-content-left .art-content-author {
		width: 100%;
		height: 32px;
		margin-bottom: 10px
	}
	.art-content-author img {
		border-radius: 16px;
		width: 32px;
		float: left;
	}
	.art-content-author .author {
		padding-left: 11px;
    	font-size: 14px;
		float: left;
		line-height: 32px;
	}
	.art-content-right {
		float: right;
		width: 28%;
		position: relative;
		height: 100%
	}
	.art-content-right img{
		top: 15%;
		position: absolute;
		border-radius: 5px;
		width: 100%;
		height: 60%
	}
	.i-title {
		font-size: 18px;
		font-weight: 700;
    	line-height: 1.5;
    	display: inherit;
    	margin: 7px 0;
	}
	.i-cont{
		font-size: 13px;
	    line-height: 22px;
	    margin-right: 10px;
	}
</style>
<template>
	<el-row>
		<el-menu :default-active="activeIndex" class="el-menu" mode="horizontal" @select="handleSelect">
			<div class="nav-logo"><img src="../assets/img/logo.png"></div>
	        <el-menu-item index="1">发现</el-menu-item>
	        <el-menu-item index="3">关注</el-menu-item>
	        <el-submenu index="2">
	            <template slot="title" index="2" class="sub-title">消息</template>
	            <el-menu-item index="2-1">选项1</el-menu-item>
	            <el-menu-item index="2-2">选项2</el-menu-item>
	            <el-menu-item index="2-3">选项3</el-menu-item>
	        </el-submenu>
	        <div class="select-container">
	        	<el-input placeholder="搜索内容" icon="search" v-model="input2" :on-icon-click="handleIconClick">
				</el-input>
	        </div>
	        <div class="right-container">
	        	<el-button class="write-btn" type="primary" icon="edit">写文章</el-button>
	        </div>
	        <el-dropdown>
	        	<div class="user">
	        		<img src="../assets/img/touxiang.jpg">
	       			<i class="el-icon-caret-bottom"></i>
	       		</div>
	       		<el-dropdown-menu style="border-top: 0; margin: 0; border-radius: 2px;" slot="dropdown">
				    <el-dropdown-item><i class="el-icon-menu my"></i>我的主页</el-dropdown-item>
				    <el-dropdown-item><i class="el-icon-setting my"></i>设置</el-dropdown-item>
				    <el-dropdown-item><i class="el-icon-message my"></i>帮助与反馈</el-dropdown-item>
				    <el-dropdown-item><i class="el-icon-circle-cross my"></i>退出</el-dropdown-item>
				</el-dropdown-menu>
	        </el-dropdown>	

	    </el-menu>
	  	<el-col :span="24">
		    <el-carousel>
		        <el-carousel-item v-for="item in 4" :key="item">
		        	<h3>{{ item }}</h3>
		        </el-carousel-item>
		    </el-carousel>
		    <div class="index-content">
		    	<div class="left-content">
		    		<div class="tag-container">
		    			<a class="tag" v-for="tag in typeTags">
		    				<img src="../assets/img/touxiang.jpg">
		    				<div class="tag-content">{{tag}}</div>
		    			</a>
		    			<a class="more-type">查看更多分类 <i class="el-icon-arrow-right" style="font-size:12px"></i></a>
		    		</div>
		    		<div class="article-container">
		    			<div class="article-content" v-for="article in indexArticle">
		    				<div class="art-content-left">
		    					<div class="art-content-author">
		    						<img src="../assets/img/touxiang.jpg">
		    						<div class="author"><a>{{article.author}}</a></div>
		    					</div>
		    					<a class="i-title">{{article.title}}</a>
		    					<p class="i-cont">{{article.content}}</p>
		    					<div class="art-content-footer"></div>
		    				</div>
		    				<div class="art-content-right">
		    					<img src="../assets/img/article-pic.jpg">
		    				</div>
		    			</div>
		    		</div>
		    	</div>
		    	<div class="right-content"></div>
		    </div>
	  	</el-col>
	</el-row>
</template>

<script>
	export default {
        data () {
            return {
                 activeIndex: '1',
                 typeTags: ['军事理论','军事理论','军事理论','军事理论','军事理论','军事理论','军事理论'],
                 indexArticle: [
                 	{
                 		title: '别说话我是你爸爸',
                 		author: '你爸爸',
                 		content: '知乎上有这样一个问题：为什么那么多人开车回家，到了楼下后要在车里坐好久？ 有一个网友的回答得到了很多人的点赞，他说： “很多时候，我也不想下车，因为那是一个分界点。推开车门你...',
                 		type: '你爸爸的爸爸',
                 		pageviews: 3323,
                 		comment: 93,
                 		pic: '../assets/img/article-pic.jpg'
                 	},
                 	{
                 		title: '别说话我是你爸爸',
                 		author: '你爸爸',
                 		content: '知乎上有这样一个问题：为什么那么多人开车回家，到了楼下后要在车里坐好久？ 有一个网友的回答得到了很多人的点赞，他说： “很多时候，我也不想下车，因为那是一个分界点。推开车门你...',
                 		type: '你爸爸的爸爸',
                 		pageviews: 3323,
                 		comment: 93,
                 		pic: '../assets/img/article-pic.jpg'
                 	},
                 	{
                 		title: '别说话我是你爸爸',
                 		author: '你爸爸',
                 		content: '知乎上有这样一个问题：为什么那么多人开车回家，到了楼下后要在车里坐好久？ 有一个网友的回答得到了很多人的点赞，他说： “很多时候，我也不想下车，因为那是一个分界点。推开车门你...',
                 		type: '你爸爸的爸爸',
                 		pageviews: 3323,
                 		comment: 93,
                 		pic: '../assets/img/article-pic.jpg'
                 	}
                 ]
            }
        },

        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>