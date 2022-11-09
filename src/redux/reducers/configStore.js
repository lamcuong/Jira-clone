import { combineReducers, applyMiddleware, createStore } from 'redux'
import BaiTapDressingRoomReducer from '../BaiTapDressingRoomReducer'
import LoadingReducer from './LoadingReducer';

import { rootSaga } from '../sagas/rootSaga';
import createMiddleWareSaga from 'redux-saga'
import { HistoryReducer } from './HistoryReducer';
import { UserCyberbugsReducer } from './UserCyberbugsReducer';
import { ProjectCategoryReducer } from './ProjectCategoryReducer';
import { ProjectCyberBugsReducer } from './ProjectCyberBugsReducers';
import { DrawerCyberbugsReducer } from './DrawerCyberbugsReducer';
import { ProjectReducer } from './ProjectReducer';
import { TaskTypeReducer } from './TaskTypeReducer';
import { PriorityReducer } from './PriorityReducer';
import { TaskReducer } from './TaskReducer';
import { StatusReducer } from './StatusReducer';
const middleWareSaga = createMiddleWareSaga();
const rootReducer = combineReducers({

    BaiTapDressingRoomReducer,
    LoadingReducer,
    HistoryReducer: HistoryReducer,
    UserCyberbugsReducer: UserCyberbugsReducer,
    ProjectCategoryReducer: ProjectCategoryReducer,
    ProjectCyberBugsReducer,
    DrawerCyberbugsReducer: DrawerCyberbugsReducer,
    ProjectReducer,
    TaskTypeReducer,
    PriorityReducer,
    TaskReducer,
    StatusReducer,




})

const store = createStore(rootReducer, applyMiddleware(middleWareSaga));
middleWareSaga.run(rootSaga);
export default store
