// json.ts
import Json from '../../assets/**/*.json';

const keyList1 = [];
function _iterate(obj, stack) {
  for (const property in obj) {
    if (obj.hasOwnProperty(property)) {
      if (typeof obj[property] === 'object') {
        _iterate(obj[property], stack + '.' + property);
        // console.log(obj[property], stack + '.' + property);
      } else {
        const keys = {};
        keys[property] = obj[property];
        console.log(keys);
        keyList1.push(keys);
      }
    }
  }

  return keyList1;
}

// Json.bestandsnaam wordt gekoppeld aan de json, bv   Json.atlas > atlas.png
export default Object.assign(..._iterate(Json, ''));
