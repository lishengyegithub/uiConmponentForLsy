<template>
  <el-container style="height: 100%; border: 1px solid #eee">
    <!-- el-aside -->
    <el-aside
      width="200px"
      style="background-color: rgb(238, 241, 246); height: 100%"
    >
      <el-menu :default-openeds="['1', '3']">
        <!-- 循环体 -->
        <el-sub-menu
          :index="(index + 1).toString()"
          v-for="(item, index) in menuGroup"
          :key="index"
        >
          <template #title
            ><i class="el-icon-message"></i>{{ item.title }}</template
          >
          <template v-if="item.children.length > 0">
            <template v-for="(ele, eleIndex) in item.children" :key="eleIndex">
              <el-menu-item-group v-if="ele.domType === 'group'">
                <template #title>{{ ele.title }}</template>
                <template v-if="ele.children.length > 0">
                  <el-menu-item
                    v-for="(lastGroup, next) in ele.children"
                    :key="next"
                    :index="
                      index +
                      1 +
                      '-' +
                      handleIndex(item.children, eleIndex) +
                      (next + 1)
                    "
                    >{{ lastGroup.title }}</el-menu-item
                  >
                </template>
              </el-menu-item-group>
              <el-sub-menu
                :index="
                  index +
                  1 +
                  '-' +
                  handleIndex(item.children, eleIndex) +
                  (0 + 1)
                "
                v-if="ele.domType === 'sub'"
                :title="ele.title"
                ><template #title>{{ ele.title }}</template>
                <template v-if="ele.children.length > 0">
                  <el-menu-item
                    :index="
                      index +
                      1 +
                      '-' +
                      handleIndex(item.children, eleIndex) +
                      (indexLast + 1)
                    "
                    v-for="(last, indexLast) in ele.children"
                    :key="indexLast"
                    >{{ last.title }}</el-menu-item
                  >
                </template>
              </el-sub-menu>
            </template>
          </template>
        </el-sub-menu>
      </el-menu>
    </el-aside>
    <!-- el-container -->
    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>View</el-dropdown-item>
              <el-dropdown-item>Add</el-dropdown-item>
              <el-dropdown-item>Delete</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
        <span>Tom</span>
      </el-header>
      <!-- el-main -->
      <el-main>
        <el-table :data="tableData">
          <el-table-column prop="date" label="Date" width="140">
          </el-table-column>
          <el-table-column prop="title" label="Title" width="auto">
          </el-table-column>
        </el-table>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const item = {
      date: "2016-05-02",
      title: "Tom,No. 189, Grove St, Los Angeles",
    };

    const tableData = ref(Array(40).fill(item));

    const menuGroup = [
      {
        title: "Navigator One",
        children: [
          {
            domType: "group",
            title: "Group 1",
            children: [
              { title: "Option 1", children: [] },
              { title: "Option 2", children: [] },
            ],
          },
          {
            domType: "group",
            title: "Group 2",
            children: [{ title: "Option 3", children: [] }],
          },
          {
            domType: "sub",
            title: "Group 3",
            children: [{ title: "Option 3", children: [] },{ title: "Option 4", children: [] },{ title: "Option 5", children: [] }],
          },
        ],
      },
      {
        title: "Navigator Two",
        children: [
          {
            domType: "group",
            title: "Group 1",
            children: [
              { title: "Option 1", children: [] },
              { title: "Option 2", children: [] },
            ],
          },
          {
            domType: "group",
            title: "Group 2",
            children: [{ title: "Option 3", children: [] }],
          },
          {
            domType: "sub",
            title: "Group 3",
            children: [{ title: "Option 3", children: [] }],
          },
        ],
      },
    ];

    return {
      tableData,
      menuGroup,
    };
  },
  methods: {
    handleIndex(itemChildren, eleIndex) {
      // this.$nextTick(() => {
      var start = 0;
      for (let index = 0; index < eleIndex; index++) {
        start = start + itemChildren[eleIndex].children.length;
      }
      console.log(typeof start, start, 999);
      return start;
      // });
    },
  },
});
</script>

<style>
.el-header {
  background-color: #b3c0d1;
  color: var(--el-text-color-primary);
  line-height: 60px;
}

.el-aside {
  color: var(--el-text-color-primary);
}
.el-menu {
  height: 100%;
}

.el-table__body-wrapper {
  height: calc(100vh - 150px);
  /* height: calc(100% - 110px); */
  /* overflow: scroll; */
  overflow-y: scroll;
}
</style>