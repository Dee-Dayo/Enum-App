// store.ts (or wherever your store is defined)

import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Course {
  id: string;
  courseName: string;
  noOfModule: string;
  avatar: string;
}

interface Cohort {
  cohortName: string;
  description: string;
  program: string;
  startDate: Date | null;
  endDate: Date | null;
  avatar: string | null;
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

interface CourseState {
  courses: Course[];
}

const initialCohortState: CohortState = {
  cohorts: [],
};

const initialInstructorState: InstructorState = {
  instructors: [],
};

const initialCourseState: CourseState = {
  courses: [],
};

const cohortSlice = createSlice({
  name: 'cohorts',
  initialState: initialCohortState,
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

const courseSlice = createSlice({
  name: 'courses',
  initialState: initialCourseState,
  reducers: {
    addCourse: (state, action: PayloadAction<Course>) => {
      state.courses.push(action.payload);
    },
    setCourses: (state, action: PayloadAction<Course[]>) => {
      state.courses = action.payload;
    },
  },
});

export const { addCohort } = cohortSlice.actions;
export const { addInstructor } = instructorSlice.actions;
export const { addCourse, setCourses } = courseSlice.actions;

const store = configureStore({
  reducer: {
    cohorts: cohortSlice.reducer,
    instructors: instructorSlice.reducer,
    courses: courseSlice.reducer, // add courses reducer
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
