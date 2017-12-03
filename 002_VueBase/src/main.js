import Vue from 'vue'
import App from './App.vue'
import HelloWorld from './01_helloWorld/HelloWorld.vue'
import Hover from './02_hover/Hover.vue'
import vif from './03_vif/v-if.vue'
import vfor from './04_vfor/v-for.vue'
import input from './05_input/input.vue'
import multbind from './06_multbind/multbind.vue'
import mycomponent from './07_component/component.vue'
import vonce from './08_vonce/v-once.vue'
import rawHtml from './09_rawHtml/rawHtml.vue'
import vbind from './10_vbind/v-bind.vue'
import expression from './11_expression/expression.vue'
import compute from './12_compute/compute.vue'
import listeningProperties from './13_listeningProperties/listeningProperties.vue'
import vbindClassObject from './14_vbindClassObject/vbindClassObject.vue'
import vbindClassArray from './15_vbindClassArray/vbindClassArray.vue'
import componentClass from './16_componentClass/componentClass.vue'
import inlineStyle from './17_inlineStyle/inlineStyle.vue'
import templatevif from './18_template-vif/template-vif.vue'
import keyvif from './19_key-vif/key-vif.vue'
import changeArray from './20_changeArray/changeArray.vue'

Vue.config.devtools = true;
console.log("Vue Version " +Vue.version );

var vm = new Vue({
  el: '#app',
  render: h => h(mycomponent)
})
