<template>
    <div>
        <table id="table" ref="table" @click=clickGrid>
            <tr>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        </table>
    </div>
</template>

<script setup lang="ts">
import { ref,onMounted } from 'vue';
const table = ref(document.getElementById('table') as HTMLTableElement);
const test = ref();

function giveNumber(){
    for (var i=0; i < table.value.rows.length; i++) {
        for (var j=0; j < table.value.rows[i].cells.length; j++) {
            console.log([i,j]);
        }
    }
}

function clickGrid(){
    console.log(table.value);
}

onMounted(() => {
    giveNumber();
});
</script>

<style scoped>
#table{
    margin:0 auto;
    border-collapse: collapse;
    border: 3px solid #ccc;
}

#table td{
    border:1px solid #ccc;
    height: 80px;
    width: 80px;
    text-align: center;
    vertical-align: middle;
    font-size: 75px;
    cursor: pointer;
}
</style>