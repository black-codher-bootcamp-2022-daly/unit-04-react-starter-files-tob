
export function NavBar(props) {
  const { children, name, color } = props;

  return <ul className={"navbar"}>{props.children}</ul>;
}
