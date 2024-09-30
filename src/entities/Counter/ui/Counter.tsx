import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'shared/ui/Button/Button';
import { CounterActions } from '../model/slice/counterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import cls from './Counter.module.scss';

interface CounterProps {

}
export const Counter = ({}: CounterProps) => {
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);

    const increment = () => {
        dispatch(CounterActions.increment());
    };
    const decrement = () => {
        dispatch(CounterActions.decrement());
    };
    console.log(counterValue);

    return (
        <div className={cls.Counter}>
            <h1 data-testid="value-title">
                value =
                { counterValue }
            </h1>
            <Button data-testid="increment-btn" onClick={increment}>
                increment
            </Button>
            <Button data-testid="decrement-btn" onClick={decrement}>
                decrement
            </Button>
        </div>
    );
};
