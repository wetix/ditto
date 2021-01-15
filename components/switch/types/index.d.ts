import type { SvelteComponentTyped } from "svelte/internal";

export interface SwitchProps {
  checked?: boolean;
  disabled?: boolean;
}

export interface SwitchEvents {
  change?: any;
}

declare class Switch extends SvelteComponentTyped<SwitchProps, SwitchEvents> {}

export default Switch;
