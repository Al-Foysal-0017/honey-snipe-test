import React, { ReactNode } from 'react';
import styles from './container.module.css';

interface ContainerProps {
  children: ReactNode;
  className?: string; 
}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <div className={styles.container}>
      <main className={className || ''}>{children}</main>
    </div>
  );
};

export default Container;

