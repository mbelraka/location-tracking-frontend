import { SocketIoConfig } from 'ngx-socket-io';

import { ROOT_CONFIG } from '../../../containers/root/config/root.config';

export const SOCKET_CONFIG: SocketIoConfig = {
  url: ROOT_CONFIG.link,
  options: { transports: ['websocket', 'polling', 'flashsocket'] },
};
