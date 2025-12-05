export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  imageUrl: string;
  year: string;
  link?: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export enum CameraState {
  Overview = 'OVERVIEW',
  Focus = 'FOCUS'
}