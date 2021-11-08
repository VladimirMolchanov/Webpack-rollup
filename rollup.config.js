import styles from "rollup-plugin-styles";
import image from 'rollup-plugin-img';
import { babel } from '@rollup/plugin-babel';
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'

export default {
    input: 'src/index.js',
    output: {
        file: 'bundle/index.js',
        format: 'cjs'
    },
    plugins: [
        babel({ babelHelpers: 'bundled' }),
        styles(),
        image({
            limit: 1048576,  // (1Mb)
        }),
        serve({
            open: true,
            contentBase: './',
            port: 8000,
        }),
        livereload(),
    ],
};
