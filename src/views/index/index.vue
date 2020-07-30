<template>
  <div class="index">
    <!--数据统计-->
    <el-row :gutter="20">
      <el-col :span="6" v-for="(item,index) in counts" :key="index">
        <el-card class="box-card" shadow="hover">
          <div class="d-flex align-items-center">
            <i
              :class="[item.icon,item.color]"
              class="h4 mb-0 text-white text-center mr-3"
              style="width:40px;height:40px;line-height:40px"
            ></i>
            <div>
              <h4 class="mb-1">{{item.num}}</h4>
              <small class="text-muted">{{item.desc}}</small>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>

    <!--店铺、订单统计 | 统计图-->
    <el-row :gutter="20" class="mt-3">
      <!--店铺、订单信息-->
      <el-col
        :span="12"
        class="d-flex flex-column"
        style="height: 370px;justify-content: space-between;"
      >
        <el-card class="box-card" shadow="never" v-for="(tip,ti) in tips" :key="ti">
          <div slot="header" class="clearfix">
            <span>{{tip.title}}</span>
            <el-button style="float:right;padding:5px 0" type>{{tip.desc}}</el-button>
          </div>
          <div class="row">
            <div :class="tip.list.length|getCol" 
            v-for="(tlist,listi) in tip.list" :key="listi">
              <button class="btn btn-light w-100">
                <h4 class="mb-1">{{tlist.value}}</h4>
                <small class="text-muted">{{tlist.name}}</small>
              </button>
            </div>
          </div>
        </el-card>
      </el-col>

      <!--统计图-->
      	<el-col :span="12">
				<el-card class="box-card" style="height: 370px;" 
				shadow="never">
					<div slot="header" class="clearfix">
						<span>卡片名称</span>
						<el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
					</div>
					<div class="text item"></div>
				</el-card>
			</el-col>
		</el-row>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counts: [
        {
          icon: "el-icon-user-solid",
          desc: "关注人数(个)",
          num: "30",
          color: "bg-primary",
        },
        {
          icon: "el-icon-s-finance",
          desc: "订单总数(笔)",
          num: "120",
          color: "bg-success",
        },
        {
          icon: "el-icon-s-order",
          desc: "今日订单总金额(元)",
          num: "4183.80",
          color: "bg-danger",
        },
        {
          icon: "el-icon-s-data",
          desc: "本月销量(笔)",
          num: "100",
          color: "bg-warning",
        },
      ],
      tips: [
        {
          title: "店铺及商品提示",
          desc: "需要关注的店铺信息及待处理事项",
          list: [
            { name: "出售中", value: "126" },
            { name: "出售中", value: "94" },
            { name: "出售中", value: "104" },
            { name: "出售中", value: "154" },
          ],
        },
        {
          title: "店铺及商品提示",
          desc: "需要关注的店铺信息及待处理事项",
          list: [
            { name: "出售中", value: "86" },
            { name: "出售中", value: "79" },
            { name: "出售中", value: "115" },
            { name: "出售中", value: "98" },
            { name: "出售中", value: "163" },
            { name: "出售中", value: "135" },
          ],
        },
      ],
    };
  },
  filters: {
    getCol(total) {
      return `col-${12 / total}`;
    },
  },
};
</script>

<style>
</style>