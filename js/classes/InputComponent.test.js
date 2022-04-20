import InputComponent from "./InputComponent.js";

describe("Given the InputComponent class", () => {
  describe("When an parentElement of 'body' is inputted", () => {
    test("Then a text input component will be created inside the document's body", () => {
      const containerName = "body";
      document.createElement(containerName);
      const parentElement = document.querySelector(containerName);

      const typeOfContainer = "input";
      const createdElement = new InputComponent(parentElement, "");
      const expectedResult = document.querySelector(
        `${containerName} ${typeOfContainer}`
      );

      expect(expectedResult).toMatchObject(createdElement.element);
    });
  });
  describe("When the user inputs 'Hola este es mi nuevo test' in the input component", () => {
    test("Then the document will contain 'Hola este es mi nuevo test'", () => {
      // Assert
      const containerName = "body";
      document.createElement(containerName);
      const parentElement = document.querySelector(containerName);
      const inputtedText = "Hola este es mi nuevo test";

      // Act
      const createdElement = new InputComponent(parentElement, "");
      createdElement.element.textContent = inputtedText;
      const textContentOfElement = document.querySelector(
        `${containerName} input`
      ).textContent;

      // Assess
      expect(textContentOfElement).toEqual(inputtedText);
    });
  });
});
