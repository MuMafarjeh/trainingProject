import watcher from '../pages/enhancedTable/duck/sagas';
import { all } from '@redux-saga/core/effects';

function* rootSaga() {
    yield all([
        ...watcher.fetchingData,
        ...watcher.removingData,
        ...watcher.editingData,
        ...watcher.filteringData,
        ...watcher.sortingData,

    ]);

}

export default rootSaga;