
const Input = (props) => {
  return (
    <div className="input">
          <input type={props.type} placeholder={props.pl} 
          value={props.value}
          onChange={props.onChange}/>
    </div>
  )
}

export default Input;
