import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Cohort {
  cohortName: string;
  description: string;
  program: string;
  startDate: Date | null;
  endDate: Date | null;
  selectedFile: string | null;
}

interface Instructor {
  instructorName: string;
  email: string;
  phone: string;
  specialty: string;
}

interface CohortState {
  cohorts: Cohort[];
}

interface InstructorState {
  instructors: Instructor[];
}

const initialState: CohortState = {
  cohorts: [],
};

const initialInstructorState: InstructorState = {
  instructors: [],
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

const instructorSlice = createSlice({
  name: 'instructors',
  initialState: initialInstructorState,
  reducers: {
    addInstructor: (state, action: PayloadAction<Instructor>) => {
      state.instructors.push(action.payload);
    },
  },
});

export const { addCohort } = cohortSlice.actions;
export const { addInstructor } = instructorSlice.actions;

const store = configureStore({
  reducer: {
    cohorts: cohortSlice.reducer,
    instructors: instructorSlice.reducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
