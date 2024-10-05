import { ReduxStoreWithManager, StateSchema, StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema';
import React, { Reducer, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useStore } from 'react-redux';

export type ReducersList = {
    [name in StateSchemaKey]?: Reducer<any, any>;
}

type ReducerListEntry = [
    StateSchemaKey, Reducer<any, any>
]

interface DynamicModuleLoaderProps {
    reducers: ReducersList;
    children: React.ReactNode;
    removeAfterUnmout?: boolean;
}
export const DynamicModuleLoader = ({ children, reducers, removeAfterUnmout }: DynamicModuleLoaderProps) => {
    const { t } = useTranslation();
    const store = useStore() as ReduxStoreWithManager;
    const dispatch = useDispatch();
    useEffect(() => {
        Object.entries(reducers).forEach(([name, value]: ReducerListEntry) => {
            store.reducerManager.add(name, value);
            dispatch({ type: `@INIT ${name} reducer` });
        });
        return () => {
            if (removeAfterUnmout) {
                Object.entries(reducers).forEach(([name, value]: ReducerListEntry) => {
                    store.reducerManager.add(name, value);
                    dispatch({ type: `@INIT ${name} reducer` });
                });
            }
        };
    //@eslint-inore
    }, []);
    return (
        {children}
    );
};
