import { SelectHTMLAttributes } from "react";

interface SelectFormProps extends SelectHTMLAttributes<HTMLSelectElement> {
  xl?: string;
  lg?: string;
  md?: string;
  sm?: string;
  xs?: string;
  label?: string;
  type?: string;
  id?: string;
}

export const SelectForm = ({ xl, lg, md, sm, xs, label, id, children, ...props }: SelectFormProps) => {
  return (
    <div className={`mb-3 col-xl-${xl} col-lg-${lg} col-md-${md} col-sm-${sm} col-xs-${xs}`}>
      <select className="form-select" id={id} aria-label="Floating label select example" {...props}>
        {children}
      </select>
    </div>
  )
}