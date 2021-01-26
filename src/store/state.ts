import Fate from '../models/fate';

export type AppStoreState = {
  fateList: Fate[];
};

export const state: AppStoreState = {
  fateList: [],
};

export type State = typeof state;
