import get from 'lodash/get'
import map from 'lodash/map'
import isArray from 'lodash/isArray'
import isPlainObject from 'lodash/isPlainObject'

import template from './template'
import fieldsToStr from './fieldsToStr'

// _.popupToContent({title: 'Hello', fields: [{label: '<span>Dia chi</span>', value: 'diachi'}]})
const popupToContent = (popup, data, options) => {
    if (isArray(popup)) return map(popup, v => popupToContent(v, data))
    if (!isPlainObject(popup) && popup) return null

    let
        title = get(popup, 'title'),
        content = get(popup, 'content'),
        itemTpl = get(popup, 'template'),
        fields = get(popup, 'fields'),
        template = get(options, 'template', `<div class="pop-wrapper"><div class="pop-title text-uppercase">{{{title}}}</div> <div class="pop-body"> <ul> {{{content}}} </ul> </div> </div>`),
        params = get(options, 'params', {})

    if (content) return content
    if (itemTpl) return template(itemTpl, data)

    title = template(title, data)
    content = fieldsToStr(fields, '<li><b>{{{label}}}</b>: {{{value}}}</li>', data)

    return template(template, {...params, title, content})
}

export default popupToContent
