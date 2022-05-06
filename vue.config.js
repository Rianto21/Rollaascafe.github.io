module.exports = {
    devServer: {
        proxy: {
            '^/users': {
                target: 'https://rollaascafeapinodejs.herokuapp.com',
                changeOrigin: true
            },
            '^/products': {
                target: 'https://rollaascafeapinodejs.herokuapp.com',
                changeOrigin: true
            }
        }
    }
}