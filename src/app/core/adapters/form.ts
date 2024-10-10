import { IButton } from "./button";

export interface IForm {
  name: string;
  buttonAlignment?: 'start' | 'center' | 'end';
  button?: IButton;
  buttons?: IButton[];
  fields?: IInputField[] | undefined;
};

export type InputType = 'text' | 'email' | 'number' | 'password' | 'search' | 'tel' | 'url'
  | 'select' | 'datalist' | 'multiselect' | 'textarea' | 'checkbox' | 'radio' | 'switch'
  | 'file' | 'multiplefile' | 'date' | 'month' | 'week' | 'time' | 'datetime-local' | 'color'
  | 'range';
export type InputSize = 'lg' | 'md' | 'sm';
export type InputShape = 'rounded' | '';
export type InputLayout = 'horizontal' | 'vertical';
export type InputGroupAction = 'password' | 'search' | '';
export interface InputOption {
  label: string;
  value: InputOptionValue;
}
export type InputOptionValue = string | number | boolean | null;

export interface IInputField {
  id?: string | undefined;
  type: InputType;
  size?: InputSize | undefined;
  shape?: InputShape | undefined;
  placeholder?: string | undefined;
  readonly?: boolean | undefined;
  disabled?: boolean | undefined;
  floating?: boolean | undefined;
  options?: InputOption[] | undefined;
  selectedOption?: InputOption | null | undefined;
  selectedOptionValue?: InputOptionValue | undefined;
  plaintext?: boolean | undefined;
  rows?: number | undefined;
  checked?: boolean | undefined;
  inline?: boolean | undefined;
  accept?: string | undefined;
  inputGroupAction?: InputGroupAction | undefined;
  inputContainercssClass?: string | undefined;
  labelcssClass?: string | undefined;
  inputcssClass?: string | undefined;
  layout?: InputLayout | undefined;
  layoutcssClass?: string | undefined;
  labelWidth?: number | undefined;
  inputWidth?: number | undefined;

  label?: any;
  helpText?: any;
  startInputGroupHTML?: any;
  endInputGroupHTML?: any;
  startInputGroupContent?: any;
  endInputGroupContent?: any;

  toogleActionClick?: () => void;
}
