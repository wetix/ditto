import type { SvelteComponentTyped } from "svelte/internal";

export type SelectOption = {
  label: string;
  disabled?: boolean;
  value: any;
};

interface SelectProp {
  ref?: null | HTMLSelectElement;
  name?: string;
  size?: number;
  disabled?: boolean;
  readonly?: boolean;
  options: SelectOption[];
}

interface SingleSelectProps extends SelectProp {
  value?: string;
  multiple: false | undefined;
}

interface MultipleSelectProps extends SelectProp {
  value?: string[];
  multiple: true;
}

export type SelectProps = SingleSelectProps | MultipleSelectProps;

export interface SelectEvents {
  change?: any;
  blur?: any;
}

declare class Select extends SvelteComponentTyped<SelectProps, SelectEvents> {}

export default Select;
