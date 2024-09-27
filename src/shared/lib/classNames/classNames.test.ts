import { classNames } from './classNames';

describe('classNames', () => {
    test('test 1', () => {
        expect(classNames('someClass')).toBe('someClass');
    });

    test('test 2', () => {
        expect(classNames('someClass', {}, ['class1', 'class2'])).toBe('someClass class1 class2');
    });

    test('test 3', () => {
        expect(classNames(
            'someClass',
            { hovered: true, scrollable: true },
            ['class1', 'class2'],
        )).toBe('someClass class1 class2 hovered scrollable');
    });

    test('test 4', () => {
        expect(classNames(
            'someClass',
            { hovered: true, scrollable: false },
            ['class1', 'class2'],
        )).toBe('someClass class1 class2 hovered');
    });
});
