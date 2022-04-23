import { DocumentStatus } from '../ts/enums';
import { GraphQLResolveInfo } from 'graphql';
import { Context } from '../config/context';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type EnumResolverSignature<T, AllowedValues = any> = { [key in keyof T]?: AllowedValues };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Agent = {
  __typename?: 'Agent';
  email: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  password: Scalars['String'];
};

export type AuthPayload = {
  __typename?: 'AuthPayload';
  token: Scalars['String'];
  user: Agent;
};

export type Document = {
  __typename?: 'Document';
  id: Scalars['ID'];
  medication: Array<Medication>;
  status: DocumentStatus;
  user: User;
};

export { DocumentStatus };

export type Medication = {
  __typename?: 'Medication';
  id: Scalars['ID'];
  name: Scalars['String'];
  price: Scalars['Float'];
  refundable: Scalars['Boolean'];
};

export type MedicationInput = {
  name: Scalars['String'];
  price: Scalars['Float'];
  refundable: Scalars['Boolean'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createAgent?: Maybe<Agent>;
  createDocument?: Maybe<Document>;
  createMedication?: Maybe<Medication>;
  createUser: User;
  deleteAgent?: Maybe<Agent>;
  deleteDocument?: Maybe<Document>;
  deleteMedication?: Maybe<Medication>;
  deleteUser?: Maybe<User>;
  login: AuthPayload;
  updateAgent?: Maybe<Agent>;
  updateDocument?: Maybe<Document>;
  updateMedication?: Maybe<Medication>;
  updateUser?: Maybe<User>;
};


export type MutationCreateAgentArgs = {
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
};


export type MutationCreateDocumentArgs = {
  medication: Array<Scalars['ID']>;
  user: Scalars['ID'];
};


export type MutationCreateMedicationArgs = {
  input: MedicationInput;
};


export type MutationCreateUserArgs = {
  input: UserInput;
};


export type MutationDeleteAgentArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteDocumentArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteMedicationArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['ID'];
};


export type MutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationUpdateAgentArgs = {
  email?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateDocumentArgs = {
  id: Scalars['ID'];
  status?: InputMaybe<DocumentStatus>;
};


export type MutationUpdateMedicationArgs = {
  id: Scalars['ID'];
  input: MedicationInput;
};


export type MutationUpdateUserArgs = {
  id: Scalars['ID'];
  input: UserInput;
};

export type Query = {
  __typename?: 'Query';
  agents: Array<Maybe<Agent>>;
  document?: Maybe<Document>;
  documents: Array<Document>;
  medication?: Maybe<Medication>;
  medications: Array<Medication>;
  user?: Maybe<User>;
  users: Array<User>;
};


export type QueryDocumentArgs = {
  id: Scalars['ID'];
};


export type QueryMedicationArgs = {
  id: Scalars['ID'];
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};

export type User = {
  __typename?: 'User';
  address: Scalars['String'];
  cin: Scalars['String'];
  city: Scalars['String'];
  documents?: Maybe<Array<Maybe<Document>>>;
  email: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  phone: Scalars['String'];
};

export type UserInput = {
  address: Scalars['String'];
  cin: Scalars['String'];
  city: Scalars['String'];
  email: Scalars['String'];
  name: Scalars['String'];
  phone: Scalars['String'];
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Agent: ResolverTypeWrapper<Agent>;
  AuthPayload: ResolverTypeWrapper<AuthPayload>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Document: ResolverTypeWrapper<Document>;
  DocumentStatus: DocumentStatus;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Medication: ResolverTypeWrapper<Medication>;
  MedicationInput: MedicationInput;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']>;
  User: ResolverTypeWrapper<User>;
  UserInput: UserInput;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Agent: Agent;
  AuthPayload: AuthPayload;
  Boolean: Scalars['Boolean'];
  Document: Document;
  Float: Scalars['Float'];
  ID: Scalars['ID'];
  Medication: Medication;
  MedicationInput: MedicationInput;
  Mutation: {};
  Query: {};
  String: Scalars['String'];
  User: User;
  UserInput: UserInput;
};

export type AgentResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Agent'] = ResolversParentTypes['Agent']> = {
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  password?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AuthPayloadResolvers<ContextType = Context, ParentType extends ResolversParentTypes['AuthPayload'] = ResolversParentTypes['AuthPayload']> = {
  token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['Agent'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DocumentResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Document'] = ResolversParentTypes['Document']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  medication?: Resolver<Array<ResolversTypes['Medication']>, ParentType, ContextType>;
  status?: Resolver<ResolversTypes['DocumentStatus'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DocumentStatusResolvers = EnumResolverSignature<{ APPROVED?: any, PENDING?: any, REJECTED?: any }, ResolversTypes['DocumentStatus']>;

export type MedicationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Medication'] = ResolversParentTypes['Medication']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  refundable?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createAgent?: Resolver<Maybe<ResolversTypes['Agent']>, ParentType, ContextType, RequireFields<MutationCreateAgentArgs, 'email' | 'name' | 'password'>>;
  createDocument?: Resolver<Maybe<ResolversTypes['Document']>, ParentType, ContextType, RequireFields<MutationCreateDocumentArgs, 'medication' | 'user'>>;
  createMedication?: Resolver<Maybe<ResolversTypes['Medication']>, ParentType, ContextType, RequireFields<MutationCreateMedicationArgs, 'input'>>;
  createUser?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationCreateUserArgs, 'input'>>;
  deleteAgent?: Resolver<Maybe<ResolversTypes['Agent']>, ParentType, ContextType, RequireFields<MutationDeleteAgentArgs, 'id'>>;
  deleteDocument?: Resolver<Maybe<ResolversTypes['Document']>, ParentType, ContextType, RequireFields<MutationDeleteDocumentArgs, 'id'>>;
  deleteMedication?: Resolver<Maybe<ResolversTypes['Medication']>, ParentType, ContextType, RequireFields<MutationDeleteMedicationArgs, 'id'>>;
  deleteUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationDeleteUserArgs, 'id'>>;
  login?: Resolver<ResolversTypes['AuthPayload'], ParentType, ContextType, RequireFields<MutationLoginArgs, 'email' | 'password'>>;
  updateAgent?: Resolver<Maybe<ResolversTypes['Agent']>, ParentType, ContextType, RequireFields<MutationUpdateAgentArgs, 'id'>>;
  updateDocument?: Resolver<Maybe<ResolversTypes['Document']>, ParentType, ContextType, RequireFields<MutationUpdateDocumentArgs, 'id'>>;
  updateMedication?: Resolver<Maybe<ResolversTypes['Medication']>, ParentType, ContextType, RequireFields<MutationUpdateMedicationArgs, 'id' | 'input'>>;
  updateUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationUpdateUserArgs, 'id' | 'input'>>;
};

export type QueryResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  agents?: Resolver<Array<Maybe<ResolversTypes['Agent']>>, ParentType, ContextType>;
  document?: Resolver<Maybe<ResolversTypes['Document']>, ParentType, ContextType, RequireFields<QueryDocumentArgs, 'id'>>;
  documents?: Resolver<Array<ResolversTypes['Document']>, ParentType, ContextType>;
  medication?: Resolver<Maybe<ResolversTypes['Medication']>, ParentType, ContextType, RequireFields<QueryMedicationArgs, 'id'>>;
  medications?: Resolver<Array<ResolversTypes['Medication']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryUserArgs, 'id'>>;
  users?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType>;
};

export type UserResolvers<ContextType = Context, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  address?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  cin?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  city?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  documents?: Resolver<Maybe<Array<Maybe<ResolversTypes['Document']>>>, ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  phone?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = Context> = {
  Agent?: AgentResolvers<ContextType>;
  AuthPayload?: AuthPayloadResolvers<ContextType>;
  Document?: DocumentResolvers<ContextType>;
  DocumentStatus?: DocumentStatusResolvers;
  Medication?: MedicationResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
};

