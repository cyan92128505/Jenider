import { GetterTree } from 'vuex';
import { State } from './state';
import Fate from '../models/fate';

export type Getters = {
  getFateList(state: State): Fate[];
};

export const getters: GetterTree<State, State> & Getters = {
  getFateList: (state) => state.fateList,
};

export default getters;
