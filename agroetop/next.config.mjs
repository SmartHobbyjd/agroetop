/** @type {import('next').NextConfig} */
export default {
    webpack(config, { isServer }) {
      config.module.rules.push({
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          'postcss-loader', // Add postcss-loader for autoprefixer
        ],
      });
  
      return config;
    },
  };