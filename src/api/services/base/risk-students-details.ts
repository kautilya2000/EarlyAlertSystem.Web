/**
 * Generated by orval v6.12.1 🍺
 * Do not edit manually.
 * EAS
 * The EAS API description
 * OpenAPI spec version: 0.1
 */
import { useQuery, useMutation } from "@tanstack/react-query";
import type {
  UseQueryOptions,
  UseMutationOptions,
  QueryFunction,
  MutationFunction,
  UseQueryResult,
  QueryKey,
} from "@tanstack/react-query";
import type {
  CreateRiskStudentsDetailDto,
  PagedRiskStudentsDetail,
  RiskStudentsDetailEntity,
  UpdateRiskStudentsDetailDto,
} from "./models";
import { baseInstance } from "../../instances/baseInstance";
import type { ErrorType } from "../../instances/baseInstance";

export const riskStudentsDetailsControllerCreate = (
  createRiskStudentsDetailDto: CreateRiskStudentsDetailDto
) => {
  return baseInstance<CreateRiskStudentsDetailDto>({
    url: `/risk-students-details`,
    method: "post",
    headers: { "Content-Type": "application/json" },
    data: createRiskStudentsDetailDto,
  });
};

export type RiskStudentsDetailsControllerCreateMutationResult = NonNullable<
  Awaited<ReturnType<typeof riskStudentsDetailsControllerCreate>>
>;
export type RiskStudentsDetailsControllerCreateMutationBody =
  CreateRiskStudentsDetailDto;
export type RiskStudentsDetailsControllerCreateMutationError =
  ErrorType<unknown>;

export const useRiskStudentsDetailsControllerCreate = <
  TError = ErrorType<unknown>,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof riskStudentsDetailsControllerCreate>>,
    TError,
    { data: CreateRiskStudentsDetailDto },
    TContext
  >;
}) => {
  const { mutation: mutationOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof riskStudentsDetailsControllerCreate>>,
    { data: CreateRiskStudentsDetailDto }
  > = (props) => {
    const { data } = props ?? {};

    return riskStudentsDetailsControllerCreate(data);
  };

  return useMutation<
    Awaited<ReturnType<typeof riskStudentsDetailsControllerCreate>>,
    TError,
    { data: CreateRiskStudentsDetailDto },
    TContext
  >(mutationFn, mutationOptions);
};
export const riskStudentsDetailsControllerFindAll = (signal?: AbortSignal) => {
  return baseInstance<PagedRiskStudentsDetail>({
    url: `/risk-students-details`,
    method: "get",
    signal,
  });
};

export const getRiskStudentsDetailsControllerFindAllQueryKey = () => [
  `/risk-students-details`,
];

export type RiskStudentsDetailsControllerFindAllQueryResult = NonNullable<
  Awaited<ReturnType<typeof riskStudentsDetailsControllerFindAll>>
>;
export type RiskStudentsDetailsControllerFindAllQueryError = ErrorType<unknown>;

export const useRiskStudentsDetailsControllerFindAll = <
  TData = Awaited<ReturnType<typeof riskStudentsDetailsControllerFindAll>>,
  TError = ErrorType<unknown>
>(options?: {
  query?: UseQueryOptions<
    Awaited<ReturnType<typeof riskStudentsDetailsControllerFindAll>>,
    TError,
    TData
  >;
}): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const { query: queryOptions } = options ?? {};

  const queryKey =
    queryOptions?.queryKey ?? getRiskStudentsDetailsControllerFindAllQueryKey();

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof riskStudentsDetailsControllerFindAll>>
  > = ({ signal }) => riskStudentsDetailsControllerFindAll(signal);

  const query = useQuery<
    Awaited<ReturnType<typeof riskStudentsDetailsControllerFindAll>>,
    TError,
    TData
  >({ queryKey, queryFn, ...queryOptions }) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryKey;

  return query;
};

export const riskStudentsDetailsControllerFindOne = (
  id: string,
  signal?: AbortSignal
) => {
  return baseInstance<RiskStudentsDetailEntity>({
    url: `/risk-students-details/${id}`,
    method: "get",
    signal,
  });
};

export const getRiskStudentsDetailsControllerFindOneQueryKey = (id: string) => [
  `/risk-students-details/${id}`,
];

export type RiskStudentsDetailsControllerFindOneQueryResult = NonNullable<
  Awaited<ReturnType<typeof riskStudentsDetailsControllerFindOne>>
>;
export type RiskStudentsDetailsControllerFindOneQueryError = ErrorType<unknown>;

export const useRiskStudentsDetailsControllerFindOne = <
  TData = Awaited<ReturnType<typeof riskStudentsDetailsControllerFindOne>>,
  TError = ErrorType<unknown>
>(
  id: string,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<typeof riskStudentsDetailsControllerFindOne>>,
      TError,
      TData
    >;
  }
): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const { query: queryOptions } = options ?? {};

  const queryKey =
    queryOptions?.queryKey ??
    getRiskStudentsDetailsControllerFindOneQueryKey(id);

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof riskStudentsDetailsControllerFindOne>>
  > = ({ signal }) => riskStudentsDetailsControllerFindOne(id, signal);

  const query = useQuery<
    Awaited<ReturnType<typeof riskStudentsDetailsControllerFindOne>>,
    TError,
    TData
  >({ queryKey, queryFn, enabled: !!id, ...queryOptions }) as UseQueryResult<
    TData,
    TError
  > & { queryKey: QueryKey };

  query.queryKey = queryKey;

  return query;
};

export const riskStudentsDetailsControllerUpdate = (
  id: string,
  updateRiskStudentsDetailDto: UpdateRiskStudentsDetailDto
) => {
  return baseInstance<RiskStudentsDetailEntity>({
    url: `/risk-students-details/${id}`,
    method: "patch",
    headers: { "Content-Type": "application/json" },
    data: updateRiskStudentsDetailDto,
  });
};

export type RiskStudentsDetailsControllerUpdateMutationResult = NonNullable<
  Awaited<ReturnType<typeof riskStudentsDetailsControllerUpdate>>
>;
export type RiskStudentsDetailsControllerUpdateMutationBody =
  UpdateRiskStudentsDetailDto;
export type RiskStudentsDetailsControllerUpdateMutationError =
  ErrorType<unknown>;

export const useRiskStudentsDetailsControllerUpdate = <
  TError = ErrorType<unknown>,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof riskStudentsDetailsControllerUpdate>>,
    TError,
    { id: string; data: UpdateRiskStudentsDetailDto },
    TContext
  >;
}) => {
  const { mutation: mutationOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof riskStudentsDetailsControllerUpdate>>,
    { id: string; data: UpdateRiskStudentsDetailDto }
  > = (props) => {
    const { id, data } = props ?? {};

    return riskStudentsDetailsControllerUpdate(id, data);
  };

  return useMutation<
    Awaited<ReturnType<typeof riskStudentsDetailsControllerUpdate>>,
    TError,
    { id: string; data: UpdateRiskStudentsDetailDto },
    TContext
  >(mutationFn, mutationOptions);
};
export const riskStudentsDetailsControllerRemove = (id: string) => {
  return baseInstance<RiskStudentsDetailEntity>({
    url: `/risk-students-details/${id}`,
    method: "delete",
  });
};

export type RiskStudentsDetailsControllerRemoveMutationResult = NonNullable<
  Awaited<ReturnType<typeof riskStudentsDetailsControllerRemove>>
>;

export type RiskStudentsDetailsControllerRemoveMutationError =
  ErrorType<unknown>;

export const useRiskStudentsDetailsControllerRemove = <
  TError = ErrorType<unknown>,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof riskStudentsDetailsControllerRemove>>,
    TError,
    { id: string },
    TContext
  >;
}) => {
  const { mutation: mutationOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof riskStudentsDetailsControllerRemove>>,
    { id: string }
  > = (props) => {
    const { id } = props ?? {};

    return riskStudentsDetailsControllerRemove(id);
  };

  return useMutation<
    Awaited<ReturnType<typeof riskStudentsDetailsControllerRemove>>,
    TError,
    { id: string },
    TContext
  >(mutationFn, mutationOptions);
};