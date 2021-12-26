class InputValue {
  $container;
  $label;
  $input;
  $errorMess;
  /**
   *
   * @param {*} type //loai Input truyen vao
   * @param {*} label
   * @param {*} name
   */
  constructor(type, label, name) {
    this.$container = document.createElement("div");
    this.$container.classList.add("input__group");

    this.$input = document.createElement("input");
    this.$input.placeholder = label;
    this.$input.type = type;
    this.$input.name = name;

    this.$errorMess = document.createElement("div");
    this.$errorMess.classList.add("errorMess");
  }

  getInputValue = () => {
    return this.$input.value;
  };

  getInputValue = (newVal) => {
    this.$input.value = newVal;
  };

  setErrorMessage = (messErr) => {
    if (messErr) {
      this.$errorMess.innerHTML = messErr;
      this.$errorMess.classList.add("has-error");
    } else {
      this.$errorMess.innerHTML = "";
      this.$errorMess.classList.remove("has-error");
    }
  };
  Render() {
    this.$container.append(this.$input, this.$errorMess);
    return this.$container;
  }
}
export { InputValue };
