import { EnvironmentNetwork } from '../environment'

export interface AnnouncementText {
  en: string
  de: string
  'zh-Hans': string
  'zh-Hant': string
}

export interface AnnouncementData {
  lang: AnnouncementText
  /**
   * Versioned matching represented as semver satisfies
   */
  version: string
}

export interface FeatureFlag {
  id: FEATURE_FLAG_ID
  name: string
  version: string
  stage: FEATURE_FLAG_STAGE
  description: string
  networks: EnvironmentNetwork[]
  platforms: Platform[]
}

export type Platform = 'ios' | 'android' | 'windows' | 'macos' | 'web'

export type FEATURE_FLAG_ID = 'loan' | 'auction'

export type FEATURE_FLAG_STAGE = 'alpha' | 'beta' | 'public'
