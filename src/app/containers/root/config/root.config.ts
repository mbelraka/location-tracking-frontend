export const ROOT_CONFIG = {
  navLinks: [
    { label: 'Main', link: '/main' },
    { label: 'Map', link: '/map', showHeader: true },
  ],
  server: 'http://localhost',
  port: 8080,
  get link(): string {
    return `${this!.server}:${this!.port}`;
  },
};
