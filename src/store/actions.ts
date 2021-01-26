import { ActionTree, ActionContext } from 'vuex';
import Fate from '@/models/fate';
import { State } from './state';
import { Mutations } from './mutations';
import { ActionTypes } from './action-types';
import { MutationTypes } from './mutation-types';

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<State, State>, 'commit'>;

export interface Actions {
  [ActionTypes.GET_FATER]({ commit }: AugmentedActionContext, payload: Fate): Promise<Fate>;
}

export const actions: ActionTree<State, State> & Actions = {
  [ActionTypes.GET_FATER]({ commit }, payload) {
    return new Promise((resolve) => {
      setTimeout(() => {
        commit(MutationTypes.SAVE_FATE, payload);
        resolve(payload);
      }, 500);
    });
  },
};

export default actions;
