styles = {
  img: {
    zIndex: 20,
    position: "absolute",
    bottom: "1em",
    right: "1em",
  },
}


exports.decorateConfig = (config) => {
  return Object.assign({}, config, {
    cursorColor: 'cyan',
  });
}

exports.decorateTerm = (Term, { React, notify }) => {
    return class extends React.Component {
        render () {
            const children = [
                 React.createElement("img", {style: styles.img, src: "/Users/coju/.hyper_plugins/local/mirei/img/puch-mirei.png"}),
                 React.createElement(Term, this.props),
            ];
            return React.createElement("div", null, children);
        }
    }
}
