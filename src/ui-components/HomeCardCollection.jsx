/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  createDataStorePredicate,
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import { SortDirection } from "@aws-amplify/datastore";
import { Navigation } from "../models";
import NavigationCard from "./NavigationCard";
import { Collection } from "@aws-amplify/ui-react";
export default function HomeCardCollection(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const itemsFilterObj = { field: "pageName", operand: "home", operator: "eq" };
  const itemsFilter = createDataStorePredicate(itemsFilterObj);
  const itemsPagination = { sort: (s) => s.order(SortDirection.ASCENDING) };
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: Navigation,
    criteria: itemsFilter,
    pagination: itemsPagination,
  }).items;
  const items = itemsProp !== undefined ? itemsProp : itemsDataStore;
  return (
    <Collection
      type="list"
      searchPlaceholder="Search..."
      direction="row"
      alignItems="stretch"
      items={items || []}
      {...rest}
      {...getOverrideProps(overrides, "HomeCardCollection")}
    >
      {(item, index) => (
        <NavigationCard
          navigation={item}
          width="auto"
          margin="0 1rem 0 0px"
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></NavigationCard>
      )}
    </Collection>
  );
}
