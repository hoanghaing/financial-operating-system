<template>
  <q-drawer show-if-above bordered class="navbar" :width="340">
    <div class="drawer-content column">
      <div class="logo">
        <img src="src\assets\logos\logo.svg" alt="Logo" class="logo" />
      </div>
      <div class="subtitle">
        Trusted way of banking for 3,000+ SMEs and startups in Singapore
      </div>

      <div class="nav-list column">
        <q-item
          v-for="item in navItems"
          :key="item.label"
          clickable
          :to="item.to"
          active-class="active-link"
          class="nav-item"
        >
          <q-item-section avatar>
            <img :src="item.icon" alt="icon" class="nav-icon" />
          </q-item-section>

          <q-item-section>
            <q-item-label class="nav-item-label">{{ item.label }}</q-item-label>
          </q-item-section>
        </q-item>
      </div>
    </div>
  </q-drawer>
</template>
<script setup lang="ts">
export interface navItemLinkProps {
  icon: string;
  label: string;
  to: string;
}

const navItems: navItemLinkProps[] = [
  {
    label: "Home",
    icon: "src/assets/icons/home.svg",
    to: "/",
  },
  {
    label: "Cards",
    icon: "src/assets/icons/card.svg",
    to: "/cards",
  },
  {
    label: "Payments",
    icon: "src/assets/icons/payments.svg",
    to: "/payments",
  },
  {
    label: "Credit",
    icon: "src/assets/icons/credit.svg",
    to: "/credit",
  },
  {
    label: "Settings",
    icon: "src/assets/icons/account.svg",
    to: "/settings",
  },
];
</script>
<style lang="scss" scoped>
::v-deep(.navbar) {
  padding: 48px;
  background: $nav-bar-background;
}
::v-deep(.q-item__section--avatar) {
  min-width: unset;
}
.drawer-content {
  .subtitle {
    font-size: 15px;
    color: $white;
    opacity: 0.3;
    margin-top: 20px;
    margin-bottom: 80px;
  }

  .nav-item {
    &:hover {
      .nav-icon {
        filter: brightness(0) saturate(100%) invert(71%) sepia(51%) saturate(4464%)
          hue-rotate(104deg) brightness(95%) contrast(99%);
        transition: filter 0.2s;
      }
      .nav-item-label {
        color: $text-green;
      }
    }

    .nav-item-label {
      color: $white;
      font-size: 16px;
    }
  }
}
</style>
