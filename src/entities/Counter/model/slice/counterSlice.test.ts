import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { CounterActions, CounterReducer } from './counterSlice';
import { CounterSchema } from '../types/counterSchema';

describe('counterSlice.test', () => {
    test('', () => {
        const state: CounterSchema = {
            value: 10,
        };
        expect(CounterReducer(state as CounterSchema, CounterActions.decrement())).toEqual({ value: 9 });
    });
    test('', () => {
        const state: CounterSchema = {
            value: 10,
        };
        expect(CounterReducer(state as CounterSchema, CounterActions.increment())).toEqual({ value: 11 });
    });
    test('should work with empty state', () => {
        expect(CounterReducer(undefined, CounterActions.increment())).toEqual({ value: 1 });
    });
});
