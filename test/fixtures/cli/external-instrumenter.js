'use strict';var cov_4mo0jj89z=function(){var path="./external-instrumenter.js";var hash="258f33c73dcdfdb232fbc4b001a43ae5dc7da182";var global=new Function("return this")();var gcv="__coverage__";var coverageData={path:"./external-instrumenter.js",statementMap:{"0":{start:{line:5,column:4},end:{line:5,column:22}},"1":{start:{line:9,column:4},end:{line:9,column:29}},"2":{start:{line:10,column:15},end:{line:12,column:5}},"3":{start:{line:11,column:6},end:{line:11,column:31}},"4":{start:{line:16,column:15},end:{line:18,column:5}},"5":{start:{line:17,column:6},end:{line:17,column:31}},"6":{start:{line:22,column:8},end:{line:22,column:20}},"7":{start:{line:23,column:0},end:{line:23,column:7}}},fnMap:{"0":{name:"(anonymous_0)",decl:{start:{line:4,column:2},end:{line:4,column:3}},loc:{start:{line:4,column:16},end:{line:6,column:3}},line:4},"1":{name:"(anonymous_1)",decl:{start:{line:8,column:2},end:{line:8,column:3}},loc:{start:{line:8,column:8},end:{line:13,column:3}},line:8},"2":{name:"(anonymous_2)",decl:{start:{line:10,column:15},end:{line:10,column:16}},loc:{start:{line:10,column:21},end:{line:12,column:5}},line:10},"3":{name:"(anonymous_3)",decl:{start:{line:15,column:2},end:{line:15,column:3}},loc:{start:{line:15,column:9},end:{line:19,column:3}},line:15},"4":{name:"(anonymous_4)",decl:{start:{line:16,column:15},end:{line:16,column:16}},loc:{start:{line:16,column:21},end:{line:18,column:5}},line:16}},branchMap:{},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0},f:{"0":0,"1":0,"2":0,"3":0,"4":0},b:{},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"258f33c73dcdfdb232fbc4b001a43ae5dc7da182"};var coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}return coverage[path]=coverageData;}();class Yarsay{constructor(){cov_4mo0jj89z.f[0]++;cov_4mo0jj89z.s[0]++;console.log('sup');}hit(){cov_4mo0jj89z.f[1]++;cov_4mo0jj89z.s[1]++;console.log('do not hit');cov_4mo0jj89z.s[2]++;let miss=()=>{cov_4mo0jj89z.f[2]++;cov_4mo0jj89z.s[3]++;console.log('do not hit');};}miss(){cov_4mo0jj89z.f[3]++;cov_4mo0jj89z.s[4]++;let miss=()=>{cov_4mo0jj89z.f[4]++;cov_4mo0jj89z.s[5]++;console.log('do not hit');};}}let y=(cov_4mo0jj89z.s[6]++,new Yarsay());cov_4mo0jj89z.s[7]++;y.hit();
