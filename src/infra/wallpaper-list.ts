import { WallpaperItem } from '@/domain';

import { bangChan } from './bang-chan';
import { felix } from './felix';
import { hyunjin } from './hyunjin';
import { leeKnow } from './lee-know';
import { stayKids } from './stray-kids';

export const wallpaperList: WallpaperItem[] = [
  ...bangChan,
  ...felix,
  ...hyunjin,
  ...leeKnow,
  ...stayKids
];
