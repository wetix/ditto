<script lang="ts">
  import Select from "./MultipleSelect.svelte";
  import type { SelectOption } from "../types";

  let className = "";
  export { className as class };
  export let value: string | string[] = "";
  export let size = 10;
  export let multiple = false;
  export let disabled = false;
  export let readonly = false;
  export let options: SelectOption[] = [];

  // if not multiple, enforce it to size 1
  if (!multiple) size = 1;
</script>

{#if multiple}
  <Select {...$$props} {size} class={className} on:change on:blur />
{:else}
  <select
    {...$$restProps}
    class="responsive-ui-select {className}"
    {size}
    {readonly}
    {disabled}
    on:change
    on:blur
  >
    {#each options as option}
      <option
        value={option.value}
        selected={option.value === value}
        disabled={option.disabled}>{option.label}</option
      >
    {/each}
  </select>
{/if}

<style lang="scss">
  .responsive-ui-select {
    display: block;
    width: 100%;
    border: 1px solid #f1f1f1;
    border-radius: var(--border-radius, 5px);
    font-size: var(--font-size, 14px);
    font-family: var(--font-family, inherit);
    height: var(--height, 34px);
    color: #1a1b1c;
    padding: 0 10px;
    background: #f1f1f1;
    outline: none;
    box-sizing: border-box;
    /* hide arrow */
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;

    &::-ms-expand {
      display: none;
    }
  }
</style>
