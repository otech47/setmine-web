export const dimensionNames = ['xs', 'sm', 'md', 'lg']

export const breakpoints = {
    xs: 540,
    sm: 768,
    md: 992,
    lg: 1200,
    xl: 1600
}

export default {
    gridSize: 12,
    gutterWidth: 2, // rem
    outerMargin: 2, // rem
    gridWidth: {
        xs: 100,
        sm: 90,
        md: 80,
        lg: 70
    },
    headerHeight: 64,
    navbarHeight: 48,
    playerHeight: 64,
    sidebarWidth: 64,
    easeIn: 'cubic-bezier(0.23, 1, 0.32, 1)',
    easeInOut: 'cubic-bezier(0.445, 0.05, 0.55, 0.95)',
    breakpoints
}
