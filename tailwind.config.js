module.exports = {
    purge: ["./dist/**/*.html"],
    darkMode: false,
    theme: {
        extend: {
            gap: {
                "12": "15px",
            }
        },
        screens: {
            "xs": "480px",
            "sm": "576px",
            "md": "767px",
            "lg": "992px",
            "xl": "1280px",
        },
        width: {
            "1": "8.33333333%",
            "2": "16.6666667%",
            "3": "25%",
            "4": "33.33333333%",
            "5": "41.6666667%",
            "6": "50%",
            "7": "58.33333333%",
            "8": "66.66666667%",
            "9": "75%",
            "10": "83.33333333%",
            "11": "91.66666667%",
            "12": "100%",
            "full": "100%",
        },
        container: {
            center: true,
            padding: "15px",
        },
        colors: {
            black: "#000",
            white: "#fff",
            whatever: "#f234fa",
        }
    },
    variants: {},
    plugins: [],
};
