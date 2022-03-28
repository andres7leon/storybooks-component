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

export const MyLabel = ( {label = 'No Label ', size = 'normal', allCaps = false, color = 'primary', colorCustom = 'black', test = 'todo bien'}: MyLabelProps ) => {
  return (
    <div>
      <span className={`label ${size} text-${color}`} style={{color: colorCustom}}>
          { allCaps ?  label.toUpperCase() : label}
      </span>
      <small>{test}</small>
    </div>
  )
}


export default MyLabel;