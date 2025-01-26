export type RelaxBoolean<T> = T extends boolean
  ? boolean | Exclude<T, boolean>
  : T;

export type WithOmakase<T> = T extends true ? T : true | T;

export type ToGlobalConfig<T> = RelaxBoolean<WithOmakase<T>>;
