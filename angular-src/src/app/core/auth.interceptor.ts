import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const raw = localStorage.getItem('token');
  if (raw) {
    const token = raw.startsWith('JWT ') ? raw.slice(4) : raw;
    const authReq = req.clone({
      headers: req.headers.set('Authorization', 'JWT ' + token)
    });
    return next(authReq);
  }
  return next(req);
};
