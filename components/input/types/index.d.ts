import type { SvelteComponentTyped } from "svelte/internal";

export interface InputProps {
  ref?: null | HTMLInputElement;
  class?: string;
  id?: string;
  name?: string;
  type?: string;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  readonly?: boolean;
  size?: number;
  maxlength?: number;
  value?: any;
  required?: boolean;
  style?: string;
}

export interface InputEvents {
  change?: any;
  input?: any;
  blur?: any;
  enter?: any;
}

declare class Input extends SvelteComponentTyped<InputProps, InputEvents> {}

export default Input;
