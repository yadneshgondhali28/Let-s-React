
function customRender(reactElement, container) {
  const domElement = document.createElement(reactElement.type);

  const props = reactElement.props;
  for (const prop in props) {
    if (prop === "children") continue
    domElement.setAttribute(prop, props[prop]);
  }

  domElement.innerHTML = reactElement.children;

  container.appendChild(domElement);

}

const reactElement = {
  type: 'a',
  props: {
    href: "https://WWW.google.com",
    target: "_blank",
  },
  children: "Click this link to visit google",
}

const mainContainer = document.getElementById("root");

customRender(reactElement, mainContainer);