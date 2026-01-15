import React from 'react';

export interface ServicePackage {
  name: string;
  features: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string[];
  price: string;
  image: string;
  icon?: React.ReactNode;
  packages?: ServicePackage[];
}

export interface Testimonial {
  quote: string;
  author: string;
  year: string;
}

export enum FormStatus {
  IDLE = 'idle',
  SUBMITTING = 'submitting',
  SUCCESS = 'success',
  ERROR = 'error',
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}