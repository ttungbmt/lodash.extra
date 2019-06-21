import get from 'lodash/get'
import isString from 'lodash/isString'
import isPlainObject from 'lodash/isPlainObject'
import isFunction from 'lodash/isFunction'
import Handlebars from 'handlebars'

const template = (tpl, data) => {
    let content = ''

    if (isString(tpl)) {
        content = Handlebars.compile(tpl)(data)
    } else if (isPlainObject(tpl)) {
        let url = get(tpl, 'url')
        return $.post(url, data)
    } else if (isFunction(tpl)) {
        content = tpl(data)
    }

    return content
}

export default template