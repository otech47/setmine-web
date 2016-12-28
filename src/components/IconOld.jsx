import React, { PropTypes } from 'react';

const Icon = ({children, caption, fixed, style, onClick, size, className, title}) => {
    const fixedClass = fixed ? 'fixed' : '';
    const clickable = onClick ? 'clickable' : '';
    const captionClass = caption ? 'clickable' : '';

    const iconSize = size || 24;
    let mergedStyle = Object.assign({}, style, {
        fontSize: iconSize
    });

    const iconElement = (
        <i
            className={`icon ${className} ion-${children} ${fixedClass} ${clickable}`}
            style={mergedStyle}
            onClick={onClick}
            title={title}
        />
    );

    if(caption) {
        return (
            <div className='flex-row-nowrap'>
                {iconElement}
                <p className='caption'>
                    {caption}
                </p>
            </div>
        );
    }

    return iconElement;
}

Icon.propTypes = {
    size: PropTypes.number,
    // text placed to right of icon
    caption: PropTypes.string,
    // icon className from ionicons
    children: PropTypes.string.isRequired,
    // sets fixed width for icons, useful for stacking
    fixed: PropTypes.bool,
    // custom styling
    style: PropTypes.object,
    className: PropTypes.string,
    // click handlers for icon
    onClick: PropTypes.func
};

export default Icon;