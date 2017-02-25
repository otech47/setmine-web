import colors from './colors'

export function card(level) {
    switch(level) {
        case 1:
            return 'box-shadow: 0 1px 4px rgba(49, 53, 66, 0.12), 0 1px 3px rgba(49, 53, 66, 0.24);'
        case 2:
            return 'box-shadow: 0 3px 21px rgba(49, 53, 66, 0.14), 0 3px 21px rgba(49, 53, 66, 0.14);'
        case 3:
            return 'box-shadow: 0 10px 20px rgba(49, 53, 66, 0.19), 0 6px 6px rgba(49, 53, 66, 0.23);'
        case 4:
            return 'box-shadow: 0 14px 28px rgba(49, 53, 66, 0.25), 0 10px 10px rgba(49, 53, 66, 0.22);'
        case 5:
            return 'box-shadow: 0 19px 38px rgba(49, 53, 66, 0.30), 0 15px 12px rgba(49, 53, 66, 0.22);'
    }
}

export function colorize(props = {}) {
    if (props.color) {
        return colors[props.color]
    } else if (props.small) {
        return colors.gray
    } else {
        return colors.darkGray
    }
}

export function transition(property = 'all', time, type) {
    return `
        transition: ${property} ${time} ${type};
        transition-duration: ${time};
    `
}

export function isDefined(prop, css = prop) {
    return props => props[prop] ? `${css}: ${props[prop]}` : '';
}