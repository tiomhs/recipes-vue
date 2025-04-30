module.exports = {
    apps: [
        {
            name: "recipes-vue",
            script: "npx nuxt start",
            env: {
                PORT: 3002,
            },
        },
    ],
};