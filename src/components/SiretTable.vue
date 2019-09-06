<template>

    <div>
        <v-card v-if="companie !== null" class="mx-auto" color="primary" dark>
            <v-card-title class="headline font-weight-bold">{{ companie.uniteLegale.denominationUniteLegale }}</v-card-title>
            <v-card-text>
                <v-layout><span class="font-weight-bold">SIREN:&nbsp;</span>{{ companie.siren }}</v-layout>
                <v-layout><span class="font-weight-bold">NIC:&nbsp;</span>{{ companie.nic }}</v-layout>
                <v-layout>
                    <span class="font-weight-bold">Adresse:&nbsp;</span>
                    {{ companie.adresseEtablissement.numeroVoieEtablissement }}
                    {{ companie.adresseEtablissement.typeVoieEtablissement }}
                    {{ companie.adresseEtablissement.libelleVoieEtablissement }}
                    {{ companie.adresseEtablissement.codePostalEtablissement }}
                    {{ companie.adresseEtablissement.libelleCommuneEtablissement }}
                </v-layout>
            </v-card-text>
            <v-card-actions>
                <v-layout align-center justify-end>
                    <div class="text-xs-center">
                        <v-btn round color="success" dark>Valider</v-btn>
                    </div>
                </v-layout>
            </v-card-actions>
        </v-card>
    </div>

</template>

<script>

export default {
    name: "SiretTable",
    data() {
        return {
            
        }
    },
    computed: {
        companie() {
            let companie = this.$store.state.siret.companie;
            return companie
        }
    },
    methods: {
        
    },
    mounted() {
        console.log('mounted', this.$store.state);
    }
}
</script>

<style scopped>

</style>
