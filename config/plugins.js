module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "aws-s3",
      providerOptions: {
        accessKeyId: env("AWS_ACCESS_KEY_ID"),
        secretAccessKey: env("AWS_ACCESS_SECRET"),
        region: env("AWS_REGION"),
        params: {
          Bucket: env("AWS_BUCKET"),
        },
      },
    },
  },
  transformer: {
    enabled: true,
    config: {
      prefix: "/api/",
      responseTransforms: {
        removeAttributesKey: true,
        removeDataKey: true,
      },
    },
  },
  menus: {
    config: {
      maxDepth: 3,
    },
  },
  meilisearch: {
    config: {
      host: "localhost:7700",
      apiKey: "dc55a924c56420ae0bbcf8724311de46816aa623fdc90bc89",
    },
  },
});
