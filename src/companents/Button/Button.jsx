import "./style.css";

const Button = (props) => {
     return <button style={{
          backgroundColor: props.bg
     }} className='Button' onClick={props.onClick}>

          {props.title === undefined ? "Button":props.title}
     </button>;
};

export default Button;
