import { GetterTree } from 'vuex';
import Fate from '@/models/fate';
import { State } from './state';

export type Getters = {
  getFateList(state: State): Fate[];
};

export const getters: GetterTree<State, State> & Getters = {
  getFateList: (state) => state.fateList,
};

export default getters;
