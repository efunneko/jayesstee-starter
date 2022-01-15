import {jst}        from "jayesstee";

//
// Body - Handles all that is the body
//
export class Body extends jst.Component {
  constructor(app, width, height) {
    super();
    this.app           = app;
    this.width         = width;
    this.height        = height;
  }

  cssGlobal() {
    return {
      body: {
        fontFamily:      '"Helvetica Neue", Helvetica, Arial, sans-serif',
        padding$px:      0,
        margin$px:       0
      },
    
    };
  }

  render() {
    return jst.$div(
      {
        id: "body",
        events: {
        },
      },
      "Hello, World!"
      );
  }

  resize(width, height) {
    this.width = width;
    this.height = height;
    this.refresh();
  }


}
