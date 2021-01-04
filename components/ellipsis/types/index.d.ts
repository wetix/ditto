import type { SvelteComponentTyped } from "svelte/internal";

export interface EllipsisProps {
  // width?: number | string;
}

export interface EllipsisEvents {
  click?: void;
}

export interface EllipsisSlots {
  default: {};
}

declare class Ellipsis extends SvelteComponentTyped<
  EllipsisProps,
  EllipsisEvents,
  EllipsisSlots
> {}

export default Ellipsis;