const Die = (props) => {
    // return pretty version of die value
    return (
      //2 class container geneeral outlook of die, side determines span styling
      <div className={`die-container side-${props.side}`}>
        {
          //spread operator to produce array of numbers of sides
          [...Array(props.side).keys()].map((item) => {
            return <span key={item}></span>;
          })
        }
      </div>
    );
  };
  
  export default Die;
  