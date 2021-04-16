const config: Config = {
  plugins: {
    tailwindcss: {},
    // eslint-disable-next-line sort-keys-fix/sort-keys-fix
    autoprefixer: {},
  },
};

type Config = {
  plugins: Record<string, unknown>;
};

export default config;
