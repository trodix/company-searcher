<template>

    <v-data-table :headers="headers" :items="companies" class="elevation-1">
        <template v-slot:items="props">
            <td>{{ props.item.name }}</td>
        </template>
    </v-data-table>

</template>

<script>
export default {
    name: "SirenTable",
    data() {
        return {
            headers: [
                { text: 'siren', value: 'uniteLegale.siren' },
                { text: 'denominationUniteLegale', value: 'periodesUniteLegale[0].denominationUniteLegale' },
                { text: 'nic', value: 'periodesUniteLegale[0].nicSiegeUniteLegale' },
            ],
            companies: [

            ]
        }
    },
    methods: {
        
    }
}
</script>

<style>

</style>
