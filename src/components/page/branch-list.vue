<template>
    <section class="public" id="publicSoft">
        <div class="contlist" v-for="item in parentToChild">
          <h2>{{item.parentName}}</h2>
          <ul>
            <li v-for="item in item.subList">
            <router-link :to="'./'+pre+'Detail?id='+item.id">{{item.name}}</router-link>
            </li>
          </ul>
        </div>
    </section>
</template>

<script>
export default{
    data(){
        return {
        }
    },
    props:["parentToChild"],
}
</script>