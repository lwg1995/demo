<template>
    <div class="ipt">
        <span>输入框1</span><input type="text" :value="ipt.p1">
    </div>
</template>

<script>

export default {
    name:"Cinput",
    components: {

    },
    props:{
        ipt:{
            p1:String,
            p2:String,
        }
    },
    data() {
        return {
            msg:'子组件的值：123',
        };
    },
    methods: {

    },
    created() {
        this.$emit('child',this.msg);
    },
    mounted() {
        // console.log(this.ipt);
        // console.log(this.ipt.p1);
        // console.log(this.ipt.p2);
    },
}
</script>
<style scoped>
    .ipt{
        height: 300px;
    }
</style>