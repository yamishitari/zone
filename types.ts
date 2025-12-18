import React from 'react';

export type ZoneId = 'reading' | 'speaking' | 'writing' | 'memory' | 'games' | 'business';

export interface ZoneConfig {
  id: ZoneId;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  bgColor: string;
  promptContext: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: number;
}

export interface PracticeSessionState {
  isActive: boolean;
  zoneId: ZoneId | null;
  messages: ChatMessage[];
  isLoading: boolean;
}