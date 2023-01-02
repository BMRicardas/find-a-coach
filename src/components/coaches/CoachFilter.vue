<template>
  <base-card>
    <h2>Find Your Coach</h2>
    <span class="filter-options" v-for="filter in filters" :key="filter">
      <input type="checkbox" :id="filter" checked @change="setFilter" />
      <label :for="filter">{{ this.capitalize(filter) }}</label>
    </span>
  </base-card>
</template>

<script>
import { filters } from './filters';

export default {
  emits: ['change-filter'],
  data() {
    return {
      filters,
      activeFilters: {
        frontend: true,
        backend: true,
        career: true,
      },
    };
  },
  methods: {
    capitalize(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
    setFilter({ target }) {
      const inputId = target.id;
      const isActive = target.checked;
      const updatedFilters = {
        ...this.activeFilters,
        [inputId]: isActive,
      };
      this.activeFilters = updatedFilters;
      this.$emit('change-filter', updatedFilters);
    },
  },
};
</script>

<style scoped>
h2 {
  margin: 0.5rem 0;
}

.filter-option {
  margin-right: 1rem;
}

.filter-option label,
.filter-option input {
  vertical-align: middle;
}

.filter-option label {
  margin-left: 0.25rem;
}

.filter-option.active label {
  font-weight: bold;
}
</style>
