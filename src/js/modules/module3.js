//默认暴露
export default {
    v1: '测试默认暴露变量',
    f: function(){
        console.log(this.v1);
    }
}