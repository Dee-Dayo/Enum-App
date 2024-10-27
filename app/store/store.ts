import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Course {
  id: string;
  courseName: string;
  noOfModule: string;
  avatar: string;
}

export interface Cohort {
  cohortName: string;
  description: string;
  program: string;
  startDate: Date;
  endDate: Date;
  avatar?: string;
}

export interface CohortDetailsProps {
  cohort: Cohort;
  onBack: () => void;
}

interface Instructor {
  id: string;
  name: string;
  school: string;
  position: string;
  avatar: string;
  bio: string;
}

interface Session {
  id: string;
  title: string;
  duration: string;
}

interface Module {
  moduleId: string;
  title: string;
  sessions: Session[];
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

interface ModuleState {
  modules: Module[];
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

const initialModuleState: ModuleState = {
  modules: [], // Empty initial state for modules
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
    setInstructors: (state, action: PayloadAction<Instructor[]>) => {
      state.instructors = action.payload;
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

const moduleSlice = createSlice({
  name: 'modules',
  initialState: initialModuleState,
  reducers: {
    setModules: (state, action: PayloadAction<Module[]>) => {
      state.modules = action.payload;
    },
  },
});

export const { addCohort } = cohortSlice.actions;
export const { addInstructor, setInstructors } = instructorSlice.actions;
export const { addCourse, setCourses } = courseSlice.actions;
export const { setModules } = moduleSlice.actions;

const store = configureStore({
  reducer: {
    cohorts: cohortSlice.reducer,
    instructors: instructorSlice.reducer,
    courses: courseSlice.reducer,
    modules: moduleSlice.reducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
