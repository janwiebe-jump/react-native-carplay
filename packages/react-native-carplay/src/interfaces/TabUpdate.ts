import { ImageSourcePropType } from 'react-native';

export interface TabUpdate {
  /**
   * UITabBarSystemItem
   */
  tabSystemItem?: number;
  /**
   * Name of system image for tab
   */
  tabSystemImageName?: string;
  /**
   * Image source for tab
   */
  tabImage?: ImageSourcePropType;
  /**
   * Set tab title
   */
  tabTitle?: string;
}
