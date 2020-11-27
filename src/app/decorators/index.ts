import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';

export function url() {
  return (target: object, key: string) => {
    const baseUrl = environment.baseUrl;
    // 得到当前装饰器后key的值
    let value = target[key];
    const getter = () => {
      return value;
    };
    const setter = (name) => {
      value = `${baseUrl}${name}`;
    };
    Object.defineProperty(target, key, {
      get: getter,
      set: setter,
      configurable: true,
      enumerable: true
    });
  };
}

/**
 * Mock的函数工厂
 * @param data any 任意的mock数据
 */
export function mock(data: any): any {
  return (target: object, key: string, descriptor: PropertyDescriptor) => {
    // key是函数名
    // descriptor代表函数的属性描述符
    // 保存原函数
    const oldFunction: any = descriptor.value;
    const isMock = environment.isMock;
    // 重写函数
    descriptor.value = function() {
      if (!isMock) {
        // 注意这里this调用要用原函数的this
        return oldFunction.apply(this);
      } else {
        // 将mock数据包装返回
        return Observable.create(observer => observer.next(data));
      }
    };
  };
}
