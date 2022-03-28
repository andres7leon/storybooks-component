/// <reference types="react" />
import './mylabel.css';
export interface MyLabelProps {
    /**
     * Este es el mensaje a mostrar
     */
    label?: string;
    /**
     * El tamano del texto
     */
    size?: 'normal' | 'h1' | 'h2' | 'h3';
    /**
     * Mayusculas o Minisculas
     */
    allCaps?: boolean;
    /**
     * Mayusculas o Minisculas
     */
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
     * Custom Color
     */
    colorCustom?: string;
    /**
     * Custom Color
     */
    test?: string;
}
export declare const MyLabel: ({ label, size, allCaps, color, colorCustom, test }: MyLabelProps) => JSX.Element;
