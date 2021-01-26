import { MutationTree } from 'vuex';
import Fate from '@/models/fate';
import { MutationTypes } from './mutation-types';
import { State } from './state';

export type Mutations<S = State> = {
  [MutationTypes.SAVE_FATE](state: S, payload: Fate): void;
};

export const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.SAVE_FATE](state, payload: Fate) {
    state.fateList = state.fateList.concat([payload]);
  },
};
