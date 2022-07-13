import { InputHTMLAttributes } from "react";

interface InputFormProps extends InputHTMLAttributes<HTMLInputElement> {
  xl?: string;
  md?: string;
  sm?: string;
  xs?: string;
  id?: string;
}

export const InputForm = ({xl, md, sm, xs, id, ...props}: InputFormProps) => {
  return (
    <div className={`col-xl-${xl} col-md-${md} col-sm-${sm} col-xs-${xs} mb-3`}>
      <input className="form-control" id={id} {...props} />
    </div>
  )
}