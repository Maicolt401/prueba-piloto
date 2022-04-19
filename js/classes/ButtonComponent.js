import Component from "./Component.js";

class ButtonComponent extends Component {
  textButton;

  constructor(parentElement, className, textButton, action) {
    super(parentElement, "button", className);
    this.element.innerText = textButton;

    ButtonComponent.addEventListener("click", (action = () => {}));
    /*
    this.render(); */
  }
  /*
  render() {
    const inputText = inputElement.ButtonComponent;
  }
 */
}

export default ButtonComponent;
