export interface VideoProps {
  playing?: boolean;
  fullSize?: boolean;
  src: string;
  poster?: string;
  muted?: boolean;
  controls?: boolean;
  onEnded?(): void;
}
