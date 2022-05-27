import {set} from 'lodash';
import { Interceptor, QueryResultRow } from "slonik";

const jsonInterceptor: Interceptor = {
  transformRow: (_: unknown, __: unknown, row: QueryResultRow) => {
    const json: QueryResultRow = {};

    for (const key in row) {
      set(json, key, row[key]);
    }

    return json;
  }
}

export default jsonInterceptor;
