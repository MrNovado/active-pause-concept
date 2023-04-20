import {
  Middleware, //
  StoreEnhancer,
  ConfigureStoreOptions,
  EnhancedStore,
} from '@reduxjs/toolkit';

declare module '@reduxjs/toolkit' {
  declare type Middlewares<S> = Array<Middleware<object, S>>;

  declare function configureStore<
    S = object,
    A extends Action,
    M extends Middlewares<S>,
    E extends Enhancers = [StoreEnhancer],
  >(options: ConfigureStoreOptions<S, A, M, E>): EnhancedStore<S, A, M, E>;
}
