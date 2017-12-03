<template>
  <div>
    <ul id="example-2">
      <li v-for="(item, index) in items">
        {{ parentMessage }} - {{ index }} - {{ item.message }}
      </li>
    </ul>
    
  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {

       parentMessage: 'Parent',
       items: [
       { message: 'Foo' },
       { message: 'Bar' }
       ]
       
     }
   },
   mounted:function(){
     this.items.push({ message: 'push-Jack' });//插入数组尾
     this.items.pop();//移除数组末尾的元素
     this.items.unshift({ message: 'push-Jack' });//插入数组头部
     this.items.shift();//移除数组头部this.items.pop();
     //this.items.splice(0,1);//从指定索引，移除指定个数元素
     //this.items.reverse();//反序
     this.items.sort(
       function(x,y)
       { 
         return x['message'].localeCompare(y['message']) ;
      }) ;//排序

     this.items = this.items.filter(function (item) {
      return item.message.match(/Foo/)
    });//过滤器
   }
 }
</script>