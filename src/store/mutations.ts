import { MutationTree } from 'vuex';
import { MutationTypes } from './mutation-types';
import { State } from './state';

import Fate from '../models/fate';

export type Mutations<S = State> = {
  [MutationTypes.SAVE_FATE](state: S, payload: Fate): void;
};

export const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.SAVE_FATE](state, payload: Fate) {
    state.fateList = state.fateList.concat([payload]);
  },
};
