const KeyvLru = require('./KeyvLru');

describe('KeyvLru', () => {
  test('constructor', () => {
    expect.assertions(2);
    const sut = new KeyvLru();
    expect(sut.cache).not.toBeUndefined();
    expect(sut).toBeInstanceOf(KeyvLru);
  });
  describe('KeyvLru methods', () => {
    let sut;

    beforeEach(() => {
      sut = new KeyvLru({ max: 100 });
    });

    afterEach(() => {
      jest.restoreAllMocks();
    });

    test('get', () => {
      expect.assertions(1);
      jest.spyOn(sut.cache, 'get');
      sut.get('foo');
      expect(sut.cache.get).toHaveBeenCalledWith('foo');
    });

    test('set', () => {
      expect.assertions(2);
      jest.spyOn(sut.cache, 'set');
      sut.set('foo', { bar: true });
      expect(sut.cache.set).toHaveBeenCalledWith('foo', { bar: true });
      expect(sut.cache.get('foo')).toEqual({ bar: true });
    });

    test('delete', () => {
      expect.assertions(3);
      jest.spyOn(sut.cache, 'delete');
      sut.set('foo', { bar: true });
      expect(sut.cache.size).toBe(1);
      sut.delete('foo');
      expect(sut.cache.delete).toHaveBeenCalledWith('foo');
      expect(sut.cache.size).toBe(0);
    });

    test('clear', () => {
      expect.assertions(3);
      jest.spyOn(sut.cache, 'clear');
      sut.set('foo', { bar: true });
      sut.set('lorem', { ipsum: 'a!' });
      expect(sut.cache.size).toBe(2);
      sut.clear();
      expect(sut.cache.clear).toHaveBeenCalled();
      expect(sut.cache.size).toBe(0);
    });
  });
});
