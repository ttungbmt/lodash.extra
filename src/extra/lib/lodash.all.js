import * as extraUtils from '../src/index'
import * as geoUtils from '../../geo/src/index'
import * as jsonUtils from '../../json/src/index'
import * as templateUtils from '../../template/src/index'

_.mixin(Object.assign({},
    extraUtils,
    geoUtils,
    jsonUtils,
    templateUtils
))