import { Observable, Subject, from, of } from "rxjs";
import {
    catchError,
    switchMap,
    debounceTime,
    distinctUntilChange,
    map,
    filter
} from "rxjs/operators";

export class SearchService {
    constructor() {
        this.searchTerm = new Subject();
    }

    search(term) {
        this.searchTerm.next(term.newObject, term.handler);
    }

    doSearch(term) {
        let promise = fetch(`${window.ctx.searchUrl}/${term}`).then(response =>
            response.json()
        );
        return Observable.from(promise);
    }

    getResults() {
        return this.searchTerm
            .debounceTime(500)
            .distinctUntilChanged()
            .switchMap((newObject, handler) => handler(newObject))
            .catchError(error => {
                console.error(error);
                return Observable.of([]);
            });
    }
}
