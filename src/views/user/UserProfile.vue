<template>
    <div>个人信息id={{id}}</div>
</template>

<script>
    export default {
        name: "UserProfile",
        props: ['id'],
        beforeRouteEnter: (to, from, next) => {
            console.log('准备进入个人信息页');
            next();
        },
        beforeRouteLeave: (to, from, next) => {
            console.log('准备离开个人信息页');
            next();
        }
    }
</script>

<style scoped>

</style>