// images.ts
import Images from '../../assets/**/*.png';

const keyList = [];
function _iterate(obj, stack) {
  for (const property in obj) {
    if (obj.hasOwnProperty(property)) {
      if (typeof obj[property] === 'object') {
        _iterate(obj[property], stack + '.' + property);
        // console.log(obj[property], stack + '.' + property);
      } else {
        const keys = {};
        keys[property] = obj[property];
        keyList.push(keys);
      }
    }
  }

  return keyList;
}

// Images.bestandsnaam wordt gekoppeld aan de afbeelding, bv   Images.speler > speler.png
export default Object.assign(..._iterate(Images, ''));
