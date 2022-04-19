import Component from "./Component.js";

class InputComponent extends Component {
  constructor(parentElement, className) {
    super(parentElement, "input", className);
    this.element.type = "text";
  }
}

export default InputComponent;
