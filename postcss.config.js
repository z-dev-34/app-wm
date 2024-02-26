module.exports = {
    plugins: {
        "postcss-import": {}, // <= Add this
        'tailwindcss/nesting': 'postcss-nesting',
        tailwindcss: {},
        autoprefixer: {},
    }
}