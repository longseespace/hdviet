import camelCase from 'lodash/camelCase';
import flow from 'lodash/fp/flow';
import reduce from 'lodash/fp/reduce';
import cappedMap from 'lodash/fp/map';
const map = cappedMap.convert({ cap: false });

export const newModelFromJson = flow(
  map((value, key) => ({ key: camelCase(key), value })),
  reduce((accumulator, { key, value }) => ({
    ...accumulator,
    [key]: value,
  }), {})
);
