// Base
export type BasePayload = {
  ServerId: string;
  ServerName: string;
  ServerVersion: string;
  ServerUrl: string;
  NotificationType: string;
  Timestamp: string;
  UtcTimestamp: string;
};

// PlaybackStop (partial)
export type PlaybackStopPayload = BasePayload & {
  Name: string;
  Overview: string;
  Tagline: string;
  UserId: string;
  NotificationUsername: string;
  ItemId: string;
  ItemType: string;
  RunTimeTicks: string;
  RunTime: string;
  PlaybackPositionTicks: number;
  PlaybackPosition: string;
  IsPaused: boolean;
  PlayedToCompletion: boolean;
  Provider_AniDB?: string;
  Provider_AniList?: string;
  EpisodeNumber: number;
  SeasonNumber: number;
  DeviceId: string;
  DeviceName: string;
  ClientName: string;
};

// vim: tabstop=2 shiftwidth=2 softtabstop=0 smarttab expandtab