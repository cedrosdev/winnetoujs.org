module.exports = {
  apps: [
    {
      name: "Winnetoujs.org Site",
      script: "server.js",
      instances: "max",
      exec_mode: "cluster",
      autorestart: true,
      watch: false,
      ignore_watch: ["node_modules", "Public"],
      env: {
        NODE_ENV: "production",
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
