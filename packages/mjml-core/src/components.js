import kebabCase from 'lodash/kebabCase'

const components = {}

export function registerComponent(Component) {
  console.log('register component', Component.name);
  components[kebabCase(Component.name)] = Component
}

export function initComponent({ initialDatas, name }) {

  const Component = components[name]
  console.log('Component', Component, components, name);

  if (Component) {
    const component = new Component(initialDatas)

    if (component.headStyle) {
      component.context.addHeadSyle(name, component.headStyle)
    }
    if (component.componentHeadStyle) {
      component.context.addComponentHeadSyle(component.componentHeadStyle)
    }

    return component
  }

  return null
}

export default components
