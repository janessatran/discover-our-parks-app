globalThis.process = {
  ...globalThis.process,
  env: { NODE_ENV: "development" },
};
