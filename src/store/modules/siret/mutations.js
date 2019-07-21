export const mutations = {
  setCompanie: (state, companie) => {
    console.log('mutation:', companie);
    state.companie = companie; 
  }
};
