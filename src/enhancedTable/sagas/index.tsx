import { all } from "@redux-saga/core/effects";
import {watcher} from './saga'

export default function* rootSaga() {
    yield all([
        ...watcher.fetchingData,
        ...watcher.removingData,
        ...watcher.editingData,
        ...watcher.filteringData,
        ...watcher.sortingData,

    ]);

 }