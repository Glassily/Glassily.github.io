# 练习参考答案（示例）

练习 1（deepFreeze）：

```ts
function deepFreeze<T>(obj: T): Readonly<T> {
  Object.getOwnPropertyNames(obj).forEach((name) => {
    const prop = (obj as any)[name];
    if (prop && typeof prop === 'object') {
      deepFreeze(prop);
    }
  });
  return Object.freeze(obj) as Readonly<T>;
}
```

练习 2（pluck）：

```ts
function pluck<T, K extends keyof T>(objs: T[], key: K): T[K][] {
  return objs.map(o => o[key]);
}
```

练习 3：示例 `declare module 'legacy-lib' { export function foo(x:any): any }`
