import {Buffer} from 'buffer'
import wkx from 'wkx'

const toGeometry = (value, type = 'geojson') => {
    let geometry = null

    switch (type){
        case 'ewkb':
        case 'wkb':
            value = Buffer.from(value, 'hex');
            geometry = wkx.Geometry.parse(value)
            break;
        case 'geojson':
            if(this.isString(value)) value = this.parseJSON(value)
            geometry = wkx.Geometry.parseGeoJSON(value)
            break;
        default:
            // support type: wkt
            geometry = wkx.Geometry.parse(value)
    }

    return geometry
}

export default toGeometry