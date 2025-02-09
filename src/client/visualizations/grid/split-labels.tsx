/*
 * Copyright 2017-2021 Allegro.pl
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Timezone } from "chronoshift";
import { List } from "immutable";
import { Datum } from "plywood";
import * as React from "react";
import { Split } from "../../../common/models/split/split";
import { FlattenedSplitColumns } from "../../components/tabular-scroller/splits/flattened-split-columns";
import { isTotalDatum } from "./utils/total-datum";

interface SplitLabelsProps {
  splits: List<Split>;
  timezone: Timezone;
  datum: Datum;
}

export const SplitLabels: React.SFC<SplitLabelsProps> = props => {
  const { splits, datum, timezone } = props;
  if (isTotalDatum(datum)) {
    return <div key="totals" className="flattened-split-value">Total</div>;
  }
  return <FlattenedSplitColumns splits={splits} datum={datum} timezone={timezone} />;
};
