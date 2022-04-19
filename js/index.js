/* eslint-disable no-unused-vars */
import Component from "./classes/Component.js";
import ButtonComponent from "./classes/ButtonComponent.js";
import InputComponent from "./classes/InputComponent.js";

const { body } = document;

const testButton = new ButtonComponent(
  body,
  "send-button",
  "este button envia"
);
const testImputText = new InputComponent(body, "top-input");

const componentNew = new Component(body, "p", "itens");

export default componentNew;
