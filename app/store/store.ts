import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Cohort {
  cohortName: string;
  description: string;
  program: string;
  startDate: Date | null;
  endDate: Date | null;
  selectedFileName: string | null;
}

interface CohortState {
  cohorts: Cohort[];
}

const initialState: CohortState = {
  cohorts: [],
};

const cohortSlice = createSlice({
  name: 'cohorts',
  initialState,
  reducers: {
    addCohort: (state, action: PayloadAction<Cohort>) => {
      state.cohorts.push(action.payload);
    },
  },
});

export const { addCohort } = cohortSlice.actions;

const store = configureStore({
  reducer: {
    cohorts: cohortSlice.reducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
