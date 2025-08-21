import { useEffect } from "react";

import { Tab as TabBI } from "bootstrap-italia";

function TabButton(props) {
  let instance;
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps, react/destructuring-assignment
    instance = new TabBI(document.getElementById(props.id));
  });
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <a
      {...props}
      onClick={(e) => {
        e.preventDefault();
        instance.show();
      }}
    >
      {
        // eslint-disable-next-line react/destructuring-assignment
        props.children
      }
    </a>
  );
}

export default TabButton;
