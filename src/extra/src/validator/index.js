import isLatLong from 'validator/lib/isLatLong';
import _isJSON from 'validator/lib/isJSON';
import isDataURI from 'validator/lib/isDataURI';
import isEmail from 'validator/lib/isEmail';
import isURL from 'validator/lib/isURL';
import isUUID from 'validator/lib/isUUID';


function isJSON(value) {
    if(this.isObject(value)) value = this.stringifyJSON(value)
    return _isJSON(value)
}

export {
    isJSON,
    isLatLong,
    isDataURI,
    isEmail,
    isURL,
    isUUID
}

