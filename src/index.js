import Button from "./components/Button.js";

export default {
  components: {
    Button: {
      code: Button,
      props: {
        label: {
          type: "string",
          default: "Label"
        }
      }
    }
  }
};
