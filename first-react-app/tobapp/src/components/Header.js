export function Header(props) {
    const { name, color, fruit, className } = props;
    return (
      <h1 className={className}>
        {name} is {color} like a {fruit}
      </h1>
    );
  }