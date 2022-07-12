import { ReactNode } from 'react';
import styles from './Layout.module.css';

interface CardProps {
  title?: string;
  children?: ReactNode;
}

export const Card = ({title, children}: CardProps) => {
  return (
    <div className={`mt-5 card shadow ${styles.card}`}>
      <div className="card-header">
        <h5 className="card-title text-center">{title}</h5>
      </div>
      <div className="card-body m-3">
        {children}
      </div>
    </div>
  )
}