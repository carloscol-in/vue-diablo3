<template>
    <div class="header-bar">
        <div class="navigation-bar">
            <b-navbar toggleable="lg" type="dark" variant="dark">
                <b-navbar-brand :to="{ name: 'Home' }">
                    <img src="@/assets/img/diablo-iii.svg" alt="Diablo 3 Logo">
                    <span class="font-diablo ml-2">Diablo 3 PF</span>
                </b-navbar-brand>
            </b-navbar>
        </div>
    </div>
</template>

<script>
export default { nane: 'HeaderBar' }
</script>
