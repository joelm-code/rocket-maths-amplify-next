import { ModelInit, MutableModel } from "@aws-amplify/datastore";

type LevelsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type NavigationMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PageHeadingMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Levels {
  readonly id: string;
  readonly cardTitle?: string | null;
  readonly badgeExists?: boolean | null;
  readonly badgeColor?: string | null;
  readonly displayText?: string | null;
  readonly cardDescription?: string | null;
  readonly image?: string | null;
  readonly buttonLabel?: string | null;
  readonly linkTo?: string | null;
  readonly order?: number | null;
  readonly pageName?: string | null;
  readonly isLocked?: boolean | null;
  readonly levelCode?: string | null;
  readonly badgeTitle?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Levels, LevelsMetaData>);
  static copyOf(source: Levels, mutator: (draft: MutableModel<Levels, LevelsMetaData>) => MutableModel<Levels, LevelsMetaData> | void): Levels;
}

export declare class Navigation {
  readonly id: string;
  readonly cardTitle?: string | null;
  readonly badgeExists?: boolean | null;
  readonly badgeTitle?: string | null;
  readonly badgeColor?: string | null;
  readonly cardDescription?: string | null;
  readonly image?: string | null;
  readonly buttonLabel?: string | null;
  readonly linkTo?: string | null;
  readonly order?: number | null;
  readonly pageName?: string | null;
  readonly isLocked?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Navigation, NavigationMetaData>);
  static copyOf(source: Navigation, mutator: (draft: MutableModel<Navigation, NavigationMetaData>) => MutableModel<Navigation, NavigationMetaData> | void): Navigation;
}

export declare class PageHeading {
  readonly id: string;
  readonly heading?: string | null;
  readonly subHeading?: string | null;
  readonly pageName?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<PageHeading, PageHeadingMetaData>);
  static copyOf(source: PageHeading, mutator: (draft: MutableModel<PageHeading, PageHeadingMetaData>) => MutableModel<PageHeading, PageHeadingMetaData> | void): PageHeading;
}