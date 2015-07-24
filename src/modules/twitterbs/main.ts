require.config({
    paths: {
        css: "../vendor/require-css/css"
    },
    deps: [
        'css!../vendor/bootstrap/dist/css/bootstrap.css'
    ]
});

define(() => {
    console.log("Module twitterbs is loaded properly.")
});

