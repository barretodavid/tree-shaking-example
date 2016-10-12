import typescript from 'rollup-plugin-typescript';

export default {
  entry: 'src/index.ts',
  format: 'cjs',
  plugins: [
    typescript()
  ],
  dest: 'dist/app.js'
};