<template>
    <div id="toast">
         <div class="userTip">{{parentToChild2}}</div>
    </div>
</template>

<script>
    export default{
        name:"toast",
        data(){
            return {
            }            
        },
        props:["parentToChild2"],
    }
</script>