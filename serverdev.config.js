module.exports = {
  apps: [
    {
      name: "Winnetoujs.org Site",
      script: "server.js",
      instances: "1",
      exec_mode: "cluster",
      autorestart: true,
      watch: true,
      ignore_watch: ["node_modules", "Public"],
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],
};

/**
 * Ao adicionar um app não esquecer de alterar a configuração do nginx
 */
