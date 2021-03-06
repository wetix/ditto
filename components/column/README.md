# @responsive-ui/column

> A column component of responsive-ui.

<p>

[![Svelte v3](https://img.shields.io/badge/svelte-v3-orange.svg)](https://svelte.dev)
[![npm](https://img.shields.io/npm/v/@responsive-ui/column.svg)](https://www.npmjs.com/package/@responsive-ui/column)
[![Bundle Size](https://badgen.net/bundlephobia/minzip/%40responsive-ui%2Fcolumn)](https://bundlephobia.com/result?p=@responsive-ui/column)
[![download](https://img.shields.io/npm/dw/@responsive-ui/column.svg)](https://www.npmjs.com/package/@responsive-ui/column)
[![LICENCE](https://img.shields.io/github/license/wetix/responsive-ui)](https://github.com/wetix/responsive-ui/blob/master/LICENSE)

</p>

## Install

```console
npm install @responsive-ui/column
```

or

```console
yarn add @responsive-ui/column
```

## Look and Feel

<img src="https://user-images.githubusercontent.com/28108597/104026779-618ce280-5201-11eb-97ae-ca4af129b4c0.png"
alt="@responsive-ui/column" />

## Properties, Events & Slots

```ts
type Device = {
  sm?: number;
  md?: number;
  xs?: number;
  lg?: number;
};

interface ColumnProps {
  span?: number | Device;
  justify?: string;
  class?: string;
  style?: string;
}

interface ColumnEvents {}

interface ColumnSlots {
  default: {};
}

declare class Column extends SvelteComponentTyped<
  ColumnProps,
  ColumnEvents,
  ColumnSlots
> {}
```

## Example

```svelte
<script>
  import Row from '@responsive-ui/row';
  import Column from '@responsive-ui/column';
</script>

<Row>
  <Column span={12}>Left</Column>
  <Column span={12}>Right</Column>
</Row>
```

## Sponsors

<img src="https://asset.wetix.my/images/logo/wetix.png" alt="WeTix" width="240px">

## License

[@responsive-ui/column](https://github.com/wetix/responsive-ui/tree/master/components/column) is 100% free and open-source, under the [MIT license](https://github.com/wetix/responsive-ui/blob/master/LICENSE).

## Big Thanks To

Thanks to these awesome companies for their support of Open Source developers ❤

[![GitHub](https://jstools.dev/img/badges/github.svg)](https://github.com/open-source)
[![NPM](https://jstools.dev/img/badges/npm.svg)](https://www.npmjs.com/)
