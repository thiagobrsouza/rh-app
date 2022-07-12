import { ReactNode } from "react";

interface DialogProps {
  id?: string;
  title?: string;
  children?: ReactNode;
}

export const Dialog = ({ id, title, children }: DialogProps) => {
  return (
    <div className="modal fade" id={id} tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">{title}</h5>
          </div>
          <div className="modal-body">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}