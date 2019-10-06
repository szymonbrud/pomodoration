import checkPropTypes from 'check-prop-types';

export const findByTestAtrr = (component, attr) => {
  const wrapper = component.find(`[data-test='${attr}']`);
  return wrapper;
};

export const checkProps = (component, expectedProps) => {
  const propsErr = checkPropTypes(component.propTypes, expectedProps, 'props', component.name);
  return propsErr;
};

// TODO: zmienić nazwę folderu na testHelpers myślę że będzie lepiej pasować. Ale zanim to to spawdzić w necie czy to napewno są chelery
