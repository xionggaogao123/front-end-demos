webpackJsonp([1],{182:function(e,t,a){"use strict";var l=a(12),b=l.extend({template:a(421),data:function(){return{selectedHobbies:[],hobbies:[{name:"运动",value:"sport"},{name:"游戏",value:"game"},{name:"其他",value:"others"}],secret:""}}});e.exports=b},421:function(e,t){e.exports='<div class=checkbox-wrap> <label for="">你的爱好: {{selectedHobbies | json}}</label> <div v-for="item in hobbies"> <label>{{item.name}}</label> <input type=checkbox name=habbit :value=item.value v-model=selectedHobbies> </div> <label>点击玩玩-></label> <input type=checkbox v-model=secret :true-value="\'我被翻牌啦~\'" :false-value="\'尽然不选我~\'"> <br> {{secret}} </div>'}});