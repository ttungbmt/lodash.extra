import isArray from 'lodash/isArray'
import isFunction from 'lodash/isFunction'
import isPlainObject from 'lodash/isPlainObject'
import isString from 'lodash/isString'
import get from 'lodash/get'
import has from 'lodash/has'
import template from './template'

// Ex: fieldsToStr([{label: 'Địa chỉ {{order}}', value: 'diachi'}], '<li><b>{{label}}</b>: {{value}}</li>', data)
const fieldsToStr = (fields, tpl, data = {})  =>{
    let str = ''

    if (!isArray(fields)) return []
    fields.map(f => {
        let label, value

        if (isFunction(f)) {
            str += f(data)
        } else if (isPlainObject(f)) {
            if (isFunction(label)) label = label(data)
            label = get(f, 'label')
            if (isString(label)) label = template(label, data)
            // --
            if (isFunction(value)) {
                value = value(data)
            } else {
                let v = get(f, 'value')
                if (has(data, v)) {
                    value = get(data, v)
                } else {
                    value = template(v, data)
                }
            }

            str += template(tpl, {label, value})

        } else if (isString(f)) {
            label = f
            value = get(data, f)

            if (has(data, f)) {
                str += template(tpl, {label, value})
            }
        }

    })

    return str
}

export default fieldsToStr

