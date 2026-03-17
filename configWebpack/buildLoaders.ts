import { RuleSetRule } from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildLoaders(isDev: boolean): RuleSetRule[] {
  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",

        options: {
          modules: {
            auto: (cssName: string) => cssName.includes(".module."), // если есть .module. - то изменяеи классы на уникальные
            localIdentName: isDev
              ? "[path][name]__[local]--[hash:base64:5]"
              : "[hash:base64:8]",
          },
        },
      },
      "sass-loader",
    ],
  };

  const typescriptLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  //loader для изображений с использованием asset modules (Возможность Webpack5)
  const assetLoader = {
    test: /\.(png|jpe?g|gif|webp|ico|woff|woff2)$/i,
    type: "asset/resource",
    generator: {
      filename: "assets/images/[name].[hash][ext]",
    },
  };

  // Loader для SVG (можно использовать как отдельные файлы или как React компоненты)
  const svgLoader = {
    test: /\.svg$/,
    oneOf: [
      // Если нужно использовать как React компонент (для импорта: import { ReactComponent as Icon } from './icon.svg')
      {
        issuer: /\.[jt]sx?$/,
        use: ["@svgr/webpack"],
      },
      // Если нужно использовать как обычный файл/URL
      {
        type: "asset/resource",
        generator: {
          filename: "assets/images/[name].[hash][ext]",
        },
      },
    ],
  };
  return [typescriptLoader, cssLoader, assetLoader, svgLoader];
}
