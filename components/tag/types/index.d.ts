import type { SvelteComponentTyped } from "svelte/internal";

export interface TagProps {
  class?: string;
}

export interface TagEvents {}

export interface TagSlots {
  default: {};
}

declare class Tag extends SvelteComponentTyped<TagProps, TagEvents, TagSlots> {}

export default Tag;
