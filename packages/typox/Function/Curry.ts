import type { AnyArray, Length } from "../Array/_api"
import type { AnyFunction } from "./Function"

type Gradual<T extends AnyArray> =
    T extends [...infer R, any]
    ? Length<T> extends 0
    ? T
    : T | Gradual<R>
    : T;

type StringEqual<T extends String, R extends String> = T extends R ? R extends T ? true : false : false

type CovertIndex<T extends any[], R extends String, S extends any[] = []> = StringEqual<`${S['length']}`, R> extends true ? T['length'] : T extends [...infer O, infer L] ? CovertIndex<O, R, [...S, L]> : 0
type GetStartSlice<T extends any[], S extends number, O extends any[]> = `${S}` extends `-${infer PS}` ? StartLeftBegin<T, CovertIndex<O, `${PS}`>> : StartLeftBegin<T, S>
type StartLeftBegin<T extends any[], R extends number, S extends any[] = []> = StringEqual<`${S['length']}`, `${R}`> extends true ? T : T extends [infer O, ...infer L] ? StartLeftBegin<L, R, [...S, O]> : []


type GetEndSlice<T extends any[], S extends number> = `${S}` extends `-${infer PS}` ? EndRightBegin<T, `${PS}`> : EndLeftBegin<T, `${S}`>
type EndRightBegin<T extends any[], R extends string, S extends any[] = []> = StringEqual<`${S['length']}`, R> extends true ? T : T extends [...infer O, infer L] ? EndRightBegin<O, R, [...S, L]> : []
type EndLeftBegin<T extends any[], R extends string, S extends any[] = []> = StringEqual<`${S['length']}`, R> extends true ? S : T extends [infer O, ...infer L] ? EndLeftBegin<L, R, [...S, O]> : []

type Slice<Arr extends any[], Start extends number = 0, End extends number = Arr['length']> = GetStartSlice<GetEndSlice<Arr, End>, Start, Arr>


export type Currying<
    Function extends AnyFunction,
    Length extends number = Parameters<Function>['length']
> =
    <Args extends Gradual<Parameters<Function>>>(...args: Args) =>
        Args['length'] extends Length
        ? ReturnType<Function>
        : Currying<
            (
                ...args: Slice<Parameters<Function>, Args['length']>
            ) => ReturnType<Function>
        >
