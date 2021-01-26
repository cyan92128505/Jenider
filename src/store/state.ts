import Fate from '@/models/fate';

export type AppStoreState = {
  fateList: Fate[];
  currentFate: Fate;
};

export const state: AppStoreState = {
  fateList: [],
  currentFate: new Fate(),
};

export type State = typeof state;
