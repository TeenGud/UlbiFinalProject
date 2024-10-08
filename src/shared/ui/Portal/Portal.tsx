import React from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
    children: React.ReactNode;
    element?: Element;
}
export const Portal = ({ children, element = document.body }: PortalProps) => createPortal(children, element);
