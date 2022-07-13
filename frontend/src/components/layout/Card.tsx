import { ReactNode } from 'react';
import styles from './Layout.module.css';

interface CardProps {
  title?: string;
  children?: ReactNode;
  xl?: string;
  md?: string;
  sm?: string;
  xs?: string;
}

export const Card = ({ title, children, xl, md, sm, xs }: CardProps) => {
  return (
    <div className={`col-xl-${xl} col-md-${md} col-sm-${sm} col-xs-${xs}`}>
      <div className={`mt-5 card shadow ${styles.card}`}>
        <div className="card-header">
          <h5 className="card-title text-center">{title}</h5>
        </div>
        <div className="card-body m-3">
          {children}
        </div>
      </div>
    </div>
  )
}