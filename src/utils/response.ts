import type { ApiError } from '../types';

export function getErrorMessage(err: unknown): string {
   if (!err) return 'Something went wrong';
   try {
      const anyErr = err as ApiError;
      return String(anyErr.response.data.message);
   } catch {
      if (err instanceof Error && err.message) return err.message;
      return String(err);
   }
}
