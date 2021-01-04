<script lang="ts">
  import type { TableColumn, TableItem } from "../types";

  let className = "";
  export { className as class };
  export let columns: TableColumn[] = [];
  export let items: Array<TableItem> = [];
  export let striped = false;
  export let bordered = true;
  export let style = "";

  const getValue = (i: number, data = {}, path = "") => {
    const { value = (v: any) => v } = columns[i];
    return value(
      path
        .split(".")
        .reduce(
          (acc: Record<string, any>, cur: string) =>
            cur in acc ? acc[cur] : "",
          data
        ),
      data
    );
  };
</script>

<style lang="scss">
  .responsive-ui-table {
    position: relative;
    border: 1px solid transparent;
    overflow-y: auto;
    font-size: 14px;
    font-weight: normal;
    border-radius: 5px;

    table {
      min-width: 100%;
      border-collapse: collapse;
      table-layout: auto;
      overflow: visible;

      thead {
        text-align: left;

        tr {
          color: #9e9e9e;
          border-bottom: 1px solid #e1e1e1;
        }

        td {
          &.center {
            text-align: center;
          }

          &.right {
            text-align: right;
          }
        }
      }

      tbody {
        overflow: auto;
        height: 200px;
        width: 100%;
        color: #000;

        tr {
          cursor: pointer;
          &:not(:last-child) {
            border-bottom: 1px solid #e1e1e1;
          }

          &:hover {
            background: #f5f5f5;
          }
        }
      }

      th,
      td {
        font-weight: normal;
        padding: 10px;
        white-space: nowrap;
        vertical-align: middle;
      }

      td {
        padding: 6px 10px;
      }

      .responsive-ui-table__column--align-center {
        text-align: center;
      }
    }

    &__bordered {
      border-color: #e1e1e1;
    }

    &__striped {
      tr:nth-child(odd) td {
        background: #f5f5f5;
      }
    }

    // .loading {
    //   position: absolute;
    //   top: 0;
    //   right: 0;
    //   background: rgba(255, 255, 255, 0.8);
    //   left: 0;
    //   bottom: 0;
    // }
  }
</style>

<div
  class="responsive-ui-table {className}"
  class:responsive-ui-table__bordered={bordered}>
  <table class:responsive-ui-table__striped={striped} {style}>
    <thead>
      <tr>
        {#each columns as column}
          <th
            class="responsive-ui-table__column--align-{column.align || 'left'}"
            style="width:{column.width ? column.width : 'none'}">
            {column.title}
          </th>
        {/each}
      </tr>
    </thead>
    <tbody>
      {#each items as item, i}
        <slot name="row" index={i} {item}>
          <tr>
            {#each columns as column, j}
              <td
                class="responsive-ui-table__column--align-{column.align || 'left'}">
                {#if column.component}
                  <svelte:component this={column.component} {...item} />
                {:else}
                  <div>{getValue(j, item, column.key)}</div>
                {/if}
              </td>
            {/each}
          </tr>
        </slot>
      {/each}
    </tbody>
  </table>
  <!-- {#if loading}
    <div class="loading" />
  {/if} -->
</div>