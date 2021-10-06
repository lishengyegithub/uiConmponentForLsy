<template>
  <div id="radio">
    <el-radio v-model="radio" label="禁用">备选项</el-radio>
    <el-radio v-model="radio" label="选中且禁用">备选项</el-radio>
  </div>
</template>

<script>
export default {
  name: "Radio",
  props: {
    msg: String,
  },
  setup(props) {
    return props;
  },
  data() {
    return {
      radio: "",
    };
  },
  methods: {},
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {},
  beforeUpdate() {
    //   在数据发生改变后，DOM 被更新之前被调用。这里适合在现有 DOM 将要被更新之前访问它，比如移除手动添加的事件监听器
  },
  updated() {
    // 在数据更改导致的虚拟 DOM 重新渲染和更新完毕之后被调用。
    // 当这个钩子被调用时，组件 DOM 已经更新，所以你现在可以执行依赖于 DOM 的操作。
    // 然而在大多数情况下，你应该避免在此期间更改状态。如果要相应状态改变，通常最好使用计算属性或侦听器取而代之
    // 注意，updated 不会保证所有的子组件也都被重新渲染完毕。
    // 如果你希望等待整个视图都渲染完毕，可以在 updated 内部使用 vm.$nextTick：
    this.$nextTick(function () {
      // 仅在整个视图都被重新渲染完毕之后才会运行的代码
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
:deep() .el-radio__input.is-checked .el-radio__inner::after {
  content: "";
  width: 10px;
  height: 5px;
  border: 2px solid white;
  border-top: transparent;
  border-right: transparent;
  text-align: center;
  display: block;
  position: absolute;
  top: 4px;
  left: 3px;
  vertical-align: middle;
  transform: rotate(-45deg);
  border-radius: 0px;
  background: none;
}
</style>
