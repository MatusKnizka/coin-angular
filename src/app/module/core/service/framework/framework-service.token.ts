import { InjectionToken } from '@angular/core';
import { FrameworkServiceProvider } from './framework-service.provider';

export const FRAMEWORK_SERVICE_TOKEN = new InjectionToken<FrameworkServiceProvider>('FrameworkServiceProvider');