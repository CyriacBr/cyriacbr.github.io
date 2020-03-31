import { Action, action } from "easy-peasy";

export interface StoreModel {
  darkMode: boolean;
  setDarkMode: Action<StoreModel, boolean>;
}

const storeModel: StoreModel = {
  darkMode: true,
  setDarkMode: action((state, value) => {
    state.darkMode = value;
  })
};

export default storeModel;
