import { _render } from './render';
function setComponentProps(component, props) {
  if (!component.base && component.componentWillMount) {
    component.componentWillMount();
  } else if (component.base && component.componentWillUpdate) {
    component.componentWillUpdate();
  }
  component.props = props;
  _renderComponent(component);
}


function createComponent(component, props) {
  return new component(props);
}

function _renderComponent(component) {
  let base;
  base = _render(component.render());
  component.base = base;
  base._component = component;
}

export {
  createComponent,
  setComponentProps,
}