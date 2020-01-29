import { InjectionToken } from '@angular/core';
import { FrameworkModelProvider } from './framework-model.provider';

export const FRAMEWORK_MODEL_TOKEN = new InjectionToken<FrameworkModelProvider>('FrameworkModelProvider');