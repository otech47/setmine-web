import React, { PropTypes } from 'react'
import classNames from 'classnames'

export default function Icon({ children, className, fixed, size, title, onClick }) {
    const iconClass = classNames('Icon', 'fa', `fa-${children}`, className, {
        'fa-fw': fixed,
        clickable: onClick
    })

    return (
        <i
            className={iconClass}
            style={{ fontSize: size }}
            title={title}
            onClick={onClick}
        />
    )
}

// export default function Icon({ children, className, fixed, size, title, onClick }) {
//     const iconClass = classNames('Icon', `ti-${children}`, className, {
//         clickable: onClick,
//         fixed
//     })

//     return (
//         <i
//             className={iconClass}
//             style={{ fontSize: size }}
//             title={title}
//             onClick={onClick}
//         />
//     )
// }

Icon.defaultProps = {
    size: 18
}

Icon.propTypes = {
    size: PropTypes.number,
    children: PropTypes.string.isRequired,
    className: PropTypes.string,
    fixed: PropTypes.bool,
    onClick: PropTypes.func
}